import {} from 'handlebars'
import * as template from './templates/handlebar.hbs'


const sendButton = document.getElementById("sendButton") as HTMLButtonElement
const preisFeld = document.getElementById("preis") as HTMLInputElement
const mengenFeld = document.getElementById("menge") as HTMLInputElement
const postenFeld = document.getElementById("posten") as HTMLInputElement
const outputFeld = document.getElementById("output") as HTMLDivElement
let check:boolean = false

//Typ für die Einkaufsliste definieren
type EinkaufsItem = {
    posten:string,
    menge:number,
    preis:number,
    summe:number
}

//Einkaufsliste als Array definieren/initialisieren
let liste:EinkaufsItem[]  = []

start()


const startlistener = (e:Event) => {
    e.preventDefault()

    //Eintrag hinzufügen
    itemsAddieren()

    window.localStorage.setItem("table", JSON.stringify(liste))

    ausgabe()

    postenFeld.value = ""
    mengenFeld.value = "0"
    preisFeld.value = "0"
}

//
function itemsAddieren(){
    if (liste.length){
        //Array durchlaufen lassen, ob Posten schon existiert
        for (let i=0; i<liste.length;i++){

            //Falls es exisitert
            if (liste[i].posten == postenFeld.value){

                //Addieren der aktuellen Menge und der alten Menge und Rückgabe als String
                mengenFeld.value = String(Number(mengenFeld.value)+liste[i].menge)
                
                //Alten Eintrag entfernen
                liste.splice(i,1)
                check = true
                
                //Liste neu befüllen
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

//Füllfunktion
function listeFüllen(){

    //Summe für jeden einzelnen Artikel
    const summe = parseInt(mengenFeld.value) * parseInt(preisFeld.value)

    //Hinzufügen der einzelnen Werte zum Einkaufslisten-Array
    liste.push({
        posten: postenFeld.value,
        menge: Number(mengenFeld.value), 
        preis: Number(preisFeld.value),
        summe
    })
}

sendButton.addEventListener("click", startlistener)


function start(){
    const listString = window.localStorage.getItem("table") || "[]"

    liste = JSON.parse(listString)

    ausgabe()

}

function ausgabe(){

    let gesamt:number = 0
    for (let item of liste){
        gesamt += item.preis * item.menge
    }

    const output = template ({
        liste,
        gesamt
    })

    outputFeld.innerHTML = output
}