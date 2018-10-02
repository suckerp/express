{
    function aethiopien(value1:number, value2:number):number{
        let result = 0
        for (; value1>=1; value1=Math.floor(value1/2)){
            if (value1 % 2 == 1){
                result += value2
                value2 *= 2
            }
            else {
                value2 *= 2
            }
        }
        return result
    }
    console.log(aethiopien(17,34))
}
