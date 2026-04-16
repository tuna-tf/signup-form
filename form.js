const form = document.querySelector("form");

function validateField(field){

    const group = field.closest(".form-group");              // parent container
    const errorEl = group.querySelector(".error-message");   // the span
    const icon = group.querySelector(".error-icon") //icon

    if (!field.value) {
        console.log("empty")
        errorEl.textContent = field.placeholder + " cannot be empty"
        icon.classList.remove('hide-icon');
    }
    else {
        if (field.type === "email"){
            if (field.validity.valid) {
                errorEl.textContent = ""
                icon.classList.add('hide-icon');
            }
            else {
                errorEl.textContent = "Looks like its not a valid email."
            }
        }
        else{
            console.log(field.name, " not empty")
            errorEl.textContent = ""
            icon.classList.add('hide-icon');
        }
    }

}

form.addEventListener("submit", function(event){
    event.preventDefault();

    const inputs = event.currentTarget.querySelectorAll(".form-group input");
    
    inputs.forEach((field) => validateField(field));
})