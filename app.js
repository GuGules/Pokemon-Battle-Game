/*Importation des menus*/
let startPicture=document.querySelector("#startPicture")
let startMenu=document.querySelector("#title")
let startingMenu=document.querySelector("#startingMenu")
/*Importation des pokemons pour les choix*/
let choix_Dracaufeu=document.querySelector("#Dracaufeu")
let choix_Pikachu=document.querySelector("#Pikachu")
let choix_Florizarre=document.querySelector("#Florizarre")
/*Importation des pokemons pour les corps ennemies*/
let ennemy1=document.querySelector("#ennemy1")
let ennemy2=document.querySelector("#ennemy2")
let ennemy3=document.querySelector("#ennemy3")
let ennemy1_hit=document.querySelector("#ennemy1_hit")
let ennemy2_hit=document.querySelector("#ennemy2_hit")
let ennemy3_hit=document.querySelector("#ennemy3_hit")
/*Autres Importations*/
let degats=document.querySelector("#lowlife")
let lifebar=document.querySelector("#lifebardiv")
let healer=document.querySelector("#healer")
let fightbackground=document.querySelector("BGFight")

function HideMenu(){
    startMenu.classList.add("hidden");
    startPicture.classList.add("hidden");
}

function HideStartingMenu(){
    startingMenu.classList.add("hidden");
    console.log("OK");
}

function ShowStartingMenu(){
    startingMenu.classList.remove("hidden");
}

function ShowFlap(){
    degats.classList.remove("hidden");
    lifebar.classList.remove("hidden");
}

startMenu.addEventListener("click",()=>{
    HideMenu()
    ShowStartingMenu()
})

choix_Dracaufeu.addEventListener("click",()=>{
    HideStartingMenu()
    ShowFlap()
    var lifepoints=160;
    var attaque=130;
    var ennemy=randInt(1,3)
    ennemy_spawn(ennemy,attaque,lifepoints)})

choix_Pikachu.addEventListener("click",()=>{
    HideStartingMenu()
    ShowFlap()
    var attaque=30;
    var lifepoints=130;
    var ennemy=randInt(1,3)
    ennemy_spawn(ennemy,attaque,lifepoints)
})

choix_Florizarre.addEventListener("click",()=>{
    HideStartingMenu()
    ShowFlap()
    var attaque=90;
    var lifepoints=160;
    ennemy_spawn(ennemy,attaque,lifepoints)
})
/*Fonction Passerelle*/
function ennemy_spawn(a,b,c){
    if(a==1){
        ennemy1.classList.remove("hidden")
        var ennemy_pv=160
        var ennemy_attack=130
    }else if(a==2){
        ennemy2.classList.remove("hidden")
        var ennemy_pv=160
        var ennemy_attack=130
    }else{
        ennemy3.classList.remove("hidden")
        var ennemy_pv=160
        var ennemy_attack=90
    }
    jeu(a,b,c,ennemy_pv,ennemy_attack)
}

function jeu(ennemy,attaque,lifepts,ennemy_pv,ennemy_attack){
    var initial_lifepts=lifepts
    var potions=5
    document.getElementById("lifepoints").innerHTML=lifepts;
    document.getElementById("potions").innerHTML=potions+" potions restantes";
    degats.addEventListener("click",()=>{
        effect(ennemy)
        ennemy_pv=ennemy_pv-attaque
        if(ennemy_pv>15){
            document.getElementById("ennemy_pv").innerHTML=ennemy_pv;
        }else if (0<ennemy_pv && ennemy_pv<15){
            document.getElementById("ennemy_pv").innerHTML=ennemy_pv;
        }else if(ennemy_pv<0 || ennemy_pv==0){
            ennemy_pv=0;
            document.getElementById("ennemy_pv").innerHTML=ennemy_pv;
            alert("Vous avez tué l'adversaire");
        }
    })
    healer.addEventListener("click",()=>{
        if (potions>0){
            if (lifepts+13>initial_lifepts){
                lifepts=initial_lifepts;
                potions=potions-1
            }else{
                lifepts=lifepts+13;
                potions=potions-1;
            }
        }
        document.getElementById("lifepoints").innerHTML=lifepts
        document.getElementById("potions").innerHTML=potions+"potions restantes";
    })
    
}

function randInt(a,b){
    var min=a; 
    var max=b;  
    var random = Math.floor(Math.random()*(max - min))+min; 
    return random
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function effect(a){
    if(a==1){
        ennemy1_hit.classList.remove("hidden")
    }else if(a==2){
        ennemy2_hit.classList.remove("hidden")
    }else{
        ennemy3_hit.classList.remove("hidden")
    }
}
