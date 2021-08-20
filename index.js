const main = document.getElementById('main')
main.remove()

const newHeader = document.createElement("h1")
const body = document.querySelector("body")
body.append(newHeader)
newHeader.id = "victory"
newHeader.textContent = "Casey is the champion"

