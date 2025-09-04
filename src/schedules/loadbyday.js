import dayjs from "dayjs";
import { FetchSchedulesByDate } from "./renderizeSchedulesByDay.js";
import { ShowSchedules } from "./showSchedules.js"


let clock = document.querySelector("#date")
let time__of__day = document.querySelector("time__of__day")
clock.value = dayjs().format("YYYY-MM-DD")

export async function scheduleday(){


    let date = dayjs(clock.value)
    console.log("Data inicial",date);

    const dailySchedule = await FetchSchedulesByDate({date})

    console.log("Agendamentos do dia:", dailySchedule);
    console.log("Agendamentos do dia", dailySchedule)
    ShowSchedules({dailySchedule})

    clock.addEventListener("change", async() => {

        date = dayjs(clock.value)
        console.log("Nova data selecionada:", date);
        
 // Limpa a lista antes de exibir os novos agendamentos
        let list = document.querySelector(".list");
        if (list) {
            list.innerHTML = ""; // Remove todos os elementos filhos
        }

        const updateSchedule = await FetchSchedulesByDate({date})
        ShowSchedules({dailySchedule: updateSchedule})
    })

}











