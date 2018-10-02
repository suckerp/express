import { create } from 'express-handlebars'
import express = require('express')
//import cookieParser = require('cookie-parser')
import session = require('express-session')


//muss in der index.ts zuerst einzeln importiert und dann gemeinsam exportiert werden
import {
    Kunden,
    Motorrad
} from './routes'

//Alternative als Einzelimport
//import {Kunden} from './kunden'
//import {Motorrad} from './routes/motorrad'


const app = express()

const hbsOptions : ExphbsOptions = {
    defaultLayout:'main',
    extname:".hbs",
}

const hbs = create(hbsOptions)

app.engine('hbs',hbs.engine).set('view engine','hbs')


app.use(session({
    secret: "made by Me",
}))


app.use(
    express.static('static'),
    express.static('public'),
    express.urlencoded({extended:false})
)

//Wenn Handlebars, Sessions usw. vorher hier genutzt werden, dann muss man sie nicht in die einzelnen Routes einpflegen
//gilt nicht für DB-Zugriff
app.use(
    Motorrad,
    Kunden
)


app.get('/', (req,res)=>{
    const session = req.session as Express.Session
    res.render('start',{ 
        kunde: session.kunde})
})

//mit Parameter ist er dann signed, der Schlüssel sollte sicher gewählt werden
/*app.use(cookieParser("test"))


app.get('/cookie',(req,res)=>{
    res.cookie('meincookie', "test", {
        expires: new Date(Date.now()+90000000)
    })
    res.cookie('meincookie2', "test", {
        expires: new Date(Date.now()+90000000),
        signed: true,
        httpOnly: true
    })
    console.log(req.headers)
    console.log(req.cookies)
    console.log(req.signedCookies)
    //res.clearCookie("meincookie")
    res.send("Cookies")
})

app.get('/sessionSetzen',(req,res)=>{
        const session = req.session as Express.Session
        session.name = "meinName"
        res.send(`
            <h2>Session gesetzt</h2>
            <a href="sessionLesen">Weiter</a>
        `
        
        )
})

app.get('/sessionLesen',(req,res)=>{

    const session = req.session as Express.Session
    res.json(session)
})*/

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


