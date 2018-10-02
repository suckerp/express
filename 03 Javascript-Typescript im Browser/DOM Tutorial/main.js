//materialize 
var M;
document.addEventListener("DOMContentLoaded", function () {
    console.log(document);
    var navLinksArray = Array.from(document.querySelectorAll("nav div ul li"));
    navLinksArray.forEach(function (x) {
        console.log(x.textContent);
    });
    navLinksArray.forEach(function (x) {
        x.addEventListener("click", function () {
            M.toast({ html: x.textContent });
        });
    });
    // erstes element aus navigationsliste entfernen
    var navListElement = document.querySelector("nav div ul");
    //navListElement.removeChild(navListElement.children[0])
    var element = document.createElement("li");
    element.innerHTML = "<a href=\"#\">Impressum</a>";
    element.addEventListener("click", function () {
        M.toast({ html: element.textContent });
    });
    navListElement.appendChild(element);
    //navListElement.insertBefore(element,null)
});
