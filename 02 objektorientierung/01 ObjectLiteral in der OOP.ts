/*type Person ={
    Vorname:string,
    Nachname:string, 
    Name:()=> string,
    Geburtstag:number,
    Alter:()=>number
}

const max:Person = {
    Vorname:"Max",
    Nachname:"Mustermann",
    Name:function(this:Person){ //für die Autovervollständigung von this
        return this.Vorname + " " + this.Nachname
    },
    Geburtstag: Date.UTC(2000,7,21),
    Alter:function(this:Person){
        return Math.floor((Date.now() - this.Geburtstag) / (365.2425 * 24 * 3600 * 1000))
    }
}

console.log(max.Name())

console.log(max.Alter())


function createCounter(){
    return {
        zahl:3,
    
        getZahl:function(){
            return this.zahl
        },
        increment:function(){
            this.zahl++
        },
        decrement:function(){
            this.zahl--
        }
    }
}

const counter = createCounter()


counter.increment()
counter.increment()
counter.decrement()

console.log(counter.getZahl())*/