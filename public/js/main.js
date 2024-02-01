import data from "./../json/molengeek.json" assert { type: "json" }
var logo = data.molengeekLogo


let molenlogo = () => {
    let img = document.createElement("img");
    img.src = logo;

    let a = document.createElement("a");
    a.href = "../../index.html";
    a.appendChild(img);

    document.querySelector(".HeaderBotLeft").appendChild(a);
}


molenlogo();


let logoFooter 

let logofooter = () => {
    logoFooter = document.createElement("img")
    logoFooter.src = logo;
    
    
    document.querySelector(".footermolenLogo").appendChild(logoFooter)
}
logofooter();






//  
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



/* sceance infos */



for (let index = 0; index < data.formations.seancesInfos.length; index++) {
    let theP = document.createElement("p")
    let infosData = data.formations.seancesInfos[index].nom;
    theP.innerText = infosData;
    document.querySelectorAll(".first")[index].appendChild(theP)
    
}




for (let index = 0; index < data.formations.seancesInfos.length; index++) {
        let theP = document.createElement("p")
        let infosData = data.formations.seancesInfos[index].date;
        theP.innerText = infosData;
        document.querySelectorAll(".first")[index].appendChild(theP)
        
    }
 
    



 

document.querySelector(".menu-toggle").addEventListener('click', function () {
        var nav = document.querySelector('.HeaderBot');
        nav.classList.toggle('show');
   });
      


 let socialLinks = data.reseauxSociaux;

 let thetextLinks = document.querySelector(".facebook")

for (let key in socialLinks) {
    console.log(socialLinks[key]);
    let aMake = document.createElement("a")
}


   



    
