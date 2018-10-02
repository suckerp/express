var meineListe = document.getElementById("meineListe");
function addElementsToList(element) {
    var newListItem = document.createElement("li");
    newListItem.className = "collection-item";
    newListItem.innerHTML = "\n    <div>\n        " + element + "\n        <a href=\"#!\" class=\"secondary-content\">\n            <i id=\"deleteButton\" class=\"material-icons\">delete</i>\n        </a>\n    </div>\n    ";
    meineListe.appendChild(newListItem);
    var deleteButton = newListItem.querySelector("i");
    deleteButton.addEventListener("click", function () {
        meineListe.removeChild(newListItem);
    });
}
var inputField = document.getElementById("input");
var addButton = document.getElementById("addButton");
/*inputField.addEventListener("input", ()=>{
})*/
addButton.addEventListener("click", function () {
    addElementsToList(inputField.value);
    inputField.value = "";
});
