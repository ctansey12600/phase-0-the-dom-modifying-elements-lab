const main = document.getElementById('main')
main.remove()

const newHeader = document.createElement("h1")
const body = document.querySelector("body")

console.log(newHeader)
newHeader.id = "victory"
newHeader.textContent = "Casey is the champion"

body.append(newHeader)