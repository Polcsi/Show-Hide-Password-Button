const show = document.querySelector("#show-password");
const hide = document.querySelector("#hide-password");
var passwordField = document.getElementById("password-field");

show.onclick = () => {
    show.style.display = "none";
    hide.style.display = "unset";
    passwordField.type = "text";
}

hide.onclick = () => {
    show.style.display = "unset";
    hide.style.display = "none";
    passwordField.type = "password";
}