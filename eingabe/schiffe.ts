import readlineSync = require('readline-sync')

type spielfeld = {aufgedeckt:boolean, schiff:boolean}[][]




function spielfeld_fuellen(x, y){

}

function schiffinzeile(){
    
}


function eingabe(){
    let eingabe = readlineSync.question("Buchstabe A-H und Zahl von 0-9: ")
    let array = eingabe.split("").map(x=>String(x))
    return array
}