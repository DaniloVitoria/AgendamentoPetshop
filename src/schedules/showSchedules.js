

import { apiConfig } from "../services/api.js";
import { FetchSchedules } from "../services/fetchApi.js";
import dayjs from "dayjs";




export async function ShowSchedules() {
    

//tentando acessar a API
try {
   
    
    //recebendo a data da API
let data = await FetchSchedules()
//percorrendo a data


data.forEach(async(currentValue) => {







    
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
    if(hourOfDay >= 6 && hourOfDay <= 11){
        period.innerText = "Manhã"
    }else if(hourOfDay >= 12 && hourOfDay <=17){
        period.innerText = "Tarde"
    }else if(hourOfDay >= 17 && hourOfDay <=22){
        period.innerText = "Noite"
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
header__of__time__of__day.classList.add("header__of__time__of__day")
time__of__day.classList.add("time__of__day")
container__header__period.classList.add("container__header__period")


// Instanciando os elementos em hierarquia
    period__of__day.appendChild(imgOfPeriod)
     period__of__day.appendChild(period)
    
    container__header__period.appendChild(period__of__day)

    header__of__time__of__day.appendChild(container__header__period)
    time__of__day.appendChild(header__of__time__of__day)
    

    










// adiciona a lista
list.appendChild(time__of__day)
    } catch (error) {
      
    }
    
})

} catch (error) {
    
}





}
