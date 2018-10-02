function morse(text) {
    var morsecode = {
        A: ".-",
        B: "-...",
        C: "-.-.",
        D: "-..",
        E: ".",
        F: "..-.",
        G: "--.",
        H: "....",
        I: "..",
        J: ".---",
        K: "-.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        P: ".--.",
        Q: "--.-",
        R: ".-.",
        S: "...",
        T: "-",
        U: "..-",
        V: "...-",
        W: ".--",
        X: "-..-",
        Y: "-.--",
        Z: "--..",
        1: ".----",
        2: "..---",
        3: "...--",
        4: "....-",
        5: ".....",
        6: "-....",
        7: "--...",
        8: "---..",
        9: "----.",
        0: "-----"
    };
    var upper = text.toUpperCase();
    var array = Array.from(upper);
    var i = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        array[i] = morsecode[item];
        i++;
    }
    var ausgabe = array.join("");
    return ausgabe;
}
var inputField = document.getElementById("input");
var outputField = document.getElementById("output");
var sendButton = document.getElementById("sendButton");
inputField.addEventListener("input", function () {
});
sendButton.addEventListener("click", function () {
    outputField.innerText = inputField.value + " ist im Morse Code: \n " + morse(inputField.value);
    inputField.value = "";
});
