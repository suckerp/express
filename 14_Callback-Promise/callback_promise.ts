
//normale Addition
function plusSynchron(summand1:number, summand2:number){
    return (summand1 + summand2)
}
console.log(plusSynchron(2,2))

// Asynchrone normale Addition 
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
console.log(plusMitCallback(2,2, x=> {
    console.log(x)
}))


function plusMitCallbackR(summand1:number, summand2:number, callback:Function){
    setTimeout(() => {
        const summe = summand1 + summand2
    callback(summe)
    }, 1000);
    
}
console.log(plusMitCallbackR(2,2, x=> {
    console.log(x)
}))



function plusMitPromise(summand1, summand2){
    return new Promise((resolve, reject)=>{
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