// Javascript/Typescript Object Literal (ReferenzTyp)
{
const person = {
    Nachname:"Mustermann",
    Vorname:"Max",
    Adresse:{
        Strasse:"Musterstraße",
        Hausnummer:1,
        Postleitzahl:12345,
        Ort: "Musterort"
    },
    Freunde:[]
}
console.log(person.Vorname)

console.log(person.Adresse.Postleitzahl)
}


// Types

    type Adresse = {
        Strasse:string,
        Hausnummer:number,
        Postleitzahl:number,
        Ort:string
    }
    type Person = {
        Nachname:string,
        Vorname:string,
        Adresse:Adresse
    }

    let test1 : Person



{
    type liste = {
        Bezeichnung:string,
        Preis:number,
        Menge:number
    }

    const einkauf:liste[] = [
        { Bezeichnung:"Brot", Preis:2, Menge:2 },
        { Bezeichnung:"Butter", Preis:2.45, Menge:3 },
        { Bezeichnung:"Milch", Preis:0.8, Menge:1 },
        { Bezeichnung:"Mehl", Preis:0.5, Menge:4 },
        { Bezeichnung:"Wasser", Preis:0.2, Menge:10 }

    ]

    function Kaufsumme(kauf:liste[]){
        let summe = 0

        for (let item of kauf){
            summe += Math.round(item.Preis * item.Menge*100)/100
        }
        return summe + "€"
    }
    
    console.log(Kaufsumme(einkauf))


}

// Destructuring und preadOperator

    const person = {
        Nachname:"Mustermann",
        Vorname:"Max",
        Adresse:{
            Strasse:"Musterstraße",
            Hausnummer:1,
            Postleitzahl:12345,
            Ort: "Musterort"
        },
        Freunde:[]
    }
    const {Vorname, Nachname} = person

    Vorname
    Nachname


    const user ={
        Password:"******",
        ...person
    }

    user

    function getPassword({Password}){
        console.log(Password)
    }

    getPassword(user)

// Union Type


    type Schwierigkeitsgrad = "leicht" | "mittel" | "schwer"

    const grad:Schwierigkeitsgrad = "leicht"

    grad


// Sum Type


type User = Person & {Password:string}



// Generische Programmierung

function test <T>(para:T){
    console.log(para)
}

test<string>("asfafadfdas")
test<number>(2323434)


const woerterbuch = {
    A:"wert1",
    B:"wert2"
}

const wert = woerterbuch["A"]
wert
