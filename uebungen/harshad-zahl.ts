{
    function harshad(zahl:number){

        for (let i=1; i<=zahl; i++){
            let temp = i.toString()
            let temp2 = temp.split("").map(Number)
            let temp3 = 0
            for (let item of temp2){
                temp3+=item
            }
            if (i % temp3 == 0){
                console.log(i + " ist eine Harshad-Zahl")
            }
            /*else {
                console.log(i + " ist keine Harshad-Zahl")
            }*/
        }
        
    }
    harshad(100)
}