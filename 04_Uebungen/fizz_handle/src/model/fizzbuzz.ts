type feld = {
        zahl:number,
        wort:string
}

export function fizzbuzz(ziel:number){
    let fizzfeld:feld[] = []
    for (let i=1; i<=ziel; i++){
        if (i % 5 == 0 && i % 7 == 0){
            fizzfeld.push({zahl:i, wort:"fizzbuzz"})
        }
        else if (i % 5 == 0){
            fizzfeld.push({zahl:i, wort:"fizz"})
        }
        else if (i % 7 == 0){
            fizzfeld.push({zahl:i, wort:"buzz"})
        }
        else {
            fizzfeld.push({zahl:i, wort:""})
        }
    }
    return fizzfeld
}
