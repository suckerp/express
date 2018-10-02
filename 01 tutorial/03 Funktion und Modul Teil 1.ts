// Sequenz / Procedure /Funktion

{
    function plus(summand1:number, summand2:number){
        const summe = summand1 + summand2
        return summe
    }

    
    console.log(plus (2,3))
    const sum = plus(2,3)
    sum
}

{
    let summe:number = 1

    function addieren(zahl:number){
        summe += zahl
    }

    addieren (3)

    summe
}

{
    function istTeilbar(zahl:number, teiler:number){
        if (zahl % teiler == 0) {
            return true
        }
        else {
            return false
        }
    }
    /*
    function istTeilbar(zahl:number, teiler:number){
            return zahl % teiler == 0
    }
    */
    const temp = istTeilbar (9,4)
    temp

}
// Wochentag berechnen
// mit switch-case
{
    function wochentag(tag:number, montag:number){
        let temp = tag % 7 - montag + 1
        let liste:string[] = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
        switch(temp){
            case 0:
                return "Sonntag"
            case 1: 
                return "Montag"
            case 2:
                return "Dienstag"
            case 3: 
                return "Mittwoch"
            case 4:
                return "Donnerstag"
            case 5: 
                return "Freitag"
            case 6:
                return "Samstag"
        }
    }
    console.log(wochentag(219,2))


}
// Wochentag berechnen
// mit array
{
    function wochentag2(tag:number, montag:number){
        let liste:string[] = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
        return liste[tag % 7 - montag]
    }
    console.log(wochentag2(219,1))
}

{
    function wochentag3(tag:number, jahr:number){
        let temp:number = tag % 7 + (1 + 5 * ((jahr - 1) % 4) + 4 * ((jahr - 1) % 100) + 6 * ((jahr -1 ) %400)) % 7 - 1
        temp %= 7
        let liste:string[] = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
        return liste[temp]
    }
    console.log(wochentag3(61,1908))
}

// rekurisive Funktionen

{
    function Countdown(nummer:number){
        console.log(nummer)
        if(nummer > 0){
            Countdown(nummer-1)
        }
    }

    Countdown(10)

    function SummebisX(num:number){
        if (num <= 0){
            return 0
        }
        else {
            return num + SummebisX(num-1)
        }
    }

    console.log(SummebisX(3))
}


{
    function Fakultaet(zahl:number){
        if (zahl > 1){
            return Fakultaet(zahl-1) * zahl
        }
        else {
            return 1
        }
    }
    console.log(Fakultaet(5))
}


// namespace oder module

namespace modulname{
    const hallo = "hallo"

    export function halloWelt(){
        return "Hallo Welt"
    }
}

{
    const hallo = modulname.halloWelt()
    hallo

}

// Math

{
    const gerundet = Math.round(3.6666)
    gerundet
    
    const abgeschnitten = Math.floor(3.6666)
    abgeschnitten
    
    const zufall = Math.random()
    zufall

    const zufall_zwischen_0_und_10 = Math.floor(Math.random() * 10)
    zufall_zwischen_0_und_10

    const zufall_zwischen_20_und_30 = Math.floor(Math.random() * 10) +20
    zufall_zwischen_20_und_30

}
{
    function Zufall (min:number, max:number){
        return Math.floor(Math.random() * (max-min) + min)
    }

    console.log(Zufall(1,1000))

}

{
    function Zufall2 (min:number, max:number){
        return Math.random() * (max-min) + min
    }

    console.log(Zufall2(Math.E,Math.PI))

}