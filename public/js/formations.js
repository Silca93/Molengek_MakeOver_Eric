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










let infosData = data.formations.formationsLongues[0];
console.log(infosData);
for (let index = 0; index < data.formations.formationsLongues.length; index++) {
        let theP = document.createElement("p")
        let infosData = data.formations.formationsLongues;
        theP.innerText = infosData;
        document.querySelectorAll(".firstlong")[index].appendChild(theP)
        
}
    

