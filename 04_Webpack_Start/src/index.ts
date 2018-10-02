//import { halloWelt } from './module_A'
//halloWelt()


interface ArrayConstructor{
    from<T>(arrayLike:ArrayLike<T>):Array<T>
}
/*
import {} from 'handlebars'
import { compile } from 'handlebars'


const meineListe = document.getElementById("meineListe") as HTMLDivElement

function addElementsToList(element:string){

    const newListItem = document.getElementById("todoTemp")
    const template = compile(newListItem.innerHTML)

    inputField.innerHTML = template ({
        item:element
    })*/
    

    //newListItem.className = "collection-item"
    /*newListItem.innerHTML = `
    <div>
        ${element}
        <a href="#!" class="secondary-content">
            <i id="deleteButton" class="material-icons">delete</i>
        </a>
    </div>
    `*/


/*    meineListe.appendChild(newListItem)

    const deleteButton = newListItem.querySelector("i") as HTMLElement
    deleteButton.addEventListener("click", () => {
        meineListe.removeChild(newListItem)
    })*/
//}

//const inputField = document.getElementById("input") as HTMLInputElement
//const addButton = document.getElementById("addButton") as HTMLButtonElement


/*
addButton.addEventListener("click", () => {
    addElementsToList(inputField.value)
    inputField.value = ""
})*/


import {} from 'handlebars'
import { compile } from 'handlebars'
import * as template from './templates/handlebar.hbs'

const input = document.getElementById("input") as HTMLDivElement


 const html = template ({
    text:"hallo Welt",
    text2:"das ist ein Text",
    tage: ["Montag", "Dienstag"]
})

console.log(html)

input.innerHTML = html


