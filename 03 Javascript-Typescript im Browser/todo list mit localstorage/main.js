var meineListe = document.getElementById("meineListe");
var addButton = document.getElementById("addButton");
var inputField = document.getElementById("input");
var listString = window.localStorage.getItem("meineListe") || "[]";
var meineListeArray = JSON.parse(listString);
function addElementsToList(element) {
    var newListItem = document.createElement("li");
    newListItem.className = "collection-item";
    newListItem.innerHTML = "\n    <div>\n        <span>" + element + "</span>\n        <a href=\"#!\" class=\"secondary-content\">\n            <i class=\"material-icons done\">done</i>\n            <i class=\"material-icons delete\">delete</i>\n        </a>\n    </div>\n    ";
    var deleteButton = newListItem.querySelector(".delete");
    //Button zum Durchstreichen
    var doneButton = newListItem.querySelector(".done");
    //zum Durchstreichen erst den <span> Tag setzen und dann daruaf zugreifen
    var span = newListItem.querySelector("span");
    //Funktion zum Durchstreichen
    doneButton.addEventListener("click", function () {
        span.style.textDecoration = "line-through";
    });
    deleteButton.addEventListener("click", function () {
        meineListe.removeChild(newListItem);
        //Eintrag entfernen und die Liste neu zusammensetzen
        meineListeArray.splice(meineListeArray.indexOf(span.textContent || ""), 1);
        window.localStorage.setItem("meineListe", JSON.stringify(meineListeArray));
    });
    meineListe.appendChild(newListItem);
}
//wenn ein Event stattfindet, dann wird der Wert in die Liste eingetragen und auch zum Localstorage hinzugefügt
var itemToListListener = function () {
    if (inputField.value) {
        meineListeArray.push(inputField.value);
        addElementsToList(inputField.value);
        window.localStorage.setItem("meineListe", JSON.stringify(meineListeArray));
        inputField.value = "";
    }
};
inputField.addEventListener("change", itemToListListener);
addButton.addEventListener("click", itemToListListener);
//einmalig wird beim Start die Liste mit den Einträgen aus dem Localstorage gefüllt
meineListeArray.forEach(function (x) {
    addElementsToList(x);
});
