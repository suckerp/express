class BaseClass{
    constructor(){
        console.log("BaseClass constructor")
    }
    toString(){
        return "hallo BaseClass"
    }

}

class ChildClass extends BaseClass{
    constructor(){
        super()
        
    }
}

console.log("hallo")



class Person2 {
    // jede Klasse braucht einen Basiskonstruktor
    constructor (
        public Nachname:string,
        public Vorname:string
    ){}

    toString(){
        return this.Nachname + ", " + this.Vorname
    }
}

class User2 extends Person2{
    // Auch erbende Klassen brauchen den Konstruktor
    constructor (
        Nachname:string,
        Vorname:string,
        public EMail:string
    ){
        // Mit super() ruft man in einer erbenden Klasse den Basiskonstruktor auf, zwingend notwendig 
        super(Nachname,Vorname)
    }

    toString(){
        return `
            Vorname: ${this.Vorname} \n
            Nachname: ${this.Nachname} \n
            E-Mail: ${this.EMail}
            `
    }
}

const max1 = new Person2 ("Mustermann", "Max")
console.log((max1.toString()))


const usermax = new User2("Mustermann", "Max","Max@Mustermann.de")
console.log((usermax.toString()))



class TestClass{
    //readonly kann nach dem Initialisieren dann nicht mehr geändert werden
    public readonly readonlyAttribut:any

    //static ist eine Varible der Klasse selbst, ist dann für alle Instanzen/Objekte gleich
    public static staticAttribut:any
    public normal:any
}

const test1 = new TestClass()
test1.normal = 1
//test1.readonlyAttribut = 1


TestClass.staticAttribut = "test"

const test2 = new TestClass()
test2.normal = 2

test1
test2