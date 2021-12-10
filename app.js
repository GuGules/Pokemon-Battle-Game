let startPicture=document.querySelector("#startPicture")
let startMenu=document.querySelector("#title")
let interfaceJeu=document.querySelector("#game")

function HideMenu(){
    startMenu.classList.add("hidden");
    startPicture.classList.add("hidden")
}

function DémarrageJeu(){
    interfaceJeu.classList.remove("hidden")
}

startMenu.addEventListener("click",()=>{
    HideMenu()
    DémarrageJeu()
})