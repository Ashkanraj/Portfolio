const menuBar = document.getElementById("menubar");
const navBar = document.getElementById("navbar");
const main = document.getElementById("main");

menuBar.addEventListener("click", function (){
    if(menuBar.textContent === "menu"){
        showMenu();
        menuBar.textContent = "close";
    }
    else{
        hideMenu();
        menuBar.textContent = "menu";
    }
})

function showMenu(){
    navBar.style.transition = "transform 0.5s ease-in-out";
    navBar.style.transform = "translateY(0px)";
}

function hideMenu(){
    navBar.style.transition = "transform 0.5s ease-in-out";
    navBar.style.transform = "translateY(-1000px)";
}