


interface ArrayConstructor{
    from<T>(arrayLike:ArrayLike<T>):Array<T>
}

const meineListe = document.getElementById("meineListe") as HTMLUListElement

function addElementsToList(element:string){

    const newListItem = document.createElement("li")
    newListItem.className = "collection-item"
    newListItem.innerHTML = `
    <div>
        ${element}
        <a href="#!" class="secondary-content">
            <i id="deleteButton" class="material-icons">delete</i>
        </a>
    </div>
    `
    meineListe.appendChild(newListItem)

    const deleteButton = newListItem.querySelector("i") as HTMLElement
    deleteButton.addEventListener("click", () => {
        meineListe.removeChild(newListItem)
    })
}

const inputField = document.getElementById("input") as HTMLInputElement
const addButton = document.getElementById("addButton") as HTMLButtonElement


/*inputField.addEventListener("input", ()=>{
})*/

addButton.addEventListener("click", () => {
    addElementsToList(inputField.value)
    inputField.value = ""
})

