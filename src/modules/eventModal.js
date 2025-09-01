// Buttons
let showModal = document.querySelector(".new__schedule")
let confirm__schedule = document.querySelector(".confirm__schedule")

// Elements of html and css
let modal = document.querySelector(".customer__service")
let container__all = document.querySelector(".container__all")


let form = document.querySelector("form")

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









    form.addEventListener("submit", (event) => {
        event.preventDefault()

        modal.classList.remove("whenShow")
        container__all.classList.remove("blurbackground")
        showModal.classList.remove("whenHidden")

      
      
        
    })