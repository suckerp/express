// Array / Tuple
{

    //Typisierung optional (:number[])
    const array:number[] = [1, 2, 3, 4, 5, 6]
    array

    //Typisierung optional(:[number, string..])
    const tuple:[number, string, boolean] = [1, "test", true]
    tuple

    let wert1 = array[2]
    wert1

    let wert2 = tuple[2]
    wert2


    const Einkauf = [ ["Äpfel", 3], ["Butter", 4] ]
    Einkauf

    console.log(Einkauf[0][0])
    console.log(Einkauf[0][1])
    
}

{
    let array:number[] = []

    array[0] = 4
    array[4] = 3
    array
    console.log(array.length)

}

// Referenztypen vs. Wertetypen
{
    const wertTyp_A:string = "hallo"
    const wertTyp_B:string = "hallo"

    console.log(wertTyp_A === wertTyp_B)


    const refType_A:[string, number]= ["test", 1]
    const refType_B:[string, number]= ["test", 1]

    console.log(refType_A === refType_B)

}
{
    let wertTyp_A:string = "hallo"
    let wertTyp_B:string = wertTyp_A

    wertTyp_A
    wertTyp_B

    wertTyp_A = "hallo Welt"
    wertTyp_A
    wertTyp_B



    let refType_A:[string, number]= ["test", 1]
    let refType_B:[string, number]= refType_A

    refType_A
    refType_B

    refType_A[1] = 10
    refType_A
    refType_B

}

// Spread-Operator und Destructuring

{
    const array1 = [1, 2, 3, 4]
    const array2 = [10, 11, ...array1, 100]
    array2

    
    const [position1, position2, ...restArray] = array2
    position1
    position2
    restArray

}

{   
    const namen:string[] = ["Peter", "Paul", "Mary"]

    function ausgabe(eingabe:string[]):void {
        if (eingabe.length > 0){
            let [current, ...rest] = eingabe
            console.log("Hallo " + current)
            ausgabe(rest)
        }
    }
    
    ausgabe(namen)

}