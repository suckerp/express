
function callback(){
    console.log("eins")
}

setTimeout(callback, 1000)
console.log("zwei")


//Funktion läuft komplett durch und wartet nicht die 1 Sekunde ab, daher undefined als Output

function getUserFrom(){
    let user

    setTimeout(()=>{
        user = "Max"

    }, 1000)

    return user
}

console.log(getUserFrom())


//hier ruft er die out Funktion nach 1 Sekunde auf um den Wert auszugeben
//es wird eine Funktion als Übergabeparameter erwartet

/*function getUserFrom2(out:Function){
    let user

    setTimeout(()=>{
        user = "Max"
        out(user)
    }, 1000)
}*/

//andere Schreibweise der vorherigen Funktion
/*
function getUserFrom2(out:Function){
    
    function timeoutFunc(){
        user = "Max"
        out(user)
    }
    
    let user

    setTimeout(timeoutFunc, 1000)
}*/

function getUserFrom2(out:Function){
    out("test")
}

//Übergabe der aufzurufenden Funktion, in dem Fall oben die out Funktion

//user => {console.log(user)} ist die Callback Funktion, die oben als out definiert ist
getUserFrom2(user => {
    console.log(user)
})



function testFunc(success:Function, error:Function){
    const e = false
    if (e){
        error("fehler")
    } else {
        success("datensatz x")
    }
}

testFunc(
    result => {console.log(result)},
    error => {console.log(error)}
)


function getUserFrom3(){
    return new Promise((resolve,reject)=>{
        resolve("hallo")
    })
}

async function asyncTest(){
    const result = await getUserFrom3()
    result
}

getUserFrom3().then(res => {console.log(res)})

asyncTest()