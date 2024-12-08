let menu=document.getElementsByClassName("menu-nav");
let show=false;
function showMenu(){
    if(show==false)
    {
        show=true;
        menu[0].classList.add("show-nav");
    }
    else
    {
        show=false;
        menu[0].classList.remove("show-nav");
    }
}