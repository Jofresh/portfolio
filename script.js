const data = [
    { command: "about", output: "Geoffray, 21 ans"},
    { command: "projects", output: "Projet Périscolaire, Spring Boot & Svelte"},
    { command: "experience", output: "Analys Informatique 2020 - 2022"},
    { command: "education", output: "DUT Info, L3 Info + MIAGE"},
    { command: "clear" }
]

const shellEl = document.querySelector("#shell")
const inputEl = document.querySelector("#command")
const outputsEl = document.querySelector("#outputs")

inputEl.focus()

inputEl.onkeypress = ({keyCode, target}) => {
    if (keyCode === 13) {
        const { value } = target
        const command = data.find(({command}) => command === value);
        if (command && command.command === "clear") {
            clearShell()
            return
        }
        printCommand(command)
    }
}

function clearShell() {
    document.querySelectorAll(".output").forEach(elt => elt.remove())
    clearInput()
}

function printCommand(command) {
    const outputEl = document.createElement("div")

    outputEl.className = "output"
    outputEl.textContent = command ? command.output : "Cette commande n'existe pas."

    outputsEl.insertAdjacentElement("beforeend", outputEl)

    clearInput()
}

function clearInput() { inputEl.value = "" }


/*

À propos de moi


Expérience professionnelle

Parcours scolaire

Projets / réalisations



*/