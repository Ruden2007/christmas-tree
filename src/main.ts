import './style.css'
import {treeBuilder} from "./tree/treeBuilder.ts";

let treeHeight: number | undefined

function hello() {
    const helloContainer = document.createElement("h1")
    helloContainer.classList.add("hello")
    helloContainer.textContent = "Привіт!"
    document.body.appendChild(helloContainer)
    setTimeout(() => {
        helloContainer.classList.add("hide")
        setTimeout(() => {
            helloContainer.remove()
        }, 2000)
    }, 2000)
}

while (!treeHeight) {
    const userInput = prompt("Input tree height")
    if (!userInput) continue
    const userInputNumber = Math.abs(Math.floor(parseInt(userInput)))
    switch (userInputNumber) {
        case 0:
            alert("Довжина повинна бути представлена позитивним числом!")
            break
        case 1:
            alert("Довжина занадто маленька!")
            break
        default:
            hello()
            treeHeight = userInputNumber
    }
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${treeBuilder(treeHeight)}
  </div>
`


