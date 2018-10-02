import readlineSync = require('readline-sync')

function zahlerstellen(bereich){
    return (Math.ceil(Math.random()*bereich))
}

function zahlraten(zahl){
    let geraten = false 
    let count = 1

    console.log("Sie haben 10 Versuche die Zahl zwischen 1 und 100 zu erraten")

    while (geraten == false && count <= 10){
        let tipp = Number(readlineSync.question("Ihr "+count+". Tipp? "))
        if (zahl > tipp){
            console.log("Leider falsch. Die gesuchte Zahl ist groesser als "+tipp)
            count++
        }
        else if(zahl < tipp){
            console.log("Leider falsch. Die gesuchte Zahl ist kleiner als "+tipp)
            count++
        }
        else if(zahl == tipp){
            console.log("Herzlichen Glueckwunsch. Die gesuchte Zahl war "+tipp)
            geraten = true
        }
    }
    if (count==10){
    console.log("Leider hast Du Deine 10 Versuche ausgenutzt. Die gesucht Zahl war "+zahl)
    }
}

let bereich = Number(readlineSync.question("Wie gross soll die Zahl maximal sein?"))
let zahl = zahlerstellen(bereich)
zahlraten(zahl)