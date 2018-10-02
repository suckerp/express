interface ArrayConstructor{
    from<T>(arrayLike:ArrayLike<T>):Array<T>
}


//Funktion zur Berechnung der Primzahlen
function primzahlen(ziel:number){
    let zahlen:number[] = []
    let test:boolean[] = []
    let prim:number[] = []
    let noprim:number[] = []
    let pt = 0
    let pf = 0
    let temp = Math.ceil(Math.sqrt(ziel))

    for (let i=2; i<=ziel; i++){
        zahlen[i-2] = i
    }

    for (let i=0; i<=ziel-2; i++){
        test[i] = true
    }

    for (let i = 2; i<=temp; i++){
        if (test[i] == true){
            prim[pt] = zahlen[i-2]
            pt++
        }
        else {
            noprim[pf] = zahlen[i-2]
            pf++
        }
        for (let j=i*i; j<=ziel; j+=i){
            test[j] = false
        }
    }

    for (let i=temp+1; i<=ziel; i++){
        if (test[i]==true){
            prim[pt] = zahlen[i-2]
            pt++
        }
        else {
            noprim[pf] = zahlen[i-2]
            pf++
        }
    }

    //Übergabe der Nicht-Primzahlen an die Ausgabefunktion
    output(noprim)
}

// Ausgabefunktion zum Erstellen der Tabelle
function output(noprim:number[] ){

    // Tabellenbreite und ~höhe ist die Wurzel der eingebenen Zahl (aufgerundet)
    let temp = Math.ceil(Math.sqrt(ziel))
    
    // counter dient zum Nummerieren der Tabellenfelden
    let counter = 1

    //Erstellen der Tabelle
    for (let i=0;i<=temp;i++){

        //Erstellen der Reihen
        let row = outputTable.insertRow(i)

        for (let j=0; j<=temp; j++){

        // Wird nur aufgerufen, solange der Zähler kleiner gleich der eingegebenen Zahl ist
            if (counter <= ziel){
            
                //Einfügen der Zellen und jeweiligen Zahl
                let cell = row.insertCell(j)
                cell.innerHTML += counter

                //jede Zelle mit einer Nicht-Primzahl und die 1 erhalten die id noprim
                for (let item of noprim){
                    if (counter == item || counter == 1) {
                        cell.setAttribute("id","noprim")
                    }
                }
                counter++
            }
        }
    }

    // Aufrufen der Funktion zum Einfärben der Nicht-Primzahlen    
    color()

    
    // Version mit Verzögerung der Ausgabe der Tabelle / Zahlen
    /*let i = 0

    let interval2:any

    const interval = setInterval(()=>{
        if (i==temp) clearInterval(interval)
        let row = outputTable.insertRow(i)
        let j = 0

        interval2 = setInterval(()=>{
            if (j==temp-1) clearInterval(interval2)
            if (counter <= ziel){
            let cell = row.insertCell(j)
                cell.innerHTML += counter
                for (let item of noprim){
                    if (counter == item || counter == 1) {
                        //cell.setAttribute("class","noprim")
                        cell.setAttribute("id","noprim")
                    }
                }
                j++
                counter++
            }
        },(3000/(Math.ceil(Math.sqrt(ziel)))-10))
        i++
        color()
    },3000)*/

}

//Funktion zum Einfärben der Nicht-Primzahlen
function color(){

    //Erstellen eines Arrays aus allen Zellen mit der id noprim (id immer mit # abgreifen)
    const cell = Array.from(document.querySelectorAll("#noprim")) as HTMLTableCellElement[]
    let i = 0

    //Verzögerungsfunktion für das Einfärben der Nicht-Primzahlen
    const interval = setInterval(()=>{

        //Löschen der Verzögerung beim Erreichen des Ende des Arrays
        if (i==cell.length-1) clearInterval(interval)

        //Alle Zellen mit der id noprim erhalten noch die Klasse noprim, die in der CSS die Farbe definiert hat
        cell[i].setAttribute("class","noprim")
        i++

    //Verzögerung in ms für das Einfärben jeder Nicht-Primzahl
    },500)
}

//Definition der verschiedenen Felder und Elemente in der HTML-Datei
const inputField = document.getElementById("input") as HTMLInputElement
const sendButton = document.getElementById("sendButton") as HTMLButtonElement
const outputTable = document.getElementById("table") as HTMLTableElement
const inputForm = document.querySelector("form") as HTMLFormElement
let ziel:number

//Erstellen einer Listenerfunktion zum Abfangen von Mausklicks und der Enter-Taste
const startlistener = (e:Event) => {

    //Verhindern des Neustarts des Browsers bei Neustart
    e.preventDefault()
    
    //Tabelle wird leer gesetzt
    outputTable.innerHTML = ""

    //Umwandeln der Eingabe in eine Zahl
    ziel = parseInt(inputField.value)

    //Maximale Größe auf 1024 festgelegt
    if (ziel > 1024){
        primzahlen(1024)
        }
    else{
        primzahlen(ziel)
    }

    //Löschen des Eingabefeldes
    inputField.value = ""
}

//Aufrufen der Listenerfunktion bei Enter
inputForm.addEventListener("submit", startlistener)

//Aufrufen der Listenerfunktion beim Mausklick
sendButton.addEventListener("click", startlistener)

