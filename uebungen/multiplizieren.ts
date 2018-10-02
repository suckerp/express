{
    function multiplizieren2(value1:number, value2:number, value3:number):number{
        let ergebnis = 0
        for (let i=1; i<=value2; i++){
            ergebnis += value1
        }
        let ergebnis2 = ergebnis
        for (let i=1; i<value3; i++){
            ergebnis2 += ergebnis
            
        }
        return ergebnis2
        
    }
    console.log(multiplizieren2(2,4,5))
}