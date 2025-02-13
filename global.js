let Mq480 = window.matchMedia("(max-width: 480px)")
let Mq1300 = window.matchMedia("(max-width: 1300px)")
let Mq900 = window.matchMedia("(max-width: 900px)")

let arrayServices = ["designObjet","designMultimedia","Illustration","mediationGraphique","home"]

if (sessionStorage.getItem("explored") == 1){
    document.body.style.animation = "none"
 }
if(performance.navigation.type == 2){
    location.reload(true);
 }


//#region historique des pages

let prevPage = sessionStorage.getItem("Page")
// if (typeof sessionStorage.getItem("ServicePage") == undefined){sessionStorage.setItem("ServicePage","")}
let prevServicePage = sessionStorage.getItem("ServicePage")
// console.log(sessionStorage.getItem("Page"))
let urlEnd = window.location.href.replace(/\/$/, '').substring(window.location.href.replace(/\/$/, '').lastIndexOf('/') + 1)

if (urlEnd.includes("2024")){urlEnd = "accueil"}

sessionStorage.setItem("Page",urlEnd)


for (let i = 0; i < arrayServices.length ; i++){
    if(urlEnd.includes(arrayServices[i])){
        console.log(i)
        sessionStorage.setItem("ServicePage",arrayServices[i]);
        prevServicePage = sessionStorage.getItem("ServicePage")

 
    }
}

console.log("previous service page : "+ prevServicePage)
console.log("url end : "+ urlEnd )

//#endregion

document.title = "Eliot Bernaud - Design Produit / Multimedia / Illustration"


// get Index of project
let projectIndex = 0
if(typeof projectList !== 'undefined'){
for (let i = 1; i<projectList.length; i++){
    if(urlEnd == projectList[i].id){console.log(projectIndex = i)}
}
}

//#region images en plein écran !

const clickableImgs = document.getElementsByTagName("img")

for (let i = 0; i< clickableImgs.length; i++){
    clickableImgs[i].setAttribute("onclick","imgClick(event);")
}


function imgClick(event){
    const source = event.srcElement;
    console.log(source.naturalWidth);

    const imgContainer = document.createElement("div")
    imgContainer.id = "imgViewer"
    if (source.naturalWidth < 200 ){imgContainer.style.imageRendering = "pixelated"}
    else{imgContainer.style.imageRendering = "unset"}
    imgContainer.style.position = "fixed"
    imgContainer.style.zIndex = "500"
    imgContainer.style.top = "0"
    imgContainer.style.width = "100%"
    imgContainer.style.height = "100%"
    imgContainer.style.backgroundColor = "rgba(0,0,0,0.5)"
    if(source.nodeName == "DIV"){
        url = document.defaultView.getComputedStyle(source).backgroundImage
        // style = source.currentStyle
        imgContainer.style.backgroundImage = url
    }
    else{
        imgContainer.style.backgroundImage = "url("+ source.src +")"
    }
    imgContainer.style.backgroundSize = "contain"
    imgContainer.style.backgroundPosition = "center"
    imgContainer.style.backgroundRepeat = "no-repeat"
    imgContainer.style.scale = "0"
    imgContainer.style.transition = "scale ease 0.2s"
    imgContainer.setAttribute("onclick","imgDismiss(event);")

    document.body.appendChild(imgContainer);
    document.getElementById("imgViewer").style.scale = "1"
    console.log(source)
    console.log(document.getElementById("imgViewer"))
}

function imgDismiss(event){
    const source = event.srcElement;
    console.log(source);
    source.remove()
}
//#endregion