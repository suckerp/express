import mysql = require('mysql')
import express = require('express')



export class Todo {

    private readonly _connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'todo',
        timezone: 'Z'
    })

    getTodoList(){
        const sqlString = 'select * from todolist'
        return new Promise<any[]>((resolve, reject)=> {
            this._connection.query(sqlString, (error, results:any[]) => {
                if(error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    setTodoEntry(task:string, pid:number){
        const sqlString = `INSERT INTO todolist (TEXT,STATUS,PID) VALUES ("${task}",false,"${pid}")`
        return new Promise<any[]>((resolve,reject)=> {
            this._connection.query(sqlString, (error, results:any[])=> {
                if (error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    deleteTodoEntry(id:number){
        const sqlString = `DELETE FROM todolist where TID = ?`
        return new Promise<any[]>((resolve, reject)=> {
            this._connection.query(sqlString, id, (error, results:any[]) => {
                if (error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    getPersons(){
        const sqlString = `SELECT * from person`
        return new Promise<any[]>((resolve, reject) => {
            this._connection.query(sqlString, (error, results:any[]) => {
                if (error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }
}


const app = express()

const db = new Todo()


app.get('/', (req,res)=>{
    db.getTodoList()
    .then(results => {
        res.json(results)
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


const port = 3000
app.listen(port,()=>{
    console.log(`
        Server wurde gestartet
        url: http://localhost:${port} 
    `)
})