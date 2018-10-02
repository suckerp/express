{
    function franken(start:number){
        let gewinn = start
        let temp = start
        while(start>1){
            if (start % 2 == 0){
                start = start / 2
                gewinn += start
            }
            else{
                start = (start * 3) + 1 
                gewinn += start
            }
            if (start > temp){
                temp = start
            }
        }
        console.log("Der Gewinn beträgt: "+gewinn+ " Franken. Das höchste Feld war: " +temp)
    }

    function frankenmax(start:number):number{
        let gewinn = start
        let temp = start
        while(start>1){
            if (start % 2 == 0){
                start = start / 2
                gewinn += start
            }
            else{
                start = (start * 3) + 1 
                gewinn += start
            }
        }   
        return gewinn
    }
    
    function max(array:number[]){
        let temp = array[0]
        let index = 0
        for(let i=0; i<array.length; i++){
            if (array[i] > temp){
                temp = array[i]
                index = i+1
            }
        }
        return console.log("Der höchste Gewinn ist: "+temp+ " Franken. Der Startwert dafür ist : "+index)
    }
    

    franken(63)

    for (let i=1; i<=99; i++){
        franken(i)
    }

    let gewinn2:number[] =[0]
    for (let i=1; i<=99; i++){
        gewinn2[i-1] = frankenmax(i)
    }
    max(gewinn2)

}

