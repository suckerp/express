import * as fs from 'fs'

const result = fs.readFileSync(__dirname + "/test.txt",{encoding:"utf-8"})
console.log(result)

fs.readFile(__dirname + "/test.txt",{encoding:"utf-8"}, (error, result) => {
    console.log(result)
})


console.log(__dirname)
console.log("test")