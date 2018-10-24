import mysql = require('mysql')


export class Todo {

    private readonly _connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'todo',
        timezone: 'Z'
    })

    getTodoList(){
        const sqlString = `
            SELECT * FROM todolist 
            JOIN PERSON ON todolist.PID=person.PID`
        return new Promise<any[]>((resolve, reject)=> {
            this._connection.query(sqlString, (error, results:any[]) => {
                if(error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    getTodoListPerson(id:number){
        const sqlString = `
            SELECT * FROM todolist 
            JOIN PERSON ON todolist.PID=person.PID
            WHERE person.PID=?`
        return new Promise<any[]>((resolve, reject)=> {
            this._connection.query(sqlString, id, (error, resutls:any[])=> {
                if(error)
                    reject(error)
                else
                    resolve(resutls)
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

    doneTodoEntry(id:number){
        const sqlString = `UPDATE TABLE todolist SET STATUS=true WHERE PID=?`
        return new Promise<any[]>((resolve,reject)=> {
            this._connection.query(sqlString, id, (error, results:any[])=> {
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