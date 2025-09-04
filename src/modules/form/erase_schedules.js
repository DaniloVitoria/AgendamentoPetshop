import { RemoveSchedule } from "../../schedules/remove-schedules.js"
import { FetchSchedules } from "../../services/fetchApi.js"

let remove__schedule = document.querySelector(".remove__schedule")



export async function RemoveScheduleFetch({id}){










    
console.log(remove__schedule)

  

    try {


        let response = await FetchSchedules()
        let data = await response.json()
        
        
            

        data.array.forEach(async(currentValue) => {
            

             await RemoveSchedule(currentValue.id) 
        });
      


       




        
    } catch (error) {
        
    }
    

















}