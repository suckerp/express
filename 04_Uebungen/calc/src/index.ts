interface ArrayConstructor{
    from<T>(arrayLike:ArrayLike<T>):Array<T>
}

import {} from 'handlebars'
import template from './templates/handlebar.hbs'

//Einlesen des Anzeigefelds und des Div's, indem der Rechner aufgebaut werden soll
const outputFeld = document.getElementById("output") as HTMLOutputElement
const rechnerFeld = document.getElementById("rechner") as HTMLDivElement

//Rechenzeichen werden in einem Dictionary angelegt um später per zeichen. darauf zugreifen zu können
const zeichen = {
    plus: "+",
    minus: "-",
    mal: "*",
    div: "/",
    komma: ",",
    clear: "C",
    sum: "=",
    k_auf: "(",
    k_zu: ")"
}

//Definition der buttonList, welche die Buttons für die Handlebar enthält
//muss in der richtigen Reihenfolge für das Grid sein
//enthält auch id und Klassennamen, damit man die Buttons per CSS ansprechen kann
const buttonList = [
    { zeichen: zeichen.clear, klasse:"btn btnstr", id:"ButtonC"},
    { zeichen: zeichen.k_auf, klasse:"btn btnstr", id:"ButtonA"},
    { zeichen: zeichen.k_zu, klasse:"btn btnstr", id:"ButtonZ"},
    { zeichen: zeichen.div, klasse:"btn btnstr", id:"ButtonD"},
    { zeichen: "7", klasse:"btn btnnum", id:"Button7"},
    { zeichen: "8", klasse:"btn btnnum", id:"Button8"},
    { zeichen: "9", klasse:"btn btnnum", id:"Button9"},
    { zeichen: zeichen.mal, klasse:"btn btnstr", id:"ButtonQ"},
    { zeichen: "4", klasse:"btn btnnum", id:"Button4"},
    { zeichen: "5", klasse:"btn btnnum", id:"Button5"},
    { zeichen: "6", klasse:"btn btnnum", id:"Button6"},
    { zeichen: zeichen.minus, klasse:"btn btnstr", id:"ButtonM"},
    { zeichen: "1", klasse:"btn btnnum", id:"Button1"},
    { zeichen: "2", klasse:"btn btnnum", id:"Button2"},
    { zeichen: "3", klasse:"btn btnnum", id:"Button3"},
    { zeichen: zeichen.plus, klasse:"btn btnstr", id:"ButtonP"},
    { zeichen: "0", klasse:"btn btnnum", id:"Button0"},
    { zeichen: zeichen.komma, klasse:"btn btnstr", id:"ButtonK"},
    { zeichen: zeichen.sum, klasse:"btn btnstr", id:"ButtonS"},
]

/*const output = template ({
    buttonList
})*/

//rechnerFeld.innerHTML = output


//kurze Schreibweise zum endgültigen Aufbau des Rechners
rechnerFeld.innerHTML = template({buttonList})


//die Zahlen- u. Zeichenfelder werden als Array eingelesen
const buttonListNum = Array.from(document.querySelectorAll(".btnnum")) as HTMLButtonElement[]
const buttonListStr = Array.from(document.querySelectorAll(".btnstr")) as HTMLButtonElement[]

//check ist dafür da, damit das Komma nur 1x pro Zahl verwendet wird
//zahlen ist das Array für die eingegeben Zahlen und operator das Array für die Rechenoperationen
let check = false
let zahlen:number[] = []
let operator:string[] = []


//wenn ein Ziffernbutton gedrückt wird, dann wird die Zahl dem OutputFeld hinzugefügt
for (let button of buttonListNum){
    button.addEventListener("click", () => {
        //die führende 0 wird damit ignoriert
        if (outputFeld.value == "0"){
            outputFeld.innerHTML = button.value
        } else{
            outputFeld.innerHTML += button.value
        }
    })
}

//Abfangen der Rechenzeichen
for (let button of buttonListStr){
    button.addEventListener("click", () => {

        //Komma wird nur einmalog pro Zahl vermerkt, als . und der check wird true
        if (button.value == zeichen.komma && check == false){
            outputFeld.innerHTML += "."
            check = true

        //Druck auf C löscht alles, auch check wird zurückgesetzt
        } else if (button.value == zeichen.clear){
            outputFeld.innerHTML = "0"
            zahlen = []
            operator = []
            check = false

        //Ausrechnen des Ergebnisses
        } else if (button.value == zeichen.sum){
            
            //die letzte Zahl wird ins zahlen-Array eingefügt 
            zahlen.push(Number(outputFeld.value))
            outputFeld.innerHTML = ""

            //Übergabe an die Berechnungsfunktion und Umwandlung zum String
            outputFeld.innerHTML = (Berechnung(zahlen, operator)).toString()

            //Zurücksetzen aller Felder / check
            zahlen = []
            operator = []
            check = false
        //Klammern werden erst Mal ignoriert
        } else if (button.value == zeichen.k_auf || button.value == zeichen.k_zu ){
        
        //alle anderen Rechenoperationen werden hier abgefangen
        } else {

            //die letzte Zahl wird ins zahlen-Array eingefügt 
            zahlen.push(Number(outputFeld.value))

            //der Operator wird ins operator-Array eingefügt 
            operator.push(button.value)

            outputFeld.innerHTML = "0"
            check = false
        }
    })
}

//Berechnungsfunktion
function Berechnung(zahlen:number[], operator:string[]){
    let result = zahlen[0]

    //Der Index des Operators ist immer eine Steller vor der Zahl 
    for (let i=1; i<zahlen.length; i++){
        if (operator[i-1]==zeichen.plus){
            result += zahlen[i]
        }
        if (operator[i-1]==zeichen.minus){
            result -= zahlen[i]
        }
        if (operator[i-1]==zeichen.mal){
            result *= zahlen[i]
        }
        if (operator[i-1]==zeichen.div){
            result /= zahlen[i]
        }
    }
    return result
}