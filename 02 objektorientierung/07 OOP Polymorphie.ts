



interface IComparable {
    compareTo(val):number
}

class Wettkampfteilnehmer implements IComparable {
    constructor(
        public Punkte:number,
        public Name:string
    ){}

    compareTo(val:Wettkampfteilnehmer){
        return this.Punkte - val.Punkte
    }
}


function Bubblesort(array:IComparable[]){
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

const teilnemer:IComparable[] = [
    new Wettkampfteilnehmer(22,"Hans"),
    new Wettkampfteilnehmer(42,"Lisa"),
    new Wettkampfteilnehmer(5,"Max")
]

const rangliste = Bubblesort(teilnemer)

rangliste



interface IFläche {
    //Fläche : number
    getFläche: () => number
}

class Rechteck implements IFläche, IComparable {
    constructor(
        public Breite:number,
        public Länge:number
    ){}
    getFläche(){
        return this.Länge * this.Breite
    }

    compareTo(val:IFläche){
        return this.getFläche() - val.getFläche()
    }
}

class Kreis implements IFläche, IComparable {
    constructor(
        public Radius:number
    ){}
    getFläche(){
        return Math.PI * Math.pow(this.Radius,2)
    }
    compareTo(val:IFläche){
        return this.getFläche() - val.getFläche()
    }
}

function berechneGesamtFläche(flächen:IFläche[]){
    let gesamtfläche = 0
    for(let fläche of flächen){
        gesamtfläche += fläche.getFläche()
    }
    return gesamtfläche
}


const flächenarray: IFläche[] = [
    new Kreis(4),
    new Rechteck(2,3),
    new Kreis(2),
]

console.log(berechneGesamtFläche(flächenarray))


const flächenarray2: IComparable[] = [
    new Kreis(4),
    new Rechteck(2,3),
    new Kreis(2),
]


const flächenvergleich = Bubblesort(flächenarray2)

console.log(flächenvergleich)
