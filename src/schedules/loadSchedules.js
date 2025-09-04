import { ShowSchedules } from "./showSchedules.js"


window.addEventListener("DOMContentLoaded", async(event) => {
    event.preventDefault()

    try {
        await ShowSchedules()
    } catch (error) {
        console.log(error)
    }

})