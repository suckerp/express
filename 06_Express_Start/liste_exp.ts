import {Request, Response} from 'express'

type EinkaufsItem = {
    posten:string,
    menge:number,
    preis:number,
    summe:number
}

let liste:EinkaufsItem[] = []

export function liste_exp(req:Request, res:Response) {
    let check:boolean = false
    itemsAddieren()
    ausgabe()

    req.body.posten = ""
    req.body.menge = "0"
    req.body.preis = "0"
    function itemsAddieren(){
        if (liste.length){
            for (let i=0; i<liste.length;i++){
                if (liste[i].posten == req.body.posten){
                    req.body.menge = String(Number(req.body.menge)+liste[i].menge)
                    liste.splice(i,1)
                    check = true
                    listeFüllen()
                    break
                }
                else {
                    check = false
                }
            }
            if (check == false){
                listeFüllen()
            }
        } else {
            listeFüllen()
        }
    }

    function listeFüllen(){
        const summe = parseInt(req.body.menge) * parseInt(req.body.preis)

        liste.push({
            posten: req.body.posten,
            menge: Number(req.body.menge), 
            preis: Number(req.body.preis),
            summe
        })
    }

    function ausgabe(){
        let gesamt:number = 0
        for (let item of liste){
            gesamt += item.preis * item.menge
        }
        //mehrere Objekte für die Handlebar mit Komma getrennt auflisten
        //mit layout: "" kann man das gewünschte Layout für die Ausgabe angeben
        res.render('liste_handle2', {liste, gesamt, layout:"liste2"})
    }
}