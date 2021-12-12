let startPicture=document.querySelector("#startPicture")
let startMenu=document.querySelector("#title")
let choix_Dracaufeu=document.querySelector("#Dracaufeu")
let choix_Pikachu=document.querySelector("#Pikachu")
let choix_Florizarre=document.querySelector("#Florizarre")
let startingMenu=document.querySelector("#startingMenu")

function HideMenu(){
    startMenu.classList.add("hidden");
    startPicture.classList.add("hidden")
}

function HideStartingMenu(){
    startingMenu.classList.add("hidden")
    console.log("OK")
}

function ShowStartingMenu(){
    startingMenu.classList.remove("hidden")
}

startMenu.addEventListener("click",()=>{
    HideMenu()
    ShowStartingMenu()
})

choix_Dracaufeu.addEventListener("click",()=>{
    HideStartingMenu()
    var nom_pokemon="Dracaufeu";
    var attaque_max=86;
    var lifepoints=76;
    jeu(nom_pokemon,attaque_max,lifepoints)
    randInt((attaque_max-12),attaque_max)
})

choix_Pikachu.addEventListener("click",()=>{
    HideStartingMenu()
    var nom_pokemon="Pikachu";
    var attaque_max=54;
    var lifepoints=82;
    jeu(nom_pokemon,attaque_max,lifepoints)
})

choix_Florizarre.addEventListener("click",()=>{
    HideStartingMenu()
    var nom_pokemon="Florizarre";
    var attaque_max=74;
    var lifepoints=51;
    jeu(nom_pokemon,attaque_max,lifepoints)
})

function jeu(a,b,c){
    var nom_pokemon=a;
    var attaque_max=b;
    var life_points=c;
    console.log(a,b,c)
}

function randInt(a,b){
    var min=a; 
    var max=b;  
    var random = Math.floor(Math.random() * (max - min)) + min; 
    alert(random)
}
