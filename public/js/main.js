import data from "./../json/molengeek.json" assert { type: "json" }
let logo = data.molengeekLogo

let img 

let molenlogo = () =>{
    img = document.createElement("img")
    img.src = logo
    document.querySelector(".HeaderBotLeft").appendChild(img)

}

molenlogo();
    
