{

    function domino(){
        let ausgabe:string[] = [""]
        let k = 0
        for (let i=0; i<7; i++){
            for (let j=0; j<=i; j++){
                ausgabe[k] = i + "" + j 
                k++
            }
        }
        return ausgabe
    }

    console.log(domino())
}
