import mssql = require('mssql')
import express = require('express')

const app = express()



const config = ({
    user: 'test',
    password: 'test',
    server: '10.10.105.107',
    port: 1433,
    database: 'dozenten',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
})



new mssql.ConnectionPool(config).connect().then(connection => {

    app.get('/a', async (req, res) => {

        //in Express benötigt async await unbedingt einen try-catch Block, da sonst der Fehler nicht abgefangen wird und einfach verschwindet
        try{
            const result = await connection.query`select * from dozenten`
            console.log(result)
            
            res.json(result)
        }
        catch(e) {
            console.log(e)}
        
    
    })
    

    app.get('/b',  (req,res) => {
   
        return connection.query`select * from dozenten` 
            .then(result => {
                console.log(result) 
                res.json(result)
            })
    })
    
    const port:number = 3001
    app.listen(port, 'localhost')

})

//const temp = pool.query('select * from Dozenten')


// router.use(async(ctx,next) => {
//     try {
//         await next()
//     } catch (err) {
//         console.log (err.message)
//         ctx.body = err.message
//     }
// })

// router.get('/test', async ctx =>{
//     throw new Error("test")
// })




