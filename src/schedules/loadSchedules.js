import { ShowSchedules } from "./showSchedules.js"
import { scheduleday } from "./loadbyday.js"

window.addEventListener("DOMContentLoaded", async(event) => {
    event.preventDefault()

    try {
        await scheduleday()
    } catch (error) {
        console.log(error)
    }

})