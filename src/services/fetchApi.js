import { apiConfig } from "./api.js";




export async function FetchSchedules() {
    
try {
    
    


    let reponse = await fetch(`${apiConfig.baseUrl}/schedules`)
    let data = await reponse.json()

    console.log(data)
    return data


} catch (error) {
    
    console.log("Não foi possível buscar informações da API", error)
}

}




