import express = require('express')
import { Request, Response, NextFunction} from 'express'
import { ErrorRequestHandler } from 'express-serve-static-core'

const app = express()


app.get('/', (req,res,next)=> {
    
    //durch die next-Funktion bleibt der Fehler in der Middleware und wird nach unten weitergreicht, damit man ihn später wieder finden und bearbeiten kann 
    next(new Error("Test Fehler"))
    //res.send("TEST")
    
})

app.get('/richtig', (req,res,next) =>{
    //mit next() wird er Fehler immer an Express übermittelt, egal in welchem (untergeordneten) Kontext er entsteht
    setTimeout(()=>{
        next(new Error("Test Fehler"))
    },1000)
})

app.get('/falsch', (req,res,next)=>{
    //Fehler wird nicht im Kontext von Express ausgeworfen und wird damit nicht durch den Errorhandler abgefangen und behandelt werden
    setTimeout(()=>{
        throw new Error("Test Fehler")
    },1000)
})


const errorHandler:ErrorRequestHandler = (error:Error,req,res,next) =>{
    //mit next() übertragene Fehler sind nun im errorhandler als Parameter zu finden
    console.log(error.message)
    res.send("Fehler behoben")
}

app.use(errorHandler)


app.use((error:any, req:Request, res:Response, next:NextFunction)=> {
    console.log(error.message)
    res.send("Fehler behoben")
})



app.listen(3000)