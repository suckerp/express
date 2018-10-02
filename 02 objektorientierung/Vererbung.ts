class Person1{
    public _public 
    private _private
    protected _protected

    constructor(
        // Zugriffsmodifikator muss gesetzt werden, um aus der Variablen ein Attribut zu machen
        public Vorname:string,
        public Nachname:string
        // this. zeigt public, private und protected
    ){

    }
}

class User extends Person1{

    constructor(
        Vorname, 
        Nachname,
        public Password:string
    ){
        super(Vorname, Nachname)
        // this. zeigt public und protected aus der oberen Klasse
        // private kann nicht vererbt werden, protected schon
        // protected und private sind nach außen hin nicht sichtbar, nur mit .this erreichbar
    }
}

const user = new User("Max", "Mustermann", "****")

user
// . zeigt nur public



