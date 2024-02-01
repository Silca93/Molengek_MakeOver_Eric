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







// let allFormationNames = Array.from(document.querySelectorAll('.firstlong')); // querySelectorAll mit en array directement
// let dataFormationNames = Object.values(data.formations.formationsLongues).map(formation => formation.nom); // je récupère nom dans formation longue


// je le inner html

// allFormationNames.forEach((element, index) => {
//     if (dataFormationNames[index]) {
//         element.innerHTML = dataFormationNames[index];
//     }
// });
var formations = data.formations;
   
   var divs = document.querySelectorAll('.firstlong');
   var i = 0;
   for (var formation in formations.formationsLongues) {
    var div = divs[i];
    div.innerHTML = '<span style="color:white;">' + formations.formationsLongues[formation].nom + '</span> : <br> ';
    div.innerHTML += '<br>' + formations.formationsLongues[formation].duree + '<br>';
    div.innerHTML += '<br>' + formations.formationsLongues[formation].descriptif + '<br>';
    div.innerHTML += '<br>' + formations.formationsLongues[formation].condition.ageMax + '<br>';
    div.innerHTML += '<br>' + formations.formationsLongues[formation].condition.situation + '<br>';
    div.innerHTML += '<br>' + formations.formationsLongues[formation].condition.prix + '<br>';
    div.innerHTML += '<br>' + formations.formationsLongues[formation].condition.horaire + '<br><br><br><br><br>';
    i++;
   }
   

 
for (let index = 0; index < data.formations.formationsCourtes.length; index++) {
    let theP = document.createElement("p")
    let infosData = data.formations.formationsCourtes[index].nom;
    theP.innerText = infosData;
    document.querySelectorAll(".firstShort")[index].appendChild(theP)
    
}

for (let index = 0; index < data.formations.formationsCourtes.length; index++) {
    let theP = document.createElement("p")
    let infosData = data.formations.formationsCourtes[index].pack;
    theP.innerText = infosData;
    document.querySelectorAll(".firstShort")[index].appendChild(theP)
    
}

// let theFAQ = data.FAQ;

// var theDiv = document.querySelectorAll(".accordion-body")
// var theDiv2 = document.querySelectorAll(".accordion-button")
// var i = 0;

// for (var theAnswers in theFAQ){
//     var div = theDiv[i]
//     var div2 = theDiv2[i]

//     if (div % 2 != 0) {
//     div.innerHTML = theFAQ[theAnswers]
//     console.log(div);
    
//    }else {
//     div2.innerHTML = theFAQ[theAnswers]
//    }
//    i++;
// }

// let theFAQ = data.FAQ;
// let theFAQindex = Object.values(theFAQ)
// console.log(theFAQindex);
// var theDiv = document.querySelectorAll(".accordion-body")
// var i = 0;

// for (var theAnswers in theFAQindex){
//     var div = theDiv[i]

//     if (theFAQindex % 2 !== 0) {
//         div.innerHTML = theFAQ[theAnswers]
//         console.log(div);
//     }
//     i = i + 1;
// }
// let theFAQ = data.FAQ;
// let theFAQindex = Object.values(theFAQ);
// console.log(theFAQindex);
// var theDiv = document.querySelectorAll(".accordion-body")
// var i = 0;

// for (var answer of theFAQindex){
//     var div = theDiv[i]

//     if (i % 2 !== 0) { 
//         div.innerHTML = answer;
//         console.log(div);
//     }

//     i++;
// }



// for (let i = 0; i < theFAQindex.length; i++) {
//     if (theFAQindex[i] % 2 !== 0) {
//         theDiv[i].innerHTML = theFAQindex[i]
//         console.log(theFAQindex[i]);
        
//       }
//     i++;
    
    
// }












   let url1 = data.videosTemoignage.videoI;
   
   let puturl1 = document.querySelector(".testiWeb iframe");
   puturl1.src = url1;


   



   let url2 = data.videosTemoignage.videoII;
   
   let puturl2 = document.querySelector(".testiMarket iframe");
   puturl2.src = url2;

  

let navigationToggleOn = document.querySelector(".courte");
let navigationToggleOn1 = document.querySelector(".descriptifLongues");
let navigationToggleOn2 = document.querySelector(".texteLongue");

let navigationToggleOff = document.querySelector(".longue");
let navigationToggleOff1 = document.querySelector(".descriptifCourtes");
let navigationToggleOff2 = document.querySelector(".texteCourte");






navigationToggleOn.addEventListener("click", () => {
    navigationToggleOn1.style.display = "none";
    navigationToggleOn2.style.display = "none";
    navigationToggleOff1.style.display = "flex"
    navigationToggleOff2.style.display = "flex"



})

navigationToggleOff.addEventListener("click", () => {
    navigationToggleOff1.style.display = "none";
    navigationToggleOff2.style.display = "none";
    navigationToggleOn1.style.display = "flex";
    navigationToggleOn2.style.display = "flex";


})





document.querySelector(".menu-toggle").addEventListener('click', function () {
    var nav = document.querySelector('.HeaderBot');
    nav.classList.toggle('show');
});
  



  
