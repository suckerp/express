
class Stack{
    private _array=[]

    peak(){
        return this._array[this._array.length-1]
    }

    pop(){
        this._array.pop()
    }

    push(){
        this._array.push(Math.round(Math.random()*100))
    }
    length(){
        return this._array.length
    }
}

const stack = new Stack


stack.push()
stack.push()
stack.push()
stack.pop()
console.log(stack.peak())
console.log(stack.length())


class Queue{
    private _array=[]
/*
    add(zahl){
        //this._array.push(Math.round(Math.random()*100))
        this._array.push(zahl)
    }
    remove(){
        this._array.shift()
    }

    show(){
        for (let item of this._array){
            return this._array
        }
    }
*/
    leave(){
        const [_,...rest] = this._array
        this._array = rest

    }

    enter(zahl){
        this._array = [...this._array,zahl]
    }

    front(){
        const [front] = this._array
        return front
    }
        
}

const queue = new Queue

queue.enter(1)
queue.enter(2)
queue.enter(3)
queue.leave()
console.log(queue.front())

/*queue.add(10)
console.log(queue.show())
queue.add(11)
console.log(queue.show())
queue.add(12)
console.log(queue.show())
queue.remove()
console.log(queue.show())*/

// Kapselung - interne Variablen auf private stellen, damit von außen kein Zugriff mehr möglich ist
// bei Änderung von gekapselten Klassen wird es für alle Nutzer übernommen
// dient zur Geheimhaltung der Implementierung

// 1. Interne Variablen schützen
// 2. User sieht die Implementierung nicht

class BoxA{
    private _wert:any

    getWert(){
        return this._wert
    }

    setWert(wert){
        this._wert = wert
    }
}

const a = new BoxA

// geht nicht, da private
// Anwenderbereich
// hier hätte der User die Kontrolle, gefährlich
//a.wert = "test"
//console.log(a.wert)

// geht
// Erstellerbereich
// in den Funktionen kann man alles machen, Ersteller kontrolliert es
// Zugriff auf die Variablen über get- / set-Funktionen
a.setWert("test2")
console.log(a.getWert())



// vorgefertigte get / set Funktionen vorher direkt definieren, dann kann man auch altgewohnt auf die Variable zugreifen
class BoxB{
    private _wert:any

    get wert(){
        return this._wert
    }

    set wert(e){
        this._wert = e
    }
}

const b = new BoxB()

b.wert = "abcdefg"

console.log(b.wert)