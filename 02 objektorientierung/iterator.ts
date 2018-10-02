const personen = ["tim", "tom", "tam"]

for (let person of personen){
    person
}


const iterator = personen[Symbol.iterator]()

let next = iterator.next()
next

next = iterator.next()
next

next = iterator.next()
next

next = iterator.next()
next

class RandonNumbers implements Iterable<number>{

    constructor(
        private min:number,
        private max:number,
        private count:number
    ){}

    [Symbol.iterator]() {
        const randomMinMax = ():number => {
            return Math.round((Math.random() * (this.max-this.min)) + this.min)

        }
        let count = this.count
        return {
            next():IteratorResult<number> {
                if(count-- > 0)
                    return { value:randomMinMax(), done:false}
                else
                    return { value:undefined, done:true}
            }
        }
    }
}

const randomNum = new RandonNumbers(1,50,5)
let i = 0

for (let num of randomNum){
    num
}