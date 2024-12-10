let inputs = document.querySelectorAll("input");
let nameValidation = /[A-Za-z0-9_]{6,}$/;
// let emailValidation = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;
let x=false;
let un = 1;
let pa = 1;
function verify() {    
    if (!nameValidation.test(inputs[2].value)) {
        alert("Invalid UserName");
        un = 0;
    }
    if(inputs[7].value!==inputs[8].value)
    {
        alert("Password does not matched!");
        pa=0;
    }
    if (un == 1 && pa == 1) 
        x = confirm("Do you want to submit?");
    return x;
}