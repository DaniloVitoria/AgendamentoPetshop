import { apiConfig } from "./api.js"



export async function scheduleNew({id, name, pet, phone, service, date, time}){


    try {

        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id, 
                 nameTutor: name,
                 namePet : pet,
                  cell: phone,
                   servicePet: service, 
                   dateOfService: date, 
                   timeOfService: time})

        })


        alert("Agendamento realizado com sucesso")
        window.location.reload()
        
    } catch (error) {
        console.log("Não foi possível realizar o agendamento",error)
    }





}


