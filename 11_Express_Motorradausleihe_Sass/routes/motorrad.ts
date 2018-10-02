import express = require('express')
const router = express.Router()

import { MotorradAusleiheDB } from '.././model/dbAccess'
const db = new MotorradAusleiheDB()

//Type für die Leihdaten wird definiert
type leihdaten ={
    anfang:Date,
    ende:Date
};

//Bessere Darstellung des Baujahrs und des TÜV's, alle anderen Einträgen bleiben unverändert
function FormatMotorradliste(motorrad:any){
    return {...motorrad, M_Baujahr: motorrad.M_Baujahr.getUTCFullYear(), M_TUEV: String((motorrad.M_TUEV.getUTCMonth()+1) + "/" + motorrad.M_TUEV.getUTCFullYear())}
}

//Bessere Darstellung des Baujahrs und der Ausleihedaten, der Rest bleibt unverändert
function FormatMotorradAusleihe(motorrad:any){
    return {...motorrad,
        M_Baujahr: motorrad.M_Baujahr.getUTCFullYear(),
        AusleiheBeginn:
            `
            ${motorrad.AusleiheBeginn.getDate()}.${motorrad.AusleiheBeginn.getMonth()+1}.${motorrad.AusleiheBeginn.getFullYear()}
            `,
        AusleiheEnde:
            `
            ${motorrad.AusleiheEnde.getDate()}.${motorrad.AusleiheEnde.getMonth()+1}.${motorrad.AusleiheEnde.getFullYear()}
            `
    }
}

//Umwandeln des Datums in yyyy-mm-dd
function DatumsKonvertierung(datum:any){
    const date = new Date(datum)
    const tag = '' + date.getDate()
    const monat = '' + (date.getMonth() + 1)
    const jahr = date.getFullYear()
    return new Date([jahr, monat, tag].join('-'))
}

//Die Tage als Array rausfiltern, an denen ein Motorrad bereits ausgeliehen ist
function BlockDaten(leihdaten:leihdaten[]){
    let counter = 0
    let blockTage:Date[] = []
    let temp
    //Äußere Schleife über die Anzahl der Gesamten Einträge in der leihdaten-Liste
    for (let i=0; i<leihdaten.length;i++){
        //Counter zur Berechnung der jeweiligen Anzahl der Tage, an denen das Motorrad ausgeliehen wae
        // Ergebnis in ms, daher durch 1000*3600*24 teilen für die Anzahl der Tage
        counter = (Number(leihdaten[i].ende) - Number(leihdaten[i].anfang))/86400000
        //Innere Schleife über die oben im Counter berechneten Leihtage
        for (let j=0; j<=counter; j++){
            //new Date, da temp sonst nur auf leihdaten[i].anfang referenziert und darauf arbeitet
            temp = new Date(leihdaten[i].anfang)
            //neues Datum wird zum blockTage Array hinzugefügt
            blockTage.push(new Date(temp.setDate(temp.getDate()+j)))
        }
    }
    return blockTage
}

//Liste aller eingetragener Motorräder aus der Datenbank auslesen und anzeigen lassen
router.get('/MotorradListe',(req,res)=>{
    //session wird benötigt, um auf die Elemente der Session zugreifen zu können 
    const session = req.session as Express.Session
    db.getAllMotorcycles()
        .then(results => {
            //Baujahr und TÜV werden durch das Mappen mit der Funktion angepasst
            const MotorradListe = results.map(FormatMotorradliste)
            if (session.kunde){
                //wenn ein Kunde eingeloggt, also in der Session eingetragen ist, dann wird der Ausleihen Link angezeigt
                //wird über login_check an die Handlebar weitergeleitet
                res.render('MotorradListe',{
                    kunde: session.kunde, 
                    MotorradListe,
                    login_check:true})
            } else {
                //Ansonsten fehlt der Ausleihen-Link
                res.render('MotorradListe',{
                    kunde: session.kunde, 
                    MotorradListe,
                    login_check:false})
            }
        })
        .catch(error => {
            res.json(error)
        })
    })

