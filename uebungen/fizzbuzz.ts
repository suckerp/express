{
    function fizzbuzz(){
       
        for (let i=1; i<=100; i++){
            if (i % 5 == 0 && i % 7 ==0){
                console.log(i+" fizzbuzz")
            }
            else if (i % 5 == 0){
                console.log(i+" fizz")
            }
            else if (i % 7 == 0){
                console.log(i+" buzz")
            }
            else {
                console.log(i)
            }
        }
    }
    fizzbuzz()


}