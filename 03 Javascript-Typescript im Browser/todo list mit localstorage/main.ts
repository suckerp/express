


interface ArrayConstructor{
    from<T>(arrayLike:ArrayLike<T>):Array<T>
}

const meineListe = document.getElementById("meineListe") as HTMLUListElement
const addButton = document.getElementById("addButton") as HTMLButtonElement
const inputField = document.getElementById("input") as HTMLInputElement

const listString = window.localStorage.getItem("meineListe") || "[]"

const meineListeArray:string[] = JSON.parse(listString)


function addElementsToList(element:string){
    const newListItem = document.createElement("li")
    newListItem.className = "collection-item"
    newListItem.innerHTML = `
    <div>
        <span>${element}</span>
        <a href="#!" class="secondary-content">
            <i class="material-icons done">done</i>
            <i class="material-icons delete">delete</i>
        </a>
    </div>
    `

    const deleteButton = newListItem.querySelector(".delete") as HTMLElement

    //Button zum Durchstreichen
    const doneButton = newListItem.querySelector(".done") as HTMLElement

    //zum Durchstreichen erst den <span> Tag setzen und dann daruaf zugreifen
    const span = newListItem.querySelector("span") as HTMLSpanElement

    //Funktion zum Durchstreichen
    doneButton.addEventListener("click",()=>{
        span.style.textDecoration = "line-through"
      })

    
    deleteButton.addEventListener("click", () => {
        meineListe.removeChild(newListItem)

        //Eintrag entfernen und die Liste neu zusammensetzen
        meineListeArray.splice(meineListeArray.indexOf(span.textContent || ""),1)
        window.localStorage.setItem("meineListe", JSON.stringify(meineListeArray))
    })

    meineListe.appendChild(newListItem)
    
}

//wenn ein Event stattfindet, dann wird der Wert in die Liste eingetragen und auch zum Localstorage hinzugefügt
const itemToListListener = ()=>{
    if(inputField.value){
        meineListeArray.push(inputField.value)
        addElementsToList(inputField.value)
        window.localStorage.setItem("meineListe", JSON.stringify(meineListeArray))
        inputField.value=""
    }
}


inputField.addEventListener("change", itemToListListener)
addButton.addEventListener("click", itemToListListener)

//einmalig wird beim Start die Liste mit den Einträgen aus dem Localstorage gefüllt
meineListeArray.forEach(x=> {
    addElementsToList(x)
})