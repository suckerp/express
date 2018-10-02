/*interface IFläche{
    //Fläche:number
    getFläche)=>number
}

class Rechteck implements IFläche,IComparebel{
    constructor(
        public Breite:number,
        public Länge:number,
        
    {}
    getFläche(){
        return this.Breite*this.Länge
    }
    compareTo(val:IFläche){
        return this.getFläche() - val.getFläche()
    }
}

class Kreis implements IFläche,IComparebel{
    constructor(
        public Radius:number
    {}
    getFläche(){
        return Math.pow((this.Radius),2)*Math.PI
    }
    compareTo(val:IFläche){
        return this.getFläche() - val.getFläche()
    }
}

function berechneGesamtfläche(flächen:IFläche[]){
    let gesamtfläche=0
    for(let fläche of flächen){
        gesamtfläche+=fläche.getFläche()
    }
    return gesamtfläche
}

function Bubblesort(array:IComparebel[]){
    const sortarray = [...array]

    function tausche(index_i, index_j){
        const temp = sortarray[index_i]
        sortarray[index_i] = sortarray[index_j]
        sortarray[index_j] = temp
    }

    for(let j = 0 ; j < sortarray.length ; j++)
        for(let i = 0 ; i < sortarray.length-1 ; i++)
            if(sortarray[i].compareTo(sortarray[i+1])>1)
                tausche(i,i + 1)

    return sortarray
}

let Flächen:IComparebel[]=[new Rechteck(1,5),new Kreis(50),new Rechteck(50,12),new Kreis(20)]

console.log(Bubblesort(Flächen))


///////////////////////////////////////////////////////////////////////////////////////


interface IComparebel{
    compareTo(val):number
}

class Wettkampfteilnehmer implements IComparebel {
    constructor(
        public Punkte:number,
        public Name:number
    {}
    compareTo(val:Wettkampfteilnehmer){
        return this.Punkte - val.Punkte
    }
}*/