import data from "./../json/molengeek.json" assert { type: "json" }

document.querySelector(".menu-toggle").addEventListener('click', function () {
    var nav = document.querySelector('.HeaderBot');
    nav.classList.toggle('show');
});


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