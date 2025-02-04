//#region reload

window.onresize = function(){
    if (localStorage.getItem("sectionOpen") !== undefined){
      sectionChange(localStorage.getItem("sectionOpen"));}
    else {sectionChange(0)}
  }

let sections = document.getElementsByClassName("section")
let sectionButtons = document.getElementById("menuBar").querySelectorAll("#menuBar > div")
for (i = 0; i< sections.length; i++){


sections[i].addEventListener("scroll", function(){

let st =  this.scrollTop;
if (currscroll != Math.ceil(st / 50) * 50){
  lastscroll = currscroll

currscroll = Math.ceil(st / 50) * 50;

if (currscroll > lastscroll) {
    Sidebar.style.bottom= "calc(-1*var(--h-sidebar))"} 
else 
    Sidebar.style.bottom= "0"
   }}
  )     
} 

//#endregion

//#region section change

sectionChange(0,1);

function sectionChange(x,y){
  
  sectionButtonTitle = document.getElementById("menuBar").getElementsByClassName("animatedContent")
  
  for (i = 0; i < sectionButtonTitle.length; i++){sectionButtonTitle[i].style.opacity = "0.7"; sectionButtons[i].style.borderColor = "rgba(0,0,0,0.7"}
  sectionButtonTitle[x].style.opacity = "1"
  sectionButtons[x].style.borderColor = "black"
  if(y !== 1){
  let sectionWidth = document.getElementById("illustrations").offsetWidth
  document.getElementById("antiScroll").style.visibility = "visible"
  document.getElementById("main").style.scrollBehavior = "smooth"
  document.getElementById("main").scrollLeft = sectionWidth*x

  localStorage.setItem("sectionOpen", x)

  setTimeout(()=> {document.getElementById("antiScroll").style.visibility = "hidden"},650)
}
}

//#endregion