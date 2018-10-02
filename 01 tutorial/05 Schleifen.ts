// while und do while
{
    let lauf = 0
    while(lauf < 5){
        console.log("hallo")
        lauf++
    }
}

{
    let lauf = 0
    do{
        console.log("hallo")
        lauf++
    } while(lauf < 5)
}


// for-Schleife
{
    for(let i=0; i<=5; i++){
        console.log(i)
    }
}


// erweiterte for-Schleife (für Arrays)
{
    const array = [0,1,2,3,4,5]
    for(let item of array){
        item
    }

}

{
    const array = [0,1,2,3,4,5]

    function summe(zahlen){
        let sum:number = 0
        for(let i=0; i<zahlen.length; i++){
            sum += zahlen[i]
        }
        console.log(sum)
    }
    summe(array)
}

{
    const array2 = [0,1,2,3,4,5]

    function summe2(zahlen){
        let sum2:number = 0
        for(let temp of zahlen){
            sum2 += temp
        }
        console.log(sum2)
    }
    summe2(array2)
}


// Inhalt suchen
{
    const namen:string[] = ["Peter", "Paul", "Mary"]
    
    function suche(namen:string[], term:string){
        for(let i=0; i<namen.length; i++){
            if(namen[i] === term){
                let temp = i+1
                return ("Der Name " + term + " befindet sich an der " + temp + ". Stelle!")
            }
        }
        return ("Der Name " + term + " wurde nicht gefunden!")
    }

    console.log(suche(namen,"test"))
}

// Inhalt suchen
{
    const namen:string[] = ["Peter", "Paul", "Mary"]
    
    function suche2(namen:string[], term:string){
        for(let item of namen){
            if(item === term){
                return ("Der Name " + term + " wurde gefunden!")
            }
        }
        return ("Der Name " + term + " wurde nicht gefunden!")

    }
    console.log(suche2(namen,"Paul"))
}


// Maximum suchen
{
    const array = [0,1,7,3,4,5]
    function maxElement(array:number[]):number{
        let temp = array[0]
        for(let i=0; i<array.length; i++){
            if (array[i] > temp){
                temp = array[i]
            }
        }
        return temp
    }
    console.log(maxElement(array))
}

// Minimum suchen
{
    const array = [6,1,7,3,4,5]
    function minElement(array:number[]):number{
        let temp = array[0]
        for(let i=0; i<array.length; i++){
            if (array[i] < temp){
                temp = array[i]
            }
        }
        return temp
    }
    console.log(minElement(array))
}

// Min / Max suchen
{
    const array = [6,1,7,3,2,5]
    function minmax(array:number[]){
        let min = array[0]
        let max = array[0]
        for(let i=0; i<array.length;i++){
            if (array[i] < min){
                min = array[i]
            }
            if (array[i] > max){
                max = array[i]
            }
        }
        return console.log("Minimum: " + min + " Maximum: " + max)
    }

    minmax(array)
}

{
    const array = [6,1,7,3,2,5]
    function minmax2(array:number[]){
        let min = array[0]
        let max = array[0]
        for(let item of array){
            if (item < min){
                min = item
            }
            if (item > max){
                max = item
            }
        }
        return console.log("Minimum: " + min + " Maximum: " + max)
    }

    minmax2(array)
}

// Werte im Array vertauschen
{
    const test = [6,1,7,3,2,5]
    function Tausch(array,index1:number,index2:number){
        let temp = 0
        if ((index1 || index2) > array.length-1){
            return "Index out of bounce"
        }
        else {
            temp = array[index1]
            array[index1] = array[index2]
            array[index2] = temp
            return array
        }
    }
    console.log(Tausch(test,4,5))

}

// Fakultät mit Schleife
{
    function Fakultaet(zahl:number):number{
        let fak = 1
        for (let i=1; i<=zahl; i++){
            fak *= i
        }
        return fak
    }
    console.log(Fakultaet(170))
}