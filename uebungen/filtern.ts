{
    const original:number[] = [2, 17, 10, 9, 16, 3, 9, 16, 5, 1, 17, 14]
    function filter(original:number[]):number[]{
        let gefiltert = []
        //let i = 0
        for(let item of original){
            if (item > 10){
                //gefiltert[i] = item
                //i++
                gefiltert.push(item)
            }
        }
        return gefiltert
    }

    console.log(filter(original))
}