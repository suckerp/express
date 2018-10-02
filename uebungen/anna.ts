{
    function annaTage(zahl:number){
        let tag = 0
        for (let i=1; i<=zahl; i++){
            tag += i
        }
        tag = tag-zahl+1
        return console.log(+ zahl + " Wort/Wörter kann Anna ab dem " + tag + ". Tag lesen.")
    }

    function annaWoerter(zahl:number){
        let wort = 1
        let tag = 1
        let mal = 1
        while (tag != zahl){
            tag += 1
            if (mal == wort){
                mal = 1
                wort +=1
            }
            else {
                mal += 1
            }

        }
        return console.log("Am " + tag + ". Tag kann Anna " + wort + " Wörter lesen.")

    }

    annaTage(1)

    annaWoerter(35)

    

}