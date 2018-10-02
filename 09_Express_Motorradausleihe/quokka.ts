import mysql = require('mysql')


export type customer = {
    anrede:string,
    kname:string,
    plz:number,
    ort:string;
    strasse:string,
    gebdat:Date
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
        database: 'motorradausleihe'
    })

    getAllMotorcycles(errorFunc: (e:any)=> void, successFunc:(result:any)=> void){
        const sqlString = 'select * from motorraeder'
        this._connection.query(sqlString, (error, result:any[])=> {
            if (error)
                errorFunc(error)
            else {
                successFunc(result)
            }
        })
    }

    getMotorcycleDetails(mid:number, kid:number){
        const sqlString = `
        select * from ausleihe 
        join kunden on ausleihe.K_ID = kunden.K_ID 
        join motorraeder on ausleihe.M_ID = motorraeder.M_ID 
        where motorraeder.m_id = ? and kunden.k_id=?
        `
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
            this._connection.query(sqlString, (error, results:any[]) => {
                if(error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }


    addCustomer(customer:customer){
        const sqlString = `INSERT INTO Kunden (K_Anrede, K_Name, K_PLZ, K_Ort, K_Strasse, K_GebDat) VALUES 
        ("${customer.anrede}", "${customer.kname}", ${customer.plz}, "${customer.ort}", "${customer.strasse}", "${customer.gebdat}")
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

    getAllCustomers(errorFunc: (e:any)=> void, successFunc:(result:customer[])=> void){
        const sqlString = 'select * from kunden'
        this._connection.query(sqlString, (error, result:customer[])=> {
            if (error)
                errorFunc(error)
            else {
                successFunc(result)
            }
        })
    }

    getCustomer(anrede:string, name:string){
        const sqlString = `
            select * from kunden where K_Anrede = "${anrede}" AND K_Name="${name}"
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


const db = new MotorradAusleiheDB()

db.getMotorcycleDetails(3,3)
    .then(x => {x})
    .catch(e => {e})
