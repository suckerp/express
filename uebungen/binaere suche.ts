let array=[1,2,3,4,5,6,7,8,9,10]

function binary(sortiert,wert){
    let tmp=[...sortiert]
    let unten=0
    let oben=sortiert.length-1
    let index=Math.round(sortiert.length/2)
    while(sortiert[index]!=wert){
        if (sortiert[index]>wert){
            oben=index
            index=Math.floor((index-unten)/2+unten)
        }
        else{
            unten=index
            index=Math.ceil((oben-index)/2+index)
            
        }
    }
    return index
}

console.log(binary(array,5))


function binary2(compare, sortiert, wert){
    let tmp = [...sortiert]
    let unten=0
    let oben=tmp.length-1
    let index=Math.round(tmp.length/2)
    while(tmp[index]!=wert){
        if (compare(tmp[index], wert) == true){
            oben=index
            index=Math.floor((index-unten)/2+unten)
        }
        else{
            unten=index
            index=Math.ceil((oben-index)/2+index)
            
        }
    }
    return index
}

function test(a, b):boolean{
    if (a-b<0){
        return false
    }
    else if (a-b>0){
        return true
    }
    
}

//Übergabe der Funktion test an die Binäre Suche, damit sie innehalb der Binären Suchfunktion aufgerufen werden kann
console.log(binary2(test,array,7))