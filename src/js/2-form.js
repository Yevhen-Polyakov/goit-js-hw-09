const form = document.querySelector('.feedback-form')

let formData = {
    email: "",
    message: "",
}

const save = JSON.parse(localStorage.getItem("feedback-form-state")) || {}

if(save){
    form.elements.email.value = save.email || ''
    form.elements.message.value = save.message || ''
}

form.addEventListener("input", handleInput)
form.addEventListener('submit', handleSubmit)

function handleInput (e){
   const {name, value} = e.target
   formData[name] = value
   localStorage.setItem("feedback-form-state", JSON.stringify(formData) )
}

function handleSubmit(e){
    e.preventDefault()
    if(formData.email === "" || formData.message === ""){
        alert('Fill please all fields')
        return;
    }
    console.log(formData)
    localStorage.removeItem("feedback-form-state")
    form.reset()
}