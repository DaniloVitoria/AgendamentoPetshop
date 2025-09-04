import { FetchSchedules } from "../services/fetchApi.js"
import dayjs from "dayjs";










export async function FetchSchedulesByDate({date}) {


    try {
        
        let data = await FetchSchedules()
        

console.log("Dados recebidos:", data);
        let dailySchedules = data.filter((schedules) => {
            //console.log("Comparando:", schedules.dateOfService, "com", date.format("YYYY-MM-DD"));
            return dayjs(schedules.dateOfService).isSame(date , "day")

        })


        return dailySchedules;
    } catch (error) {
        
    }
    
}




