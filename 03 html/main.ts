//console.log("check 1-2")
//console.log(document)
//console.log(document.domain)
//console.log(document.URL)
//console.log(document.title)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all)
//console.log(document.all[2])
//console.log(document.forms)

interface ArrayConstructor{
    from<T>(arrayLike:ArrayLike<T>):Array<T>
}

//setTimeout(() => {
    //document.title = "javascript und html"
    
    
    

    // inputField.value = "text"
    // inputField.style.backgroundColor = "red"
    
    
    //const collectionItems = Array.from(document.getElementsByClassName("collection-item"))
    
    //const listItems = Array.from(document.getElementsByTagName("li"))

    

    // class mit . - id mit # - tag ohne, wie im normalen css/html
    // querySelector nimmt nur das 1. element, für alle querySelectorAll
    //const navItems = document.querySelector(".navbar-fixed div ul li")

    //const navItems2 = Array.from(document.querySelectorAll(".navbar-fixed div ul li")) as HTMLLIElement[]
    // console.log(navItems2)
    // navItems2[0].style.backgroundColor = "red"

    /* for(let item of navItems2){
        item.style.backgroundColor = "red"
    } */

    //const body = document.body as HTMLBodyElement

    //console.log(body.children[1].children)

    //console.log(body.parentElement)
    //console.log(body.firstElementChild)

    //console.log(body.children[0].nextElementSibling)

    //const listItem = document.createElement("li")
    //listItem.innerHTML = `<a href="#">Impressum</a>`

    //const navList = document.querySelector(".navbar-fixed div ul") as HTMLUListElement
    //navList.appendChild(listItem)

    //Events

    /*
    const addButton = document.getElementById("addButton") as HTMLButtonElement

    addButton.addEventListener("click", () => {
        
        if (addButton.style.backgroundColor=="red"){
            addButton.style.backgroundColor = "#26A69A"
        }
        else{
            addButton.style.backgroundColor = "red"
        }

    })

    
    const inputField = document.getElementById("input1") as HTMLInputElement
    const inputField2 = document.getElementById("input2") as HTMLInputElement

    inputField.addEventListener("input", ()=>{
        inputField2.value = inputField.value
    })

    inputField2.addEventListener("input", ()=>{
        inputField.value = inputField2.value
    })*/

    

//}, 0);

/*
const meineListe = document.getElementById("meineListe") as HTMLUListElement

function addElementsToList(element:string){
    const newListItem = document.createElement("li")
    newListItem.className = "collection-item"
    newListItem.innerHTML = `
    <div>
        ${element}
        <a href="#!" class="secondary-content">
            <i class="material-icons">delete</i>
        </a>
    </div>
    `
    meineListe.appendChild(newListItem)
}

addElementsToList("test")


const fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts")

fetchPromise
.then(x => x.json())
.then((x:any[]) => {
    for (let item of x){
        addElementsToList(item.title)
    }
})
.catch(e => {
    console.log(e)
})
*/


