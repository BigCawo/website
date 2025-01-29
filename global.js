let Mq480 = window.matchMedia("(max-width: 480px)")
let Mq1300 = window.matchMedia("(max-width: 1300px)")
let Mq900 = window.matchMedia("(max-width: 900px)")

if (sessionStorage.getItem("explored") == 1){
    document.body.style.animation = "none"
 }
if(performance.navigation.type == 2){
    location.reload(true);
 }




let prevPage = sessionStorage.getItem("Page")
// console.log(sessionStorage.getItem("Page"))
let urlEnd = window.location.href.replace(/\/$/, '').substring(window.location.href.replace(/\/$/, '').lastIndexOf('/') + 1)

if (urlEnd.includes("2024")){urlEnd = "accueil"}
sessionStorage.setItem("Page",urlEnd)

document.title = "Eliot Bernaud - Design Produit / Multimedia / Illustration"


// get Index of project
let projectIndex = 0
if(typeof projectList !== 'undefined'){
for (let i = 1; i<projectList.length; i++){
    if(urlEnd == projectList[i].id){console.log(projectIndex = i)}
}
}