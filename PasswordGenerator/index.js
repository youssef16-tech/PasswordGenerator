const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let pass1El = document.getElementById("pass1")
let pass2El = document.getElementById("pass2")

function gen() {
    pass1El.textContent = ""
    pass2El.textContent = ""

    let length = document.getElementById("length").value
    let includeNumbers = document.getElementById("numbers").checked
    let includeSymbols = document.getElementById("symbols").checked

    let filteredCharacters = []

    for (let i = 0; i < characters.length; i++) {
        let char = characters[i]

        if (!includeNumbers && char >= "0" && char <= "9") {
            continue
        }

        if (!includeSymbols && !((char >= "A" && char <= "Z") || (char >= "a" && char <= "z") || (char >= "0" && char <= "9"))) {
            continue
        }

        filteredCharacters.push(char)
    }

    for (let i = 0; i < length; i++) {
        let pass1 = filteredCharacters[Math.floor(Math.random() * filteredCharacters.length)]
        pass1El.textContent += pass1

        let pass2 = filteredCharacters[Math.floor(Math.random() * filteredCharacters.length)]
        pass2El.textContent += pass2
    }
}
function copy(text) {
    navigator.clipboard.writeText(text)
    alert("Copied!")
}

