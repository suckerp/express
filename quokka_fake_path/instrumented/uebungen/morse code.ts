{
    function morse(text:string){
        const morsecode={
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

    console.log(morse("Test Text"))

}
