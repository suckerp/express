import * as fs from 'fs'
import * as pem from 'pem'
import {createServer} from 'https'

import express = require('express')
//import { request } from 'http';

const app = express()


//Festlegen des Ordners static als Verzeichnis für die CSS und JS Datei
//urlencoded zur Auswertung von POST notwendig
app.use(
    express.static('static'),
    express.urlencoded({extended:false})
)


//nötig, wenn man mit render die handlebar rein im Server darstellen will
//views/layout muss die layout datei als hbs enthalten, hier die main.hbs
//enthält den Rahmen für die zu erstellende HTML-Datei, {{{body}}} muss enthalten sein
//dort wird dann das reingeschrieben, was im views als hbs Datei definiert ist 
const exphbs = require('express-handlebars')
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', '.hbs');


// komplettes auslagern beider benötigter Funktionen in die route_exp.ts
import {router} from './route_exp'
app.use(router)


// Erstellen von SSL-Keys und des SSL-Servers auf Port 443
pem.createCertificate({ days: 365, selfSigned: true },  (err, keys) => {    
    createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(443)
})


//Alternative für vorhandene Keys
/*const certificate = fs.readFileSync('\certificate.pem')
const serviceKey = fs.readFileSync('\serviceKey.pem')

createServer({ key: serviceKey, cert: certificate}, app).listen(443)*/



import * as mysql from 'mysql'

//Zugriff auf eine MySQL Datenbank
//Datenbank ist auf einer VM, daher IP, Port und User mit PW und Zugriffsrechten von außen '%'
const connection = mysql.createConnection({
    host: '10.10.105.100',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'onlineshop'
})


app.get('/mysql',(req,res)=>{
    
    //Verbindung aufbauen und ggf. Fehlermeldung ausgeben
    connection.connect((err)=> {
        
        if (err)
            res.status(500).json(err)
        else 
            console.log('You are now connected...')
    })


    //Abfrage aus einer Datenbank, Ergebnis ist ein Array
    connection.query('SELECT * FROM vmax17', (err, ergebnis:any[])=> {
        if (err)
            res.status(500).json(err)
        else
            res.json(ergebnis.map(x => x.Gesamtumsatz))
        //JSON Ausgabe ist nur 1x möglich, daher über die Map-Funktion das Array ausgeben
    })
    
    //Verbindung wieder beenden
    connection.end()

})


import mysql2 = require('mysql2/promise')

app.get('/mysql2',(req,res)=>{

    async function getData(){
        try {
       
            const connection2 = await mysql2.createConnection({
                host: '10.10.105.100',
                port: 3306,
                user: 'root',
                password: 'root',
                database: 'onlineshop'
            })
            // query database
            const result = await connection2.execute('SELECT * FROM vmax17')


            res.json(result[0])
        } catch (err){
            res.json(err)
        }
    }

    getData()


})


//mit Pools gibt es Autovervollständigung
import  mssql = require('mssql/msnodesqlv8')


const pool = new mssql.ConnectionPool({
    user: 'sa',
    password: 'Pa$$w0rd',
    server: '10.10.105.107',
    port: 1433,
    database: 'dozenten'
})

pool.connect(err => {
    console.log(err)
})

app.get('/mssql',(req,res)=>{

    const request = new mssql.Request(pool)
    request.query('select * from dozenten')
        .then(x => res.json(x))
        .catch(e => res.json(e))

})


const sql = require('mssql/msnodesqlv8')

app.get('/mssql2',(req,res)=>{

    async function getMSSQL(){
        try {
            await sql.connect('mssql://test:test@10.10.105.107/dozenten')
            const result = await sql.query`select * from dozenten`
            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }

    getMSSQL()

})


app.listen(3000)