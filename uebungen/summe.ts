{
    const array:number[] = [2, 17, 10, 9, 16, 3, 9, 16, 5, 1, 17, 14]

    function multiplizieren(feld:number[]):number{
        let ergebnis = 1
        for (let item of feld){
            ergebnis *= item
        }
        return ergebnis
    }

    function addieren(feld:number[]):number{
        let ergebnis = 0
        for (let item of feld){
            ergebnis += item
        }
        return ergebnis
    }

    console.log(multiplizieren(array))

    console.log(addieren(array))

    const Produkt = array.reduce((acc, val) => acc * val, 1)
    Produkt

    const Summe = array.reduce((acc, val) => acc + val, 0)
    Summe
}