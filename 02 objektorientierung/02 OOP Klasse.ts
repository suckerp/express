// in Klassen keine , nach den Einträgen
// und kein function vor dem Funktionsnamen

class Datum {
    Jahr:number
    Monat:number
    Tag:number
}

// standardmäßig ist alles public in den Klassen
// private wird nach Außen nicht mehr angezigt (Autovervollständigung bspw.)
class Person {
    /* standard wie in Java
    public Vorname:string

    public Nachname: string

    private Geburtstag: Datum

    // Im Constructor werden dei Eingabevariablen aus dem Aufruf übergeben und dann zugewiesen
    constructor(vorname:string, nachname:string){
        this.Vorname = vorname
        this.Nachname = nachname
    }
    */

    // Alternativ in Typescript, wieder mit , nach den Attributen, da ObjectLiteral
    constructor(
        public Vorname:string,
        public Nachname: string,
        private Geburtstag: Datum
    ){
    }


    public Name(){
        return this.Vorname + " " + this.Nachname
    }
}

const maxGeburtstag = new Datum()
maxGeburtstag.Tag = 21
maxGeburtstag.Monat = 8
maxGeburtstag.Jahr = 2000

const max2 = new Person("Max","Mustermann", maxGeburtstag)
const tim = new Person("Tim","Mustermann",{
    Tag: 20,
    Monat: 8,
    Jahr: 2001
})


console.log(max2.Name())



class createCounter {
    zahl
    constructor(Zahl:number){
        this.zahl = Zahl
    }
    increment(){
        this.zahl++
    }
    decrement(){
        this.zahl--
    }
    getZahl(){
        return this.zahl
    }

}

const counter = new createCounter(3)

counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.decrement()

console.log(counter.getZahl())
console.log(counter.zahl)



class Auto {
    Hersteller:string
    Modell:string
    PS:number
    Tankvolumen:number
    Verbrauch:number
    Baujahr:number
    KM:number
    Preis:number

    KW(){
        return Math.round(this.PS*0.73599)
    }

    constructor(hersteller, modell, ps, tankvolumen, verbrauch, baujahr, km, preis){
        this.Hersteller = hersteller
        this.Modell = modell
        this.PS = ps
        this.Tankvolumen = tankvolumen
        this.Verbrauch = verbrauch
        this.Baujahr = baujahr
        this.KM = km
        this.Preis = preis
    }

    Kosten(){
        return Math.round(this.KM*this.Preis*this.Verbrauch)/100 + "€"
    }

    beschleunigen(){
        console.log("Beschleunigen")
    }

    bremsen(){
        return "Bremsen"
    }

    Strecke(){
        return "Ein voller Tank reicht für "+Math.round(this.Tankvolumen/this.Verbrauch*100) +"km"
    }

   
}


const auto = new Auto("Toyota", "Auris", 101, 50, 7.65, 2009, 10000, 1.439)

//auto.KM = 5000

console.log(auto.Kosten())

console.log(auto.Strecke())

console.log(auto.KW())

console.log(auto.bremsen())



namespace Klassen
{
    export class Motor{
        Leistung:number
        Verbrauch:number
    }

    export class Tank{
        Max:number
        Fuellstand:number
    }

    export class Besitzer{
        Vorname:string
        Nachname:string
    }

    export class Fahrer{
        Vorname:string
        Nachname:string
    }

    export class Typ{
        Hersteller:string
        Modell:string
        Baujahr:number
        Farbe:string
    }

    export class Auto{
        
        fahrer:Fahrer

        typ:Typ

        constructor(
            motor:Motor,
            tank:Tank,
            besitzer:Besitzer
        ){}



        beschleunigen(){
            return "Beschleunigen"
        }
    
        bremsen(){
            return "Bremsen"
        }

        Strecke(){
            return "Die Tankfüllung reicht für "+Math.round((tank.Fuellstand-3)/motor.Verbrauch*100) +"km"
        }
    }

}

const tank = new Klassen.Tank() 
tank.Fuellstand = 50
tank.Max = 50

const motor = new Klassen.Motor()
motor.Leistung = 74
motor.Verbrauch = 7.65

const fahrer = new Klassen.Fahrer()
fahrer.Vorname = "Max"
fahrer.Nachname = "Mustermann"

const besitzer = new Klassen.Besitzer()
besitzer.Vorname = "Hans"
besitzer.Nachname = "Mustermann"

const typ = new Klassen.Typ()
typ.Baujahr = 2010
typ.Farbe = "schwarz"
typ.Hersteller = "Toyota"
typ.Modell = "Auris"


const auto_C = new Klassen.Auto(motor,tank,besitzer)
auto_C.fahrer = fahrer

auto_C.typ = typ

console.log(auto_C.typ.Hersteller)

console.log(auto_C.fahrer.Vorname + " " + auto_C.fahrer.Nachname)

console.log(auto_C.Strecke())

console.log(auto_C.beschleunigen())

