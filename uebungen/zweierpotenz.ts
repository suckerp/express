{
    function zweierpotenz(zahl:number):boolean{
        let temp = zahl
        for(let i=1; i <= zahl; i++){
            if (temp == 1){
                return true
            }
            else if (temp % 2 == 1) {
                return false
            }
            else {
                temp = temp / 2
            }
        } 
    }
    console.log(zweierpotenz(145875812))
}