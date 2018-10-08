// <<const, let, var>> <<name>> : <<datentyp>> = <<wert>>

let halloWeltVar : any = "hallo Welt"

halloWeltVar 
halloWeltVar = "Hallo"
halloWeltVar 

let halloWeltConst = "hallo Welt"

halloWeltConst = "Hallo"


halloWeltConst

// Gültigkeitsbereich
let testvar:any = 0
{
    testvar = "test"
    testvar
}
testvar


// Ausgabe
{
    const hallo = "hallo"
    hallo
    console.log(hallo)
    console.log("test")

}

// string
{
    let zeichenkette : string
    zeichenkette = "test"
    zeichenkette = 'test'
    zeichenkette = `test`

    // ausgabe einzelner zeicehn eines strings mit []
    const buchstabe = zeichenkette[3]
    buchstabe

    const zeichenkettenlaenge = zeichenkette.length
    zeichenkettenlaenge

    zeichenkette = "hallo " + "welt"
    zeichenkette
}


// stringinterpulation
{
    let max = "Max Mustermann"
    let hallomax = `Hallo ${max}`
    hallomax
}

// boolean

{
    let wahrheitswert:boolean = false //true
    wahrheitswert

    // und
    wahrheitswert = true && false
    wahrheitswert

    // oder
    wahrheitswert = true || false
    wahrheitswert

    // nicht
    wahrheitswert = !true
    wahrheitswert

    // klammern
    wahrheitswert = (true || false) && false
    wahrheitswert

    wahrheitswert = true || (false && false)
    wahrheitswert


    let a:boolean = true
    let b:boolean = false
    let c:boolean = true
    let ergebnis:boolean = (a && b) || (a && c)
    ergebnis
}

// number
{
    let nummer:number

    nummer = 1
    nummer

    nummer = 1.3
    nummer

    nummer = 1 + 1 
    nummer

    nummer = 1 - 1
    nummer

    nummer = 1.1 * 9
    nummer

    nummer = 2.2 / 3
    nummer

    nummer = 1 / 0
    nummer

    // rest der divison
    nummer = 4 % 3
    nummer
}

/*
    gegeben const
    gesucht let
*/
{
    const a:number = 10
    const b:number = 5
    let c:number 
    c = a + b
    console.log(`Summe von ${a} und ${b} = ${c}`)
}


/* 
    gegeben:
    Spannung U = 230 V
    Leistung P = 950 W

    gesucht:
    I in Ampere

    P = U * I
*/
{
    const U:number = 230
    const P:number = 950
    let I:number
    I = P / U
    console.log(`Bei einer Leistung von ${P} Watt und einer Spannung von ${U} Volt beträgt die Stromstärke ${I} Ampere.`)
}    
/*
    gegeben:
    Spannung U = 230 V
    Leistung P = 650 W
    Anzahl n = 15

    gesucht:
    I in Ampere
    P_ges in W

    P = U * I
*/
{
    const U:number = 230
    const P:number = 650
    const n:number = 15
    let I:number
    I = P / U
    console.log(`Bei einer Leistung von ${P} Watt und einer Spannung von ${U} Volt beträgt die Stromstärke ${I} Ampere.`)
    
    let P_ges:number
    P_ges = n * P
    console.log(`Der Gesamtverbrauch liegt bei ${P_ges} Watt`)
}

// Basistypen umwandeln

{
    const irgendwas:any = 87

    const wahrheitswert:boolean = Boolean(irgendwas)
    wahrheitswert

    const nummer:number = Number(irgendwas)
    nummer

    const zeichenkette:string = String(irgendwas)
    const zeichen:string = zeichenkette[1]
    zeichenkette
    zeichen
}

// Vergleich
{
    const nummer:number = 1
    const zeichenkette: string = "1"

    let wahrheitswert:boolean

    // == werte vergleichen
    wahrheitswert = zeichenkette == nummer
    wahrheitswert

    // === werte und typ vergleichen
    wahrheitswert = zeichenkette === nummer
    wahrheitswert

    wahrheitswert = zeichenkette != nummer
    wahrheitswert

    wahrheitswert = zeichenkette !== nummer
    wahrheitswert
}
{
    const zahl1:number = 1
    const zahl2:number = 3

    let wahrheitswert:boolean

    wahrheitswert = zahl1 <= zahl2
    wahrheitswert

    wahrheitswert = zahl1 >= zahl2
    wahrheitswert

    wahrheitswert = zahl1 < zahl2
    wahrheitswert

    wahrheitswert = zahl1 > zahl2
    wahrheitswert
}

// undefined oder default

{
    let undef = undefined
    let def = undef || "nichts eingeben"

    def
}