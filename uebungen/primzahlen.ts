{
    function primzahlen(ziel:number){
        let zahlen:number[] = []
        let prim:boolean[] = []
        for (let i=2; i<=ziel; i++){
            zahlen[i-2] = i
        }

        for (let i=0; i<=ziel-2; i++){
            prim[i] = true
        }
        

        let temp = Math.floor(Math.sqrt(ziel))
        for (let i = 2; i<=temp; i++){
            if (prim[i] == true){
                console.log(zahlen[i-2])
            }
            for (let j=i*i; j<=ziel; j+=i){
                prim[j] = false
            }
        }
        for (let i=temp+1; i<=ziel; i++){
            if (prim[i]==true){
                console.log(zahlen[i-2])
            }
        }
    }

    primzahlen(1000)
}