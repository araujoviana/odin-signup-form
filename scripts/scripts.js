// Password matching 
const password = document.querySelector("#form-password");
const confirmPassword = document.querySelector("#form-confirm-password");

const form = document.querySelector(".main-form");
const errorText = document.createElement("div"); 

errorText.classList.add("error-text");

form.addEventListener("submit", (event) => {
    password.style.borderColor = "";
    confirmPassword.style.borderColor = "";
    errorText.textContent = "";

    if (password.value !== confirmPassword.value) {
        event.preventDefault();

        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";

        errorText.textContent = "Passwords don't match";
        form.insertBefore(errorText, form.firstChild);  
    }
});
