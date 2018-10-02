import express = require('express')
import { request } from 'http';
//import bodyParser = require('body-parser')

const app = express()

//Wenn im static-Ordner eine index.html gefunden wird, dann wird dieses direkt ausgeführt und alles andere übergangen
//app.use(express.static('static'))



//Es wird immer nur die erste passende Funktion ausgeführt, wenn mehrere definiert sind

app.use((request, response, next)=> {
    //Ausgeabe von console.log landet in der Server-Konsole, nicht in der Browser-Konsole
    console.log("USE")

    //Übergibt den Zustand an die nächste passende Methode
    next()

    //response.send("USE")


})


//die eingabe hinter dem / ist dann das auswertbare Objekt, hier der frei gesetzte name nummer
//analog zum get/post Array in PHP
app.get('/params/:nummer',(request, response)=> { 
    const nummer:number = request.params.nummer
    console.log(nummer)
    //console.log(request.params.nummer)
    response.send(nummer)
})

//analog zum Überladen von Funktionen
app.get('/params/:nummer/:nummer2',(request, response)=> { 
    const nummer:number = request.params.nummer
    const nummer2:number = request.params.nummer2

    console.log(nummer)
    console.log(nummer2)
    //console.log(request.params.nummer)
    response.send(nummer+"  "+nummer2)

})

//http://localhost:3000/query?test='test'&'test2'
app.get('/query',(request, response)=> { 
    console.log(request.query)
    console.log(request.query.test)
    console.log(request.query.test2)

    //mit write die beiden vorladen und mit send rausschicken
    response.write(request.query.test)
    response.write(request.query.test2)
    response.send()
})



//HTML-Anfragen sind immer GET Requests

//Startadresse localhost (index.html / index.php usw)
app.get('/',(request, response)=> {
    response.send("Hallo Welt")
})

//Unteradresse localhost/test
app.get('/test',(request, response)=> {
    response.send("TEST")
})

//Ausgabe kann auch als html erfolgen
app.get('/html',(request, response)=> {
    response.send("<h1>Hallo Welt</h1>")
})

//Port, der abgehört werden soll, standardmäßig 80, der muss nicht angegeben werden
app.listen(3000, ()=>{
    console.log("Server wurde gestartet")
})


//Ausgabe nicht nur als Text / String / Html möglich, sondern auch als JSON Objekt
app.get('/json',(request, response)=> {
    response.json({
        vorname: "Max",
        nachname: "Mustermann"
    })
})


