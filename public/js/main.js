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






console.log(data.partenaires.bxFormation)

// let carrouImage = data.partenaires.key.logo
var slides = document.querySelectorAll('.slide');

// let imgCarrou

Object.keys(data.partenaires).forEach((key, index) => {
    let slide = slides[index];
    if (slide) {
        let carrouImage = data.partenaires[key].logo;
        let imgCarrou = document.createElement("img");
        imgCarrou.src = carrouImage;
        imgCarrou.style.height = "120px"
        imgCarrou.style.width = "200px"

        slide.appendChild(imgCarrou);
    }
});




    
