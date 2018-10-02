{
    
    
    let feld:any[] = [22, 17, 11, 9, 8, 4, 2, 1, 0]
    let feld2:any[] = ["c", "a", "d", "b", "z", "g", "x"]
   
    function bubblesort(array:any[]):any[]{
        let temp:any
        let count = 0
        for (let j=0; j<array.length; j++){
            for (let i=1; i<=array.length; i++){
                if (array[i]<array[i-1]){
                    temp = array[i]
                    array[i] = array[i-1]
                    array[i-1] = temp
                    
                }
                count++
            }
        }
        console.log(count)
        return array
    }
    console.log(bubblesort(feld))
    console.log(bubblesort(feld2))



    feld = [22, 17, 11, 9, 8, 4, 2, 1, 0]
    feld2 = ["c", "a", "d", "b", "z", "g", "x"]

    function insertionsort(array2:any[]):any[]{
        let temp:any
        let wert:any
        let count:number = 0
        for (let i=1; i<array2.length; i++){
            wert = array2[i]
            temp = i
            while (temp > 0 && array2[temp-1] > wert){
                array2[temp] = array2[temp-1]
                temp--
                count++
            }
            
            array2[temp] = wert
        }
        count
        return array2
    }


    console.log(insertionsort(feld))
    console.log(insertionsort(feld2))


        
}