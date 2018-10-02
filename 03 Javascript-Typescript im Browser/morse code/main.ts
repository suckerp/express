interface ArrayConstructor{
    from<T>(arrayLike:ArrayLike<T>):Array<T>
}

function morse(text:string){
    const morsecode:any={
        A:".-",
        B:"-...",
        C:"-.-.",
        D:"-..",
        E:".",
        F:"..-.",
        G:"--.",
        H:"....",
        I:"..",
        J:".---",
        K:"-.-",
        L:".-..",
        M:"--",
        N:"-.",
        O:"---",
        P:".--.",
        Q:"--.-",
        R:".-.",
        S:"...",
        T:"-",
        U:"..-",
        V:"...-",
        W:".--",
        X:"-..-",
        Y:"-.--",
        Z:"--..",
        1:".----",
        2:"..---",
        3:"...--",
        4:"....-",
        5:".....",
        6:"-....",
        7:"--...",
        8:"---..",
        9:"----.",
        0:"-----",
    }

    let upper = text.toUpperCase()
    let array = Array.from(upper)
    let i= 0
    for (let item of array){
        array[i] = morsecode[item]
        i++
    }
    let ausgabe = array.join("")
    return ausgabe

}


const inputField = document.getElementById("input") as HTMLInputElement
const outputField = document.getElementById("output") as HTMLOutputElement
const sendButton = document.getElementById("sendButton") as HTMLButtonElement

inputField.addEventListener("input", ()=>{
})

sendButton.addEventListener("click", () => {
        outputField.innerText = inputField.value+ " ist im Morse Code: \n " +morse(inputField.value)
        inputField.value = ""
})