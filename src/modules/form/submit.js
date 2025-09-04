import dayjs from "dayjs"
import { v4 as uuidv4 } from 'uuid';

import { scheduleNew } from "../../services/schedule-new.js"



// Buttons
let showModal = document.querySelector(".new__schedule")
let confirm__schedule = document.querySelector(".confirm__schedule")

// Elements of html and css
let modal = document.querySelector(".customer__service")
let container__all = document.querySelector(".container__all")

// Form
let form = document.querySelector("form")






// Variável para mostrar e esconder o formulário
let HiddenOrShowModal = false


showModal.addEventListener("click", (event) => {
    event.preventDefault()
    HiddenOrShowModal = true


    if(HiddenOrShowModal){

    modal.classList.add("whenShow")
    container__all.classList.add("blurbackground")
    showModal.classList.add("whenHidden")

    HiddenOrShowModal = false
    
    }else{
        HiddenOrShowModal = true
        
    }
    

})





// Elementos do form para o submit

let tutorName = document.getElementById("customer__info__tutor__name__input")

let namePet = document.getElementById("customer__info__pet__name__input")

let phoneInput = document.getElementById("customer__info__phone__number__input")

let serviceInput = document.getElementById("customer__info__sevice__description__input")

let clock = document.getElementById("split__to__schedule__clock__date__input")

let timeOfSchedule = document.getElementById("time__to__schedule__input") 





    form.addEventListener("submit", async(event) => {
        event.preventDefault()

        modal.classList.remove("whenShow")
        container__all.classList.remove("blurbackground")
        showModal.classList.remove("whenHidden")





        // Enviando para a API e pegando os valores dos forms
try {
    

    let name = tutorName.value.trim()
    let pet = namePet.value.trim()
    let phone = phoneInput.value.trim()
    let service = serviceInput.value.trim()
    let date = clock.value
    let time = timeOfSchedule.value

    console.log(name)
    console.log(pet)
    console.log(phone)
    console.log(service)
    console.log(date)
    console.log(time)
    
    





     let id = uuidv4();
      
        await scheduleNew({id, name, pet, phone, service, date, time})


        // Criando os elementos na tela com as informações
} catch (error) {
    
}
       
        
    })