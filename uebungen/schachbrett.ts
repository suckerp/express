{
    function schachbrett(){
        let array = ["H", "G", "F", "E", "D", "C", "B", "A"]
        
        for (let item of array){
            let result = ""
            for (let i=1; i<9; i++){
                result = result + " " + item + i
            }
            console.log(result)
        }
        

    }
    schachbrett()
}