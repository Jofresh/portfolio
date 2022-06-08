const data = [
    { command: "about", output: "Geoffray, 21 ans"},
    { command: "projects", output: "Projet Périscolaire, Spring Boot & Svelte"},
    { command: "experience", output: "Analys Informatique 2020 - 2022"},
    { command: "education", output: "DUT Info, L3 Info + MIAGE"},
]

const inputEl = document.querySelector("#prompt")
const outputsEl = document.querySelector("#outputs")

inputEl.focus()
inputEl.onblur = function() { this.focus() }

inputEl.onkeypress = ({ keyCode, target }) => {
    if (keyCode === 13) {
        const { value } = target
        if (value === "clear") {
            clearShell()
            return
        }
        printCommand(value)
    }
}

function clearShell() {
    document.querySelectorAll(".history").forEach(elt => elt.remove())
    clearInput()
}

function printCommand(value) {
    const command = data.find(({ command }) => command === value)

    const historyEl = document.createElement("div")
    historyEl.className = "history"

    const duplicatedInput = inputEl.cloneNode()
    duplicatedInput.value = `$: ${duplicatedInput.value}`
    duplicatedInput.className = "command"
    duplicatedInput.readonly = true

    const outputEl = document.createElement("div")
    outputEl.className = "output"
    outputEl.textContent = command ? command.output : "Cette commande n'existe pas."

    historyEl.appendChild(duplicatedInput)
    historyEl.appendChild(outputEl)

    outputsEl.insertAdjacentElement("beforeend", historyEl)

    clearInput()
}

function clearInput() { inputEl.value = "" }


/*

À propos de moi


Expérience professionnelle

Parcours scolaire

Projets / réalisations



*/