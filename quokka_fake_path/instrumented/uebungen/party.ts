{
    function party(gaeste:number){
        let klirren = 0 
        for (let i=1; i<=gaeste; i++){
            klirren += i*(i-1)/2
        }
        return klirren
    }
    console.log(party(10))
}