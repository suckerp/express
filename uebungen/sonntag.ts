{
    function schaltjahr(jahr){
        if (jahr % 4 != 0 || jahr % 100 == 0 && jahr % 400 != 0) {
            return false
        } else {
            return true
        }
    }
    function tag(tag:number, jahr:number){
        let temp:number = tag % 7 + (1 + 5 * ((jahr - 1) % 4) + 4 * ((jahr - 1) % 100) + 6 * ((jahr -1 ) %400)) % 7 - 1
        temp %= 7
        if (temp == 0){
            return true
        }
    }

    function sonntag():number{
        let counter = 0
        for (let i=1901; i<=2000; i++){
            let day = 1
            if (tag(day,i)==true)
            {
                counter++
            }
            for (let j=0; j<=11;j++){
                if (j==1 || j==3 || j==5 || j==7 || j==8 || j== 10) {
                    day+=31
                    if (tag(day,i)==true)
                    {
                        counter++
                    }
                }
                else if (j==4 || j==6 || j==9 || j==11){
                    day+=30
                    if (tag(day,i)==true)
                    {
                        counter++
                    }
                }
                else if (j==2){
                    if (schaltjahr(i) == true){
                        day+=29
                        if (tag(day,i)==true)
                        {
                            counter++
                        }
                    } 
                    else{
                        day+=28
                        if (tag(day,i)==true)
                        {
                            counter++
                        }
                    }
                }
            }
        }
        return counter
    }
    console.log(sonntag())
}