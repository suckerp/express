

import { create } from 'express-handlebars'
import express = require('express')
import mysql = require('mysql')

const app = express()

const hbsOptions : ExphbsOptions = {
    defaultLayout:'main',
    extname:".hbs",
}

const hbs = create(hbsOptions)

app.engine('hbs',hbs.engine).set('view engine','hbs')

app.use(
    express.static('public'),
    express.urlencoded({extended:false})
)

//########################################################################
//   Routes
//########################################################################

// http://localhost:3000/halloPerson
app.get('/halloPerson',(req,res)=>{
    res.render('halloPerson', {
        Vorname:"Max",
        Nachname:"Mustermann",
    })
})

// http://localhost:3000/PersonenListe
app.get('/PersonenListe',(req,res)=>{
    res.render('PersonenListe', {
        PersonenListe:["Max","Susi","Tim"]
    })
})


app.get('/Posts',(req,res)=>{
    res.render('Posts', {
        posts:[
            {
                titel:"sunt aut facere repellat", 
                text: `
                    est rerum tempore vitae sequi sint nihil 
                    reprehenderit dolor beatae ea dolores neque 
                    fugiat blanditiis voluptate porro vel nihil 
                    molestiae ut reiciendis qui aperiam non 
                    debitis possimus qui neque nisi nulla
                `
            },
            {
                titel:"qui est esse", 
                text: `
                    quia et suscipit suscipit recusandae consequuntur 
                    expedita et cum reprehenderit molestiae ut ut quas 
                    totam nostrum rerum est autem sunt rem 
                    eveniet architecto
                `
            }
        ]
    })
})

const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'personen'
    })

app.get('/sql',(req,res)=>{

    
    const sqlString = 'select * from person where Age<=23'
    connection.query(sqlString, (err, ergebnis:any[])=> {
        if (err)
            res.json(err)
        else {

            const PersonenListe = ergebnis.map((x:any) => x.Vorname + " " + x.Nachname + " " + x.Age)

            res.render('PersonenListe', {PersonenListe})

            res.json(ergebnis)
        }
    })

})


//########################################################################
//   Starten der Datenverarbeitung an port 3000
//########################################################################
const port = 3000
app.listen(port,()=>{
    console.log(`
        Server wurde gestartet
        url: http://localhost:${port} 
    `)
})