app.get('/html_neu',(request, response)=> {
    response.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Webpack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- materialize icons -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
        <!-- materialize CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
    
        <!-- materialize JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
        
    
        <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    
    </head>
    <body>
    
        <div id="output"></div>
    
        <label for="Posten">Posten</label>
        <input type="text" id="posten" class="input" value="">
    
        <label for="Menge">Menge</label>
        <input type="number" id="menge" class="input" display="inline-block" max-width="250px" value="0">
        
        <label for="Preis">Preis</label>
        <input type="number" id="preis" class="input" value="0">
        
    
        <button id="sendButton" class="btn waves-effect waves-d ">
            <i class="material-icons">send</i>
        </button>
    
    
        <script src="bundle.js"></script>
    </body>
    </html>
    `)
})


app.get('/html_neu2',(request, response)=> {
    response.write(`
        <!DOCTYPE html>
        <html>
        <head>
        </head>
        <body>
            <h1>TEST</h1>
            <ul> <li>
    `)

    let temp = "temp"
    response.write(temp)
    response.write(`
        </li>
        <li>
    `)
    
    response.write(temp)
    response.write(`
        </li>
        </ul>
        </body>
        </html>
    `)

    response.send()

})


app.get('/html_neu3',(request, response)=> {
    const personen = ["Tim", "Tom", "Tam", "Tum"]
    
    response.setHeader('Content-Type', 'text/html')

    response.write("<ul>")

    for (let person of personen){
        response.write("<li>")
        response.write(person)
        response.write("</li>")
    }
    response.write("</ul>")

    response.end()
})

let num:number = 0

app.get('/number', (request, response)=> {
    response.send(String(num))
    num++
})

/*
app.get('/primzahl1',(request, response)=> {

//Einbinden des komplettten Inhalts der CSS-Datei mit dem <style>-Tag im head

//Der Inhalt der Javascript-Datei wird in den <script>-Tag kopiert und kann dann ausgeführt werden
    response.write(`
        <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title>Primzahlen</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
            
                <!-- materialize icons -->
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            
                <!-- materialize CSS -->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
            
                <!-- materialize JavaScript -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
            
                <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
                <style>
                    
                    body {
                        display: flex;
                        min-height: 100vh;
                        flex-direction: column;
                    }

                    main {
                        flex: 1 0 auto;
                    }

                    .collection-item:hover {
                        background-color: #f1f1f1;
                        transition: background-color 0.5s;
                        transition-timing-function: ease-out;
                    }

                    .material-icons:hover {
                        transform: scale(1.3);
                        transition: transform 0.2s;
                        transition-timing-function: ease-out;
                    }

                    .noprim{
                        background-color: red;
                    }

                    td {
                        background-color: lightgreen;
                        display: inline-block;
                        text-align: center;
                        width: 40px;
                    }
                </style>
            
            </head>
            <body>
                <nav class="navbar-fixed">
                    <div class="nav-wrapper teal lighten-1">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">News</a>
                            </li>
                            <li>
                                <a href="#">Downloads</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            
                <main>
                    <div class="section">
                        <form class="input-field"> 
                            <input type="text" id="input">
                            <label for="input">Bis zu welcher Zahl sollen die Primzahlen ausgegeben werden? (max. 1024)</label>
                        </form> 
            
                        <button id="sendButton" class="btn waves-effect waves-d ">
                            <i class="material-icons">send</i>
                        </button>  
            
                        <table id="table"></table>
                        
                    </div>
            
                </main>
                <script>
                //Funktion zur Berechnung der Primzahlen
                function primzahlen(ziel) {
                    var zahlen = [];
                    var test = [];
                    var prim = [];
                    var noprim = [];
                    var pt = 0;
                    var pf = 0;
                    var temp = Math.ceil(Math.sqrt(ziel));
                    for (var i = 2; i <= ziel; i++) {
                        zahlen[i - 2] = i;
                    }
                    for (var i = 0; i <= ziel - 2; i++) {
                        test[i] = true;
                    }
                    for (var i = 2; i <= temp; i++) {
                        if (test[i] == true) {
                            prim[pt] = zahlen[i - 2];
                            pt++;
                        }
                        else {
                            noprim[pf] = zahlen[i - 2];
                            pf++;
                        }
                        for (var j = i * i; j <= ziel; j += i) {
                            test[j] = false;
                        }
                    }
                    for (var i = temp + 1; i <= ziel; i++) {
                        if (test[i] == true) {
                            prim[pt] = zahlen[i - 2];
                            pt++;
                        }
                        else {
                            noprim[pf] = zahlen[i - 2];
                            pf++;
                        }
                    }
                    //Übergabe der Nicht-Primzahlen an die Ausgabefunktion
                    output(noprim);
                }
                // Ausgabefunktion zum Erstellen der Tabelle
                function output(noprim) {
                    // Tabellenbreite und ~höhe ist die Wurzel der eingebenen Zahl (aufgerundet)
                    var temp = Math.ceil(Math.sqrt(ziel));
                    // counter dient zum nummerieren der Tabellenfelden
                    var counter = 1;
                    //Erstellen der Tabelle
                    for (var i = 0; i <= temp; i++) {
                        //Erstellen der Reihen
                        var row = outputTable.insertRow(i);
                        for (var j = 0; j <= temp; j++) {
                            // Wird nur aufgerufen, solange der Zähler kleiner gleich der eingegebenen Zahl ist
                            if (counter <= ziel) {
                                //Einfügen der Zellen und jeweiligen Zahl
                                var cell = row.insertCell(j);
                                cell.innerHTML += counter;
                                //jede Zelle mit einer Nicht-Primzahl und die 1 erhalten die id noprim
                                for (var _i = 0, noprim_1 = noprim; _i < noprim_1.length; _i++) {
                                    var item = noprim_1[_i];
                                    if (counter == item || counter == 1) {
                                        cell.setAttribute("id", "noprim");
                                    }
                                }
                                counter++;
                            }
                        }
                    }
                    // Aufrufen der Funktion zum Einfärben der Nicht-Primzahlen    
                    color();
                }
                //Funktion zum Einfärben der Nicht-Primzahlen
                function color() {
                    //Erstellen eines Arrays aus allen Zellen mit der id noprim (id immer mit # abgreifen)
                    var cell = Array.from(document.querySelectorAll("#noprim"));
                    var i = 0;
                    //Verzögerungsfunktion für das Einfärben der Nicht-Primzahlen
                    var interval = setInterval(function () {
                        //Löschen der Verzögerung beim Erreichen des Ende des Arrays
                        if (i == cell.length - 1)
                            clearInterval(interval);
                        //Alle Zellen mit der id noprim erhalten noch die Klasse noprim, die in der CSS die Farbe definiert hat
                        cell[i].setAttribute("class", "noprim");
                        i++;
                        //Verzögerung in ms für das Einfärben jeder Nicht-Primzahl
                    }, 500);
                }
                //Definition der verschiedenen Felder und Elemente in der HTML-Datei
                var inputField = document.getElementById("input");
                var sendButton = document.getElementById("sendButton");
                var outputTable = document.getElementById("table");
                var inputForm = document.querySelector("form");
                var ziel;
                //Erstellen einer Listenerfunktion zum Abfangen von Mausklicks und der Enter-Taste
                var startlistener = function (e) {
                    //Verhindern des Neustarts des Browsers bei Neustart
                    e.preventDefault();
                    //Tabelle wird leer gesetzt
                    outputTable.innerHTML = "";
                    //Umwandeln der Eingabe in eine Zahl
                    ziel = parseInt(inputField.value);
                    //Maximale Größe auf 1024 festgelegt
                    if (ziel > 1024) {
                        primzahlen(1024);
                    }
                    else {
                        primzahlen(ziel);
                    }
                    //Löschen des Eingabefeldes
                    inputField.value = "";
                };
                //Aufrufen der Listenerfunktion bei Enter
                inputForm.addEventListener("submit", startlistener);
                //Aufrufen der Listenerfunktion beim Mausklick
                sendButton.addEventListener("click", startlistener);
                
                
                </script>
            </body>
        </html>
    `)

    response.send()


})*/

//Festlegen des Ordners static als Verzeichnis für die CSS und JS Datei
app.use(express.static('static'))



//Auslesen des Pfades und dann wird die index.html Datei ausgeführt
app.get('/primzahl',(request, response)=> {
    //const path = require('path')
    //const static1 = path.join(__dirname, 'static')
    //response.sendFile(path.join(static1, 'index.html'))
    response.sendFile(__dirname + "/static/" + 'index.html')

})

//wird benötigt, um die unten in der POST Methode die eingebenen Werte auslösen zu können
//app.use(bodyParser.urlencoded({extended:false}))


//bodyparser ist seit Express 4.0 standardmäßig integriert und wird so angesprochen
app.use(express.urlencoded({extended:false}))

//Eingabefomular ausgeben und die Daten nach Klick auf "Submit" an /FormSubmit weiterleiten bzw. die Seite aufrufen
app.get('/form',(request, response)=> { 
    response.send(`
        <form action="/FormSubmit" method="POST">
            First name:<br>
            <input type="text" name="firstname" value="Mickey"><br>
            Last name:<br>
            <input type="text" name="lastname" value="Mouse"><br><br>
            <input type="submit" value="Submit">
        </form> 
    `)
})



//POST Methode für eingegebene Formulardaten
app.post('/FormSubmit',(request, response)=> {
    console.log(request.body)
    console.log(request.body.firstname)
    console.log(request.body.lastname)
    response.send("FormSubmit")
})


app.use(express.static('liste_handle_express'))
//app.use(express.static('liste_handle_express/handlebar'))



//Einkaufsliste wird zum Client geschoben und dort ausgeführt
app.get('/liste_handle', (request, response) => {
    //const path = require('path')
    //const handle = path.join(__dirname, 'liste_handle_express')
    //response.sendFile(path.join(handle, 'index.html'))
    
    response.sendFile(__dirname + "/liste_handle_express/" + 'index.html')
});


//nötig, wenn man mit render die handlebar rein im Server darstellen will
//views/layout muss die layout datei als hbs enthalten, hier die main.hbs
//enthält den Rahmen für die zu erstellende HTML-Datei, {{{body}}} muss enthalten sein
//dort wird dann das reingeschrieben, was im views als hbs Datei definiert ist 
const exphbs = require('express-handlebars')
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', '.hbs');


//Definition von Personen
type Personen = {
    vorname:string,
    nachname:string,
    login:string,
    logout:string
}

//Erstellen eines leeren Arrays vom Typ Person
let person:Personen[]  = []

//Einfaches Eingabefeld für Vorname u. Nachname
app.get('/einloggen',(request, response)=> { 
    response.send(`
        <form action="/ausgabe" method="POST">
            Vorname:<br>
            <input type="text" name="vorname"><br>
            Nachname:<br>
            <input type="text" name="nachname"><br><br>
            <!-- <input type="submit" value="Submit"> -->
            <button id="sendButton">Abschicken</button>
        </form> 
    `)
})

app.post('/ausgabe',(request, response)=> {
    let tag = new Date()
    let check = false
    if (person.length == 0){
        person.push({
                vorname: request.body.vorname,
                nachname: request.body.nachname,
                login: tag.toLocaleString(),
                logout: "none"
            })
        check = true
    } else {
        for (let i=0; i<person.length;i++){
            if (request.body.vorname == person[i].vorname && request.body.nachname == person[i].nachname && person[i].logout == "none"){
                person.push({
                    vorname: person[i].vorname,
                    nachname: person[i].nachname,
                    login: person[i].login,
                    logout: tag.toLocaleString()
                })
                person.splice(i,1)
                check = true
                break
            }
        }
    }
    if (check == false){
        person.push({
            vorname: request.body.vorname,
            nachname: request.body.nachname,
            login: tag.toLocaleString(),
            logout: "none"
        })
    }

    //ruft die handle_log aus dem views Ordner auf, fügt die Daten ein und zeigt die komplette HTML-Datei ab
    //Array muss als Objekt in {} übergeben werden
    response.render('handle_log', {person})

})



//Einkaufsliste rein serverseitig
type EinkaufsItem = {
    posten:string,
    menge:number,
    preis:number,
    summe:number
}

let liste:EinkaufsItem[] = []

app.get('/liste',(req, res)=> {
    res.render('liste_handle', {liste, layout:"liste"})
})


app.post('/liste_aus',(req, res)=> {
    let check:boolean = false
    itemsAddieren()
    ausgabe()

    req.body.posten = ""
    req.body.menge = "0"
    req.body.preis = "0"
    function itemsAddieren(){
        if (liste.length){
            for (let i=0; i<liste.length;i++){
                if (liste[i].posten == req.body.posten){
                    req.body.menge = String(Number(req.body.menge)+liste[i].menge)
                    liste.splice(i,1)
                    check = true
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

    function listeFüllen(){
        const summe = parseInt(req.body.menge) * parseInt(req.body.preis)

        liste.push({
            posten: req.body.posten,
            menge: Number(req.body.menge), 
            preis: Number(req.body.preis),
            summe
        })
    }

    function ausgabe(){
        let gesamt:number = 0
        for (let item of liste){
            gesamt += item.preis * item.menge
        }
        //mehrere Objekte für die Handlebar mit Komma getrennt auflisten
        //mit layout: "" kann man das gewünschte Layout für die Ausgabe angeben
        res.render('liste_handle', {liste, gesamt, layout:"liste"})
    }
})


app.get('/liste_exp1',(req, res)=> {
    res.render('liste_handle2', {liste, layout:"liste2"})
})

// gleiche Ausgabe wie oben, nur die Funktion ist komplett ausgelagert in die liste_exp.ts
import liste_exp = require ('./liste_exp')
app.post('/liste_exp2', liste_exp.liste_exp)


// komplettes auslagern beider benötigter Funktionen in die route_exp.ts
import {router} from './route_exp'
app.use(router)





//ideal um nicht existierende Seiten abzufangen, aber ganz am Ende, da immer die erste Methode ausgeführt wird
app.get('/:para',(request, response)=> { 
    response.send(`
        ungültige Seite ${request.params.para}
    `)
})


