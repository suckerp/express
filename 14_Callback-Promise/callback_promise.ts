
//normale Addition
function plusSynchron(summand1:number, summand2:number){
    return (summand1 + summand2)
}
console.log(plusSynchron(2,2))

//Asynchrone normale Addition 
//funktioniert nicht
function plusTimeoutR(summand1:number, summand2:number){
    let summe
    setTimeout(() => {
        summe = summand1 + summand2
    }, 1000);
    return summe
}
console.log(plusTimeoutR(2,2))


function plusMitCallback(summand1:number, summand2:number, callback:Function){
    const summe = summand1 + summand2
    callback(summe)
}

function gebeSummeAus(x){
    console.log(x)
}

plusMitCallback(2,2, x=> {
    console.log(x)
})



plusMitCallback(2, 2, summe => {
    plusMitCallback(summe, 2, summe => {
        plusMitCallback(summe, 4, summe => {
            console.log(summe)
        })
    })
})


function plus_Mit_Promise(summand1:number, summand2:number){
    return new Promise<number>((resolve, reject)=> {
        if(typeof summand1 === "number" && typeof summand2 == "number"){
            resolve(summand1 + summand2)
        } else{
            reject("error")
        }
    })
}

plus_Mit_Promise(2,2)
    .then(x=>{
         console.log(x)
    })
       
plus_Mit_Promise(2,2)
    .then(summe =>plus_Mit_Promise(summe,2))
    .then(summe =>plus_Mit_Promise(summe,2))
    .then(summe =>plus_Mit_Promise(summe,2))
    .then(summe =>plus_Mit_Promise(summe,2))
    .then(summe =>plus_Mit_Promise(summe,2))
    .then(summe =>{
        console.log(summe)
    })
    .catch(e=>{
        console.log(e)
    })




function plusMitCallbackR(summand1:number, summand2:number, callback:Function){
    setTimeout(() => {
        const summe = summand1 + summand2
    callback(summe)
    }, 1000);
    
}
plusMitCallbackR(2,2, x=> {
    console.log(x)
})




function plusMitPromise(summand1, summand2){
    //<number> definiert, dass das Promise eine number ist, kann auch string, boolean o. any sein bzw. weggelassen werden
    return new Promise<number>((resolve, reject)=>{
        if (typeof summand1 === "number" && typeof summand2 === "number"){
            resolve(summand1 + summand2)
        } else {
            reject("Fehler")
        }
    })
}
plusMitPromise(2,4)
    .then (summe => {
        console.log(summe)
    })
    .catch (error => {
        console.log(error)
    })


//undefined für die Fallunterscheidung bei der Auswertung
//der 1. Fall ist immer der Fehlerfall, der 2. Fall ist der Ergebnisfall
function plusMitCallbackUndError(summand1, summand2, callback:Function){
    if (typeof summand1 === "number" && typeof summand2 === "number"){
        //der 1. Fall ist immer der Fehlerfall, der 2. Fall ist der Ergebnisfall
        callback(undefined, summand1 + summand2)
    } else {
        //der 1. Fall ist immer der Fehlerfall, der 2. Fall ist der Ergebnisfall
        callback("Fehler", undefined)
    }
}

console.log(plusMitCallbackUndError(2,2, (error, result) => {
    console.log(error)
    console.log(result)

    if (error){
        console.log(error)
    } else{
        plusMitCallbackUndError(result,2, (error, result) => {
            if (error){
                console.log(error)
            } else{
                plusMitCallbackUndError(result,2, (error, result) => {
                    if (error){
                        console.log(error)
                    } else{
                        plusMitCallbackUndError(result,2, (error, result) => {
                            if (error){
                                console.log(error)
                            } else{
                                plusMitCallbackUndError(result,2, (error, result) => {
                                    if (error){
                                        console.log(error)
                                    } else{
                                        console.log(result)
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
}))


plusMitPromise(2,2)
    .then(result => plusMitPromise(result,2))
    .then(result => plusMitPromise(result,2))
    .then(result => plusMitPromise(result,2))
    .then(result => plusMitPromise(result,2))
    .then(result => {
        plusMitPromise(result,2)
        console.log(result)
    })
    .catch(e => console.log(e))
    .finally(()=> {
        console.log("Fertig")
    })

async function berechne(){
    //Abfangen eines möglichen Fehlers
    try{
        //await macht aus dem Promise die number
        let summe =  await plusMitPromise(2,2)
        summe =  await plusMitPromise(summe,"2")
        summe =  await plusMitPromise(summe,2)
        summe =  await plusMitPromise(summe,2)
        summe =  await plusMitPromise(summe,2)
        console.log(summe)
    } catch (e) {
        e
    } finally {
        console.log("Fertig")
    }
}

berechne()

//Alternativ ohne try-catch den Promise-Fehler mit catch abfangen
//berechne().catch(e=>{console.log(e)})

//Asynch Await + Try-Catch und die normale Promise-Funktion mit then / catch sind genau das gleiche, nur andere schreibweise