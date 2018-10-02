{
    
    
    const feld:any[] = [2, 4, 17, 5, 9, 11, 22]
    const feld2:any[] = ["a", "c", "d", "b", "z", "g"]
    
    function bubblesort(array:any[]){
        let temp:any
        let count = 0
        for (let j=0; j<array.length; j++){
            for (let i=1; i<=array.length; i++){
                if (array[i]<array[i-1]){
                    temp = array[i]
                    array[i] = array[i-1]
                    array[i-1] = temp
                    count++
                }
            }
        }
        console.log(count)
        return array
    }
    console.log(bubblesort(feld))

    console.log(bubblesort(feld2))




    function insertionsort(array2:any[]){
        let temp:any
        let wert:any
        array2[0]
        for (let i=1; i<=array2.length; i++){
            wert = array2[i]
            temp = i
            while (temp > 1 && array2[temp-1] > wert){
                array2[temp] = array2[temp-1]
                temp--
            }
            array2[temp] = wert
        }
        return array2
    }


    console.log(insertionsort(feld))
    console.log(insertionsort(feld2))


}