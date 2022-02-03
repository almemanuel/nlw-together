import Modal from './modal.js'

const modal = Modal()

// Get every buttons with the class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    // add the listener
    button.addEventListener("click", event => {
        modal.open()
    })
})

// When "Marcar como Lido" is clicked
