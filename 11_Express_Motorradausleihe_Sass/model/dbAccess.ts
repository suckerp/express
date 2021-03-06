import mysql = require('mysql')


export type customer = {
    anrede:string,
    kname:string,
    plz:string,
    ort:string;
    strasse:string,
    gebdat:Date
    password:string,
    account:string
}

export type leihe = {
    mid:number,
    kid:number,
    leihbeginn:Date,
    leihende:Date,
    km:number
}

export class MotorradAusleiheDB {

    private readonly _connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'motorradausleihe',
        timezone: 'Z'
    })

    getAllMotorcycles(){
        const sqlString = 'select * from motorraeder'
        return new Promise<any[]>((resolve, reject)=>{
            this._connection.query(sqlString, (error, results:any[]) => {
                if(error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    getMotorcycleDetail(mid:number, kid:number){
        const sqlString = `
        select * from ausleihe 
        join kunden on ausleihe.K_ID = kunden.K_ID 
        join motorraeder on ausleihe.M_ID = motorraeder.M_ID 
        where motorraeder.m_id = ? and kunden.k_id=?
        `
        //? ist der Platzhalter, der dann im query hinter dem sqlString der Reihenfolge nach eingetragen werden
        return new Promise<any[]>((resolve, reject)=>{
            this._connection.query(sqlString,[mid,kid], (error, results:any[]) => {
                if(error){
                    console.log(error)
                    
                    reject(error)
                }
                else
                    resolve(results)
            })
        })
    }

    checkRentState(mid:number){
        const sqlString = `
        select * from ausleihe 
        join kunden on ausleihe.K_ID = kunden.K_ID 
        join motorraeder on ausleihe.M_ID = motorraeder.M_ID 
        where motorraeder.m_id = ?
        `

        return new Promise<any[]>((resolve, reject)=>{
            this._connection.query(sqlString, mid, (error, results:any[]) => {
                if(error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    rentMotorCycle(leihe:leihe){
        const sqlString = `
        INSERT INTO Ausleihe (M_ID, K_ID, AusleiheBeginn, AusleiheEnde, Kilometer) VALUES 
        (${leihe.mid}, ${leihe.kid}, "${leihe.leihbeginn}", "${leihe.leihende}", ${leihe.km})
        `

        return new Promise<any[]>((resolve, reject)=>{
            this._connection.query(sqlString, leihe, (error, results:any[]) => {
                if(error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    addCustomer(customer:customer){
        const sqlString = `INSERT INTO Kunden (K_Anrede, K_Name, K_PLZ, K_Ort, K_Strasse, K_GebDat, K_PASSWORT, K_ACCOUNT) VALUES 
        ("${customer.anrede}", "${customer.kname}", ${customer.plz}, "${customer.ort}", "${customer.strasse}", "${customer.gebdat}", "${customer.password}", "${customer.account}")
        `

        return new Promise<any[]>((resolve, reject)=>{
            this._connection.query(sqlString, customer, (error, results:any[]) => {
                if(error)
                    reject(error)
                else
                    resolve(results)
            })
        })

    }

    getAllCustomers(){
        const sqlString = 'select * from kunden'

        return new Promise<any[]>((resolve, reject)=>{
            this._connection.query(sqlString, (error, results:any[]) => {
                if(error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    getCustomer(name:string, pass:string){
        const sqlString = `
            select * from kunden where K_ACCOUNT = "${name}" AND K_PASSWORT="${pass}"
            `

        return new Promise<any[]>((resolve, reject)=>{
            this._connection.query(sqlString, (error, results:any[]) => {
                if(error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

}
