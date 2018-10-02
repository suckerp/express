
import template = require('./static/templates/tageListe.hbs') 
import test = require('./static/spreadsheets/Autovermietung_1_NF.xlsx') 


const out = document.getElementById("out") as HTMLDivElement

console.log(test.Sheets)

out.innerHTML = template({ 
    tage:["Montag","Dinstag","Mittwoch"]
})


