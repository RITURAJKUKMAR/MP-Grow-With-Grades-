let inputs = document.querySelectorAll("input");
let nameValidation = /[A-Za-z0-9]{6,}$/;
// let emailValidation = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function logindata() {
    if ("RITURAJKUMAR1105" == inputs[0].value && "RITU@1105" == inputs[1].value)
        return true;
    else {
        alert("Invalid Username or Password");
        return false;
    }
}