import { apiConfig } from "../services/api.js";





export async function RemoveSchedule({id}) {

    try {
        
         await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
        method: "DELETE",

    })

    alert("Agendamento cancelado com sucesso")

    } catch (error) {
        
    }
   
    
}








