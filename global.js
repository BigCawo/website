let Mq480 = window.matchMedia("(max-width: 480px)")
let Mq1300 = window.matchMedia("(max-width: 1300px)")
let Mq900 = window.matchMedia("(max-width: 900px)")

if (localStorage.getItem("explored") == 1){
    document.body.style.animation = "none"
 }
if(performance.navigation.type == 2){
    location.reload(true);
 }



let prevPage = localStorage.getItem("Page")
// console.log(localStorage.getItem("Page"))
let urlEnd = window.location.href.replace(/\/$/, '').substring(window.location.href.replace(/\/$/, '').lastIndexOf('/') + 1)
if (urlEnd.includes("2024")){urlEnd = "accueil"}
localStorage.setItem("Page",urlEnd)

// console.log(urlEnd);
