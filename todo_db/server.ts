import express = require('express')
import bodyParser = require('body-parser');
import { Todo, getTable, insertTable } from './model/dbAccess'
import { Request, Response, NextFunction } from 'express'





const app = express()

const db = new Todo()


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use((req,res,next)=>{
    next()
})

function AccessControlAllow(req:Request,res:Response,next:NextFunction){    
    res.set('Access-Control-Allow-Origin','*')        
    res.set('Access-Control-Allow-Methods','GET,POST,PUT')        
    res.set('Access-Control-Allow-Headers','X-Requested-With,Content-Type,token,Authorization')
    next()}

    app.all('*', AccessControlAllow)


app.post('/test', (req,res)=> {
    console.log(req.body.firstName)
    res.json(req.body)
})


app.post('/select', (req,res)=> {
    db.getTable(req.body as getTable)
        .then(results=>res.json(results))
        .catch(error=>res.status(500).json(error))
})


/*
app.get('/todoperson', (req,res)=>{
    db.getTodoListPerson(2)
    .then(results=>{
        res.json(results)
    })
})


app.get('/setentry', (req,res)=>{
    db.setTodoEntry("TEST", 2)
    .then(results => {
        res.redirect('/')
    })
    .catch(error => {
        res.json(error)
    })
})


app.get('/deleteentry', (req,res)=>{
    db.deleteTodoEntry(3)
    .then(results => {
        res.redirect('/')
    })
    .catch(error => {
        res.json(error)
    })
})


app.get('/getpersons', (req,res)=> {
    db.getPersons()
    .then(results => {
        res.json(results)
    })
    .catch(error => {
        res.json(error)
    })
})


app.get('/', (req,res)=>{
    db.getTodoList()
    .then(results => {
        res.json(results)
    })
})*/


const port = 3000
app.listen(port,()=>{
    console.log(`
        Server wurde gestartet
        url: http://localhost:${port} 
    `)
})