//Ausleihseite des gewählten Motorrads für den eingeloggten User anzeigen, MID ist die Motorrad ID
router.get('/ausleihen/:MID',(req,res)=>{
    const session = req.session as Express.Session
    let leihdaten:leihdaten[] = []

    //Check, ob ein Kunde eingeloggt ist
    if (session.kunde){
        session.kunde.mid = req.params.MID
        //Auslesen der bisherigen Leihen eines Motorrads
        db.checkRentState(session.kunde.mid)
        .then(results => {
            if (results.length>0){
                //Start und Enddaten der bisherigen Leihen in das Objekt leihdaten schieben
                for (let item of results){
                    let ausleihebeginn = DatumsKonvertierung(item.AusleiheBeginn)
                    let ausleihende = DatumsKonvertierung(item.AusleiheEnde)
                    leihdaten.push({
                        anfang:ausleihebeginn,
                        ende:ausleihende
                    })
                }
            }
            //Übergabe an die Funktion BlockDaten zur Berechnung aller nicht verfügbaren Tage
            return BlockDaten(leihdaten)
        })
        //nächste Datenbankabfrage, die BlockDaten übergeben bekommt
        .then(BlockDaten => {
            db.getMotorcycleDetail(session.kunde.mid, session.kunde.kid)
            .then(results => {
                const MotorradListe = results.map(FormatMotorradAusleihe)
                res.render('MotorradDetails',{
                    MotorradListe, 
                    kunde: session.kunde, 
                    leih_check: session.kunde.leih_check,
                    //hier werden die nicht verfügbaren Tage an die entsprechende Handlebar übergeben, die diese dann an das clientseitige JS übergibt, um diese Daten im Datepicker als nicht verfügbar anzeigt
                    //es muss unbedingt ein toDateString() sein
                    dates:JSON.stringify(
                        BlockDaten.map(x => x.toDateString())
                    )
                })
            })
            .catch(error => {
                res.json(error)
            })
        })
    }
    //Falls kein Kunde eingeloggt ist wird die Liste aller Motorräder angezeigt 
    else res.redirect('/MotorradListe')
})

//POST Methode zum Eintragen / Überprüfen der Leihe
router.post('/ausleihen',(req,res)=>{
    const session = req.session as Express.Session
    //eingegebene Leihdaten werden ausgelesen und umgewandelt 
    const leihbeginn = DatumsKonvertierung(req.body.leihbeginn)
    const leihende = DatumsKonvertierung(req.body.leihende)
    
    //Check, ob irgendein Datum belegt ist
    let test = false
    let ausleihebeginn
    let ausleihende

    //Festlegen der Leihdaten zum späteren eintragen
    const leihe = {
        mid:session.kunde.mid,
        kid:session.kunde.kid,
        leihbeginn:req.body.leihbeginn,
        leihende:req.body.leihende,
        km:req.body.km
    }

    //Auslesen der bisherigen Leihen eines Motorrads
    db.checkRentState(session.kunde.mid)
        .then(results => {
            const MotorradListe = results
            if (MotorradListe.length>0){
                for (let item of MotorradListe){
                    ausleihebeginn = DatumsKonvertierung(item.AusleiheBeginn)
                    ausleihende = DatumsKonvertierung(item.AusleiheEnde)
                    //Überprüfen, ob der Zeitraum zwischen den gewählten Leihbegin und Leihende verfügbar ist
                    if ((leihbeginn < ausleihebeginn && leihende < ausleihebeginn) || (leihbeginn > ausleihende && leihende > ausleihende)){
                    } else {
                        //wenn nicht, dann wird test wahr
                        test = true
                    }
                }
            } 
            //Noch nötig???
            else {
                test = false
            }
        })
        //nächste Datenbank wird aufgerufen
        .then(()=>{
            //wenn test falsch ist, dann kann die Ausleihe eingetragen werden
            if (test==false){
                db.rentMotorCycle(leihe)
                    .then(results => {
                        //leih_check für die Ausgabe der Fehlermeldung ist falsch
                        session.kunde.leih_check = false
                        res.redirect("/ausleihen/"+session.kunde.mid)
                    })
                    .catch(error => {
                        res.json(error)
                    })
            } else {
                //hier wird dann die Fehlermeldung mit angezeigt
                session.kunde.leih_check = true
                res.redirect("/ausleihen/"+session.kunde.mid)
            }
        })
        .catch(error => {
            res.json(error)
        })
})


export {router as Motorrad}