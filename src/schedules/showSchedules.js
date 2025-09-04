

import { apiConfig } from "../services/api.js";
import { FetchSchedules } from "../services/fetchApi.js";
import { RemoveSchedule } from "./remove-schedules.js";
import { RemoveScheduleFetch } from "../modules/form/erase_schedules.js";
import dayjs from "dayjs";




export async function ShowSchedules({dailySchedule}) {
    

//tentando acessar a API
try {
   
    
    //recebendo a data da API
let data = await FetchSchedules()
//percorrendo a data


dailySchedule.forEach(async(currentValue) => {







    
 let list = document.querySelector(".list")   
//Elemento pai que engloba tudo
let time__of__day = document.createElement("div")

//Header
let header__of__time__of__day = document.createElement("header")

let container__header__period = document.createElement("div")

// Elemento que é container de imgOfPeriod e period 
let period__of__day = document.createElement("div")
//Imagem do icone do periodo do dia
let imgOfPeriod = document.createElement("img")
// Nome do periodo do dia ao lado da imagem
let period = document.createElement("span")

//Hora escolhida pelo usuário
let hour = document.createElement("span")

//separação do header do corpo
let hr = document.createElement("hr")












    
    
 try {
        
    // Para defenir em que periodo do dia é exemplo: manhã, tarde, noite
  let  hourOfService= await currentValue.timeOfService
  let hourOfDay = parseInt(hourOfService.split(":")[0])
  console.log(hourOfDay)
    if(hourOfDay >= 9 && hourOfDay <= 12){
        period.innerText = "Manhã"
        hour.innerText = "09h-12h"
    }else if(hourOfDay >= 13 && hourOfDay <=18){
        period.innerText = "Tarde"
        hour.innerText = "13h-18h"
    }else if(hourOfDay >= 19 && hourOfDay <=21){
        period.innerText = "Noite"
        hour.innerText = "19h-21h"
    }else {
        period.innerText = "Noite"
        
    }
    

    // Para definir o icone que ira exibir do dia
    if(hourOfDay >= 6 && hourOfDay <=11){
        imgOfPeriod.src = "../src/assets/Sun-Fog--Streamline-Solar.svg"
    }else if(hourOfDay >= 12 && hourOfDay <=17){
        imgOfPeriod.src = "../src/assets/Cloud-Sun-4--Streamline-Solar.svg"
    }else if(hourOfDay >= 17 && hourOfDay <=22){
        imgOfPeriod.src = "../src/assets/Moon-Stars--Streamline-Solar.svg"
    }else {
       imgOfPeriod.src = "../src/assets/Moon-Stars--Streamline-Solar.svg"
    }



    

    //Adicionando as classes css
    period.classList.add("period")
    period__of__day.classList.add("period__of__day")
    hour.classList.add("hour")
   
header__of__time__of__day.classList.add("header__of__time__of__day")
time__of__day.classList.add("time__of__day")
container__header__period.classList.add("container__header__period")


// Instanciando os elementos em hierarquia
    period__of__day.appendChild(imgOfPeriod)
     period__of__day.appendChild(period)
    
    container__header__period.appendChild(period__of__day)
    container__header__period.appendChild(hour)
    header__of__time__of__day.appendChild(container__header__period)
    header__of__time__of__day.appendChild(hr)
    time__of__day.appendChild(header__of__time__of__day)
    

    





    //Parte das informações do cliente

    let clients = document.createElement("div")
    let ul = document.createElement("ul")
    let li = document.createElement("li")

    let containerhour__and__names = document.createElement("div")

    let hour_schedulepet = document.createElement("span")

    let names__of__pet__and__client = document.createElement("div")

    let name__pet = document.createElement("span")

    let name__client =  document.createElement("span")

    let service = document.createElement("span")

    let remove__schedule = document.createElement("span")


    //Adicionando css
    containerhour__and__names.classList.add("containerhour__and__names")
    hour_schedulepet.classList.add("hour-schedulepet")
    names__of__pet__and__client.classList.add("names__of__pet__and__client")
    name__pet.classList.add("name__pet")
    name__client.classList.add("name__client")
    service.classList.add("service")
    remove__schedule.classList.add("remove__schedule")

    hour_schedulepet.innerText = hourOfService

    name__pet.innerText = currentValue.namePet
    name__client.innerText = ` / ${currentValue.nameTutor}`

    names__of__pet__and__client.appendChild(name__pet)
    names__of__pet__and__client.appendChild(name__client)

    containerhour__and__names.appendChild(hour_schedulepet)
    containerhour__and__names.appendChild(names__of__pet__and__client)



    service.innerText = currentValue.servicePet

    remove__schedule.innerText = "Remover agendamento"


    li.appendChild(containerhour__and__names)
    li.appendChild(service)
    li.appendChild(remove__schedule)

    ul.appendChild(li)
    clients.appendChild(ul)
    time__of__day.appendChild(clients)


// adiciona a lista
list.appendChild(time__of__day)


console.log(remove__schedule)
remove__schedule.addEventListener("click", async(event)=> {
    event.preventDefault()

    try {

        let id = await currentValue.id
       await RemoveSchedule({id}) 

       window.location.reload()
    } catch (error) {
        
    }
    
})







    } catch (error) {
      
    }
    



    
})


} catch (error) {
    
}





}
