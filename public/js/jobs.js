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



let selectJobs = data.jobs

for (let index = 0; index < data.jobs.length; index++) {
    let theP = document.createElement("h4")
    let infosData = data.jobs[index].poste;
    theP.innerText = infosData;
    document.querySelectorAll(".JobList")[index].appendChild(theP)
    
}

for (let index = 0; index < data.jobs.length; index++) {
    let theP = document.createElement("p")
    let infosData = data.jobs[index].description;
    theP.innerText = infosData;
    document.querySelectorAll(".JobList")[index].appendChild(theP)
    
}





let clickjobs = () => {
    let jobLists = document.querySelectorAll(".JobList");

    jobLists.forEach(jobList => {
        let a = document.createElement("a");
        a.href = "./../page/contact.html";
        jobList.appendChild(a);
    });
}
clickjobs();
