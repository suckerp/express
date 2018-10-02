{
    let zahlen = [2, 17, 17, 9, 16, 3, 9, 16, 5, 1, 17, 14]

    function countDuplicates(obj, num){ 
        obj[num] = (++obj[num] || 1)
        return obj
      }
    let answer = zahlen.reduce(countDuplicates, {})
    answer
}

{
    let zahlen = [2, 17, 17, 9, 16, 3, 9, 16, 5, 1, 17, 14]

    function sortNumber(array) {
        let sort = array.sort(function (a, b) {  return a - b;  });
        var a = [], b = [], prev;
            for ( var i = 0; i < sort.length; i++ ) {
                if ( sort[i] !== prev ) {
                    a.push(sort[i]);
                    b.push(1);
                } else {
                    b[b.length-1]++;
                }
                prev = sort[i];
            }
        
            let temp = b[0]
            for(let item of b){
                if (item > temp){
                    temp = item
                }
            }
            for(let i=0; i<b.length; i++){
                if (temp == b[i]){
                    return "Die häufigste Zahl ist: " + a[i] + ". Sie erscheint " + temp + "x"
                }
            }
    }

    function sortString(array) {
        array.toString()
        let lower = array.toLowerCase()
        lower
        lower = Array.from(lower)
        let sort = lower.sort()


        let a = [], b = [], prev;
            for ( var i = 0; i < sort.length; i++ ) {
                if ( sort[i] !== prev ) {
                    a.push(sort[i]);
                    b.push(1);
                } else {
                    b[b.length-1]++;
                }
                prev = sort[i];
            }

            let temp = b[0]
            for(let item of b){
                if (item > temp){
                    temp = item
                }
            }
            temp
            for(let i=0; i<b.length; i++){
                if (temp == b[i]){
                    return "Der häufigste Buchstabe ist: " +a[i]+ ". Er erscheint " + temp+ "x"
                }
            }
    }

    let result = sortString("tesFFFFFtoohhhhhhhhhhhvvfdehhhguifudiffsdfasfaefghdfgsfauj");
    console.log(result)

    let result2 = sortNumber(zahlen)
    console.log(result2)

}