// Lambda Funktion

{
    const Plus = function(summand1, summand2){
        return summand1 + summand2
    }

    const Plus2 = (summand1, summand2)=>{
        return summand1 + summand2
    }

    const Plus3 = (summand1, summand2)=> summand1 + summand2

    console.log(Plus(1,2))

    console.log(Plus2(1,2))

    console.log(Plus3(1,2))

    // Plus, Plus2 und Plus3 sind identisch
}

// Funktionen höherer Ordnung
// Lambda Funktion
// Callbacks

{
    // Funktion als Rückgabewert

    function erstelleHalloWelt():Function {
        return () => { console.log("Hallo Welt") }
    }
    
    const halloWelt = erstelleHalloWelt()
    halloWelt()

    erstelleHalloWelt()()

    // Funktion als Eingabeparameter

    function ausfuehren ( callback:Function){
        callback()
    }

    ausfuehren(()=> {console.log("hallo Welt")})

}


// map filter rduce

{
    const array = [1,2,3,4,5,6,7,8,9,10]

    console.log(array.filter(x => x <= 5))

    const mapArray = array.map(x=> x + 5)
    mapArray

    const reduceArray = array.reduce((acc, val) => acc + val, 0)
    reduceArray

    // alle zusammen
    const resultArray = array
        .filter(x => x <= 5)
        .map(x=> x + 5)
        .reduce((acc, val) => acc + val, 0)

    resultArray


    const test = [1,2,3,4,5]
    const Fakultaet = test.reduce((acc, val) => acc * val, 1)
    Fakultaet
}

// Funktionen mit optionalen Parametern und ParameterArray
{
    // mit = wird ein default-Wert gesetzt, der aber durch (x) beim Funktionsaufruf überchrieben wird, bei () wir der default-Wert genommen
    function MitOptional(value = 5){
        console.log(value)
    }

    MitOptional()

    function MitParameterArray(...param){
        for (let item of param){
            console.log(item)
        }
    }

    MitParameterArray(1,2,3,4)
}

// Array.of, Array.from

{
    const array = Array.of(1,2,3,4,5,6)
    array

    const array2 = Array.from("hallo Welt")
    array2

}

// String: fromCharCode, trim, toLowerCase, to UpperCase...
{
    const buchstabe = String.fromCharCode(97)
    buchstabe

    const charcode = buchstabe.charCodeAt(0)
    buchstabe

}

