// if-else

{
    let wahrheitswert:boolean = true
    if (wahrheitswert){
        wahrheitswert
    } else{
        wahrheitswert
    }
}

{
    let buchstabe:string = "A"
    if (buchstabe === "A"){
        console.log("A")
    } else if (buchstabe === "B") {
        buchstabe
        console.log("B")
    } else {
        console.log("weder A noch B")
    }
}

{
    const zahl : number = 461647
    if (zahl % 2 == 0) {
        console.log(`Die Zahl ${zahl} ist gerade`)
    } else {
        console.log(`Die Zahl ${zahl} ist ungerade`)
    }
}

// Schaltjahrrechner
{
    const jahreszahl:number = 1984
    if (jahreszahl % 4 != 0 || jahreszahl % 100 == 0 && jahreszahl % 400 != 0) {
        console.log(`Das Jahr ${jahreszahl} ist kein Schaltjahr`)
    } else {
        console.log(`Das Jahr ${jahreszahl} ist ein Schaltjahr`)
    }
}

{
    const jahreszahl:number = 1900
    if (jahreszahl % 4 == 0 && (jahreszahl % 100 != 0 || jahreszahl % 400 == 0)) {
        console.log(`Das Jahr ${jahreszahl} ist ein Schaltjahr`)
    } else {
        console.log(`Das Jahr ${jahreszahl} ist kein Schaltjahr`)
    }
}


{
    const jahreszahl:number = 2004
    if (jahreszahl % 4 == 0) {
        if (jahreszahl % 100 == 0){
            if (jahreszahl % 400 == 0){
                console.log(`Das Jahr ${jahreszahl} ist ein Schaltjahr`)
            } else {
                console.log(`Das Jahr ${jahreszahl} ist kein Schaltjahr`)
            }
        } else {
        console.log(`Das Jahr ${jahreszahl} ist ein Schaltjahr`)
        }
    } else {
        console.log(`Das Jahr ${jahreszahl} ist kein Schaltjahr`)
    }
    
}

// switch



{
    const zahl:number = 4

    switch(zahl){
        case 1:
            console.log("1")
            break
        case 2:
            console.log("2")
            break
        case 3:
            console.log("3")
            break
        case 4:
        case 5:
        case 6:
            console.log("4, 5, 6")
            break

        default:
            console.log("sonst")
    }
}

// ternary operator
{
    let wahrheitswert = true
    let Elvis = wahrheitswert ? "Ja" : "Nein"

    Elvis
    
}