// reload

// window.onresize = function(){
//   if (localStorage.getItem("sectionOpen") !== undefined){
//     sectionChange(localStorage.getItem("sectionOpen"));}
//   else {sectionChange(0)}
// }


// testing

// console.log(document.getElementById("illustrations").offsetWidth)
// setInterval(function(){console.log(document.getElementById("main").scrollLeft)},500  )


// sidebar SPECIAAAL

let sections = document.getElementsByClassName("section")
let sectionButtons = document.getElementById("menuBar").querySelectorAll("#menuBar>div")
for (i = 0; i< sections.length; i++){


sections[i].addEventListener("scroll", function(){

let st =  this.scrollTop;
if (currscroll != Math.ceil(st / 50) * 50){
  lastscroll = currscroll

currscroll = Math.ceil(st / 50) * 50;
// console.log("last : "+lastscroll+", current : "+currscroll)

if (currscroll > lastscroll) {
    Sidebar.style.bottom= "calc(-1*var(--h-sidebar))"} 
else 
    Sidebar.style.bottom= "0"
   }}
  )     
} 

// lists

let illusListObservation = illusList.filter(function test(x){if (x.type.includes(0)){return x}})
let illusListImagination = illusList.filter(function test(x){if (x.type.includes(1)){return x}})
let illusListLists = [illusListObservation,illusListImagination]

let slides = document.getElementById("imgZoom")
let slideContainer =  document.getElementById("modalImg")
let slideFrame = document.getElementById("myModal")

// ~~~~~ IMAGE GENERATION ~~~~~


// IMAGINATION


  imgRatio = slides.naturalHeight / slides.naturalWidth
  windowRatio = window.innerHeight / window.innerWidth

//(phone)


for (i = 0; i < illusListImagination.length ; i++){
  const illusCanvas = document.createElement("div")
  // illusCanvas.setAttribute("onclick","openModal(event)")
  illusCanvas.className = "imgGallery"
  illusCanvas.id = illusListImagination[i].name

document.getElementsByClassName("galleryPhone")[0].appendChild(illusCanvas)

  const illus = document.createElement("img")
  illus.setAttribute("number",i)
  illusCanvas.setAttribute("onclick","imgClick(event);")
  
  illus.loading = "lazy"
  illus.src = illusListImagination[i].src
  illus.style.width = 90*illusListImagination[i].size+"dvw"
  illus.style.paddingBottom = "10dvw"
  if(illusListImagination[i].type.includes("pixelated") == true){illus.style.imageRendering = "pixelated"}
    
  document.getElementById(illusListImagination[i].name).appendChild(illus)
}

//(computer)

for (i = 0; i < illusListImagination.length ; i++){
  const illusCanvas = document.createElement("div")
  // illusCanvas.setAttribute("onclick","openModal(event)")
  illusCanvas.setAttribute("onclick","imgClick(event);")
  illusCanvas.className = "imgGallery"
  illusCanvas.id = illusListImagination[i].name


  if (i % 2 == 0) {document.getElementsByClassName("imgRight")[0].appendChild(illusCanvas)}
  else{document.getElementsByClassName("imgLeft")[0].appendChild(illusCanvas)}


  const illus = document.createElement("img")
  illus.setAttribute("number",i)

  
  illus.loading = "lazy"
  illus.src = illusListImagination[i].src
  illus.style.scale = illusListImagination[i].size

  if(illusListImagination[i].type.includes("pixelated") == true){illus.style.imageRendering = "pixelated";illus.setAttribute("pixelated",1)}
  else{illus.setAttribute("pixelated",0)}
  illus.setAttribute("scale",illusListImagination[i].size)
  document.getElementById(illusListImagination[i].name).appendChild(illus)
}



// ~~~~~ 


// horizontal scroll

let galleryComputer = document.getElementById("illustrations")
console.log(galleryComputer.scrollLeft)

// for (i = 0; i < galleryComputer.length; i++){
// if (!Mq480.matches){
// galleryComputer.addEventListener('wheel', (evt) => {

//   evt.preventDefault();
//   galleryComputer.style.scrollBehavior = "initial"
//   galleryComputer.scrollLeft += (evt.deltaY/4* window.innerWidth/500);

//   galleryComputer.style.scrollBehavior = "smooth"
  

// });
// // }
// }

// change display

function displayMode(){
  let sectionNbr = document.getElementsByClassName("galleryComputer")
  for ( i = 0 ; i < sectionNbr.length ; i++){
  if (Mq480.matches){
    document.getElementsByClassName("galleryComputer")[i].style.display = "none"; document.getElementsByClassName("galleryPhone")[i].style.display = "flex"}
  else{
    document.getElementsByClassName("galleryComputer")[i].style.display = "flex"; document.getElementsByClassName("galleryPhone")[i].style.display = "none"}
  }
}
displayMode();
Mq480.addEventListener("change", function() {displayMode();}); 






//popup img

closeModal();

function openModal(event) {
    const source = event.srcElement


    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModal").scrollTo(0,0); 
    document.getElementById("main").style.maxHeight = "100dvh";
    document.getElementById("main").style.overflowY = "hidden";


    slides.src = source.src
    console.log(source.getAttribute("scale"))
    if(source.getAttribute("pixelated") == 1){slides.style.imageRendering = "pixelated"}
    else{slides.style.imageRendering = "unset"}
    slides.style.scale = source.getAttribute("scale")
    imgRatio = slides.naturalHeight / slides.naturalWidth
    windowRatio = window.innerHeight / window.innerWidth

    // if(imgRatio >= windowRatio){
    //   slideContainer.style.width = "100dvw";
    //   slideContainer.style.height = slideContainer.offsetWidth*imgRatio+"px";
    //   slideFrame.style.overflowX = "hidden";
    //   slideFrame.style.overflowY = "scroll";}
    // else{
    //   slideContainer.style.height = "100dvh";
    //   slideContainer.style.width = slideContainer.offsetHeight/imgRatio+"px";
    //   slideFrame.style.overflowX = "scroll";
    //   slideFrame.style.overflowY = "hidden";}


}


function closeModal() {

  document.getElementById("myModal").style.display = "none";
  document.getElementById("main").style.maxHeight = "auto"; 
  document.getElementById("main").style.overflowY = "scroll";

}




  
