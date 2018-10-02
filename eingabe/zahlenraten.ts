import readlineSync = require('readline-sync')

function raten(unten, oben){

    let zahl = Math.ceil((oben+unten)/2)
    let geraten = false
    let temp

    while (geraten == false) {
        temp = eingabe(zahl)
        if (temp == "k"){
            oben = zahl
            zahl = Math.floor((zahl-unten)/2+unten)
        } else if (temp == "g" ){
            unten = zahl
            zahl = Math.ceil((oben-zahl)/2+zahl)
        } else if (temp == "r"){
            console.log("Deine Zahl ist: " + zahl)
            geraten = true
        }
    }
}

function eingabe(zahl){
    let eingabe = readlineSync.question("Tipp: " +zahl+ " Ist deine Zahl richtig geraten (r), groesser (g) oder kleiner (k) ")
    let temp = eingabe.split("").map(x=>String(x))
    let result = temp[0]
    return result
}

let unten = Number(readlineSync.question("Mindestwert?"))
let oben = Number(readlineSync.question("Maximalwert?"))
raten(unten, oben)



