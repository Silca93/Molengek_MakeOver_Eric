import data from "./../json/molengeek.json" assert { type: "json" }
var logo = data.molengeekLogo

let img 

let molenlogo = () =>{
    img = document.createElement("img")
    img.src = logo
    document.querySelector(".HeaderBotLeft").appendChild(img)

}

molenlogo();


let logoFooter 

let logofooter = () => {
    logoFooter = document.createElement("img")
    logoFooter.src = logo;
    
    
    document.querySelector(".footermolenLogo").appendChild(logoFooter)
}
logofooter();
// let faceLogo = data.reseauxSociaux.facebook

// let image

// let logoFace = () =>{
//     image = document.createElement("img")
//     image.src = faceLogo
//     document.querySelector(".facebook").appendChild(image)

// }

// logoFace();
    
    
