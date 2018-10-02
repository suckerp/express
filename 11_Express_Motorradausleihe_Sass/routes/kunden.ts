import express = require('express')
const router = express.Router()


import { MotorradAusleiheDB } from '.././model/dbAccess'
const db = new MotorradAusleiheDB()

//Geburtsdatum des Kunden wird umformatiert, der Rest bleibt
function formatKundenliste(kunden:any){
    return {...kunden, 
        K_GebDat:
            `
            ${kunden.K_GebDat.getUTCDate()}.${kunden.K_GebDat.getUTCMonth()+1}.${kunden.K_GebDat.getUTCFullYear()}
            `
    }
}

//Überprüft, ob ein Kunde eingeloggt ist
const authenticationGuard:express.RequestHandler = (req,res,next)=>{
    const session = req.session as Express.Session
    if(session.kunde){
        // Übergibt die Weiterverarbeitung an die nächste Funktion
        next() 
    } else {
        res.redirect('/login')
    } 
}

//Verarbeitung der neuen Accountdaten
router.post('/account_erstellen',(req,res)=>{
    const session = req.session as Express.Session
    const dauer = 604800000
    //wenn die Passwörter nicht übereinstimmen, wird die Seite neu angezeigt
    if (req.body.password != req.body.password_wdh) {
        res.sendFile(__dirname + "/static/" + 'account.html')
    }
    else{
        //den ganzen Body einlesen und dann an die Datenbank übergeben
        const customer = req.body
        db.addCustomer(customer)
            .then(results => {
                //Nach dem Eintragen des neuen Kunden wird er gleich eingeloggt
                db.getCustomer(req.body.account, req.body.password)
                    .then(results => {
                        if (results.length) {
                                session.kunde = {
                                    kid: Number(results[0].K_ID),
                                    account: results[0].K_ACCOUNT,
                                    pass: results[0].K_PASSWORT
                                }
                            if (req.body.remember == "on"){
                                session.cookie.maxAge = dauer
                            }
                            const KundenListe = results.map(formatKundenliste)
                            res.render('KundenListe',{
                                kunde: session.kunde, 
                                KundenListe})
                        }
                    })
                    .catch(error=>{
                        res.json(error)
                    })
                })
            .catch(error => {
                res.json(error)
            })
    }
})


//Kundeliste wird nur angezeigt, wenn authenticationGuard erfüllt ist
router.get('/kundenliste', authenticationGuard,(req,res)=>{
    const session = req.session as Express.Session
    
    //Nach dem Eintragen des neuen Kunden
    db.getAllCustomers()
        .then(results => {
            const KundenListe = results.map(formatKundenliste)
            res.render('KundenListe',
            {
                kunde: session.kunde, 
                KundenListe
            })
        })
        .catch(error=>{
            res.json(error)
        })
})


router.get('/login',(req,res)=>{
    res.render('login',)
})


router.post('/login',(req,res)=>{
    const session = req.session as Express.Session
    //bei Daten Speichern wird die Session für 1 Woche gespeichert (1000*3600*24*7)
    const dauer = 604800000
    let frau:boolean
    db.getCustomer(req.body.account, req.body.password)
        .then(results => {
            if (results.length) {
                    session.kunde = {
                        kid: Number(results[0].K_ID),
                        account: results[0].K_ACCOUNT,
                        pass: results[0].K_PASSWORT
                    }
                if (req.body.remember == "on"){
                    session.cookie.maxAge = dauer
                }
                const KundenListe = results.map(formatKundenliste)
                if (KundenListe[0].Anrede == "Frau"){
                    KundenListe[0].frau = true
                } else{
                    KundenListe[0].frau = false
                }

                res.render('KundenListe',{
                    kunde: session.kunde, 
                    KundenListe})
            }
            else{
                res.render('login', {account_check: true})
            }
        })
        .catch(error => {
            res.json(error)
        })
})


router.get('/account_detail',(req,res)=>{ 
    const session = req.session as Express.Session
    db.getCustomer(session.kunde.account, session.kunde.pass)
        .then(results => {
            const KundenListe = results.map(formatKundenliste)
            res.render('KundenListe',{
                kunde: session.kunde, 
                KundenListe})
    })
})


router.get('/logout',(req,res)=>{
    const session = req.session as Express.Session
    session.destroy(e=>{
        res.redirect('/')
    })
})


export {router as Kunden}