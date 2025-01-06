// reload

window.onresize = function(){ location.reload(); }


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



//(phone)


for (i = 0; i < illusListImagination.length ; i++){
  const illusCanvas = document.createElement("div")
  illusCanvas.setAttribute("onclick","openModal("+i+",1)")
  illusCanvas.className = "imgGallery"
  illusCanvas.id = illusListImagination[i].name

document.getElementsByClassName("galleryPhone")[0].appendChild(illusCanvas)

  const illus = document.createElement("img")
  illus.setAttribute("number",i)
  illus.loading = "lazy"
  illus.src = illusListImagination[i].src
  document.getElementById(illusListImagination[i].name).appendChild(illus)
}

//(computer)

for (i = 0; i < illusListImagination.length ; i++){
  const illusCanvas = document.createElement("div")
  illusCanvas.setAttribute("onclick","openModal("+i+",1)")
  illusCanvas.className = "imgGallery"
  illusCanvas.id = illusListImagination[i].name

  if (i % 2 == 0) {document.getElementsByClassName("imgRight")[0].appendChild(illusCanvas)}
  else{document.getElementsByClassName("imgLeft")[0].appendChild(illusCanvas)}

  const illus = document.createElement("img")
  illus.setAttribute("number",i)
  illus.loading = "lazy"
  illus.src = illusListImagination[i].src
  document.getElementById(illusListImagination[i].name).appendChild(illus)
}


// OBSERVATION



//(phone)


  for (i = 0; i < illusListObservation.length ; i++){
    const illusCanvas = document.createElement("div")
    illusCanvas.setAttribute("onclick","openModal("+i+",0)")
    illusCanvas.className = "imgGallery"
    illusCanvas.id = illusListObservation[i].name
  
  document.getElementsByClassName("galleryPhone")[1].appendChild(illusCanvas)
  
    const illus = document.createElement("img")
    illus.setAttribute("number",i)
    illus.loading = "lazy"
    illus.src = illusListObservation[i].src
    document.getElementById(illusListObservation[i].name).appendChild(illus)
  }
  
  //(computer)
  
  for (i = 0; i < illusListObservation.length ; i++){
    const illusCanvas = document.createElement("div")
    illusCanvas.setAttribute("onclick","openModal("+i+",0)")
    illusCanvas.className = "imgGallery"
    illusCanvas.id = illusListObservation[i].name
  
    if (i % 2 == 0) {document.getElementsByClassName("imgRight")[1].appendChild(illusCanvas)}
    else{document.getElementsByClassName("imgLeft")[1].appendChild(illusCanvas)}
  
    const illus = document.createElement("img")
    illus.setAttribute("number",i)
    illus.loading = "lazy"
    illus.src = illusListObservation[i].src
    document.getElementById(illusListObservation[i].name).appendChild(illus)
  }

// ~~~~~ 


// change display

function displayMode(){
  let sectionNbr = document.getElementsByClassName("galleryComputer")
  for ( i = 0 ; i < sectionNbr.length ; i++){
  if (Mq480.matches){
    document.getElementsByClassName("galleryComputer")[i].style.display = "none"; document.getElementsByClassName("galleryPhone")[i].style.display = "initial"}
  else{
    document.getElementsByClassName("galleryComputer")[i].style.display = "flex"; document.getElementsByClassName("galleryPhone")[i].style.display = "none"}
  }
}
displayMode();
Mq480.addEventListener("change", function() {displayMode();}); 

// hovering
// const imgGallery = document.getElementsByClassName("imgGallery")
// for (i = 0 ; i < imgGallery.length ; i ++){

//   imgGallery[i].getElementsByTagName("img")[0].addEventListener("mousemove", function(e){
//     imgGallery[i].style.backgroundColor = "blue"
//     imgGallery[i].getElementsByTagName("img")[0].style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
//   })
//   imgGallery[i].addEventListener("mouseout", function(e){
//     imgGallery[i].getElementsByTagName("img")[0].style.boxShadow = "initial"
//   })
// }

// section change

sectionChange(0);

function sectionChange(x){
  sectionButtonTitle = document.getElementById("menuBar").getElementsByClassName("animatedContent")
  
  for (i = 0; i < sectionButtonTitle.length; i++){sectionButtonTitle[i].style.opacity = "0.7"; sectionButtons[i].style.borderColor = "rgba(0,0,0,0.7"}
  sectionButtonTitle[x].style.opacity = "1"
  sectionButtons[x].style.borderColor = "black"
  if (y == 1){return}
  let sectionWidth = document.getElementById("illustrations").offsetWidth
  document.getElementById("antiScroll").style.visibility = "visible"
  document.getElementById("main").style.scrollBehavior = "smooth"
  document.getElementById("main").scrollLeft = sectionWidth*x

  setTimeout(()=> {document.getElementById("antiScroll").style.visibility = "hidden"},650)
}




//prototype-sorting
function prototypeSort(){
illusList.sort((a, b) => a.type[0] - b.type[0])
}


//popup img

closeModal();

function openModal(n,x) {



    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModal").scrollTo(0,0); 
    document.getElementById("main").style.maxHeight = "100dvh";
    document.getElementById("main").style.overflowY = "hidden";


    slides.src = illusListLists[x][n].src
    
    imgRatio = slides.naturalHeight / slides.naturalWidth
    windowRatio = window.innerHeight / window.innerWidth

    if(imgRatio >= windowRatio){
      slideContainer.style.width = "100dvw";
      slideContainer.style.height = slideContainer.offsetWidth*imgRatio+"px";
      slideFrame.style.overflowX = "hidden";
      slideFrame.style.overflowY = "scroll";}
    else{
      slideContainer.style.height = "100dvh";
      slideContainer.style.width = slideContainer.offsetHeight/imgRatio+"px";
      slideFrame.style.overflowX = "scroll";
      slideFrame.style.overflowY = "hidden";}


}

slideFrame.addEventListener('wheel', (evt) => {
  imgRatio = slides.naturalHeight / slides.naturalWidth
  windowRatio = window.innerHeight / window.innerWidth
  
  if (imgRatio < windowRatio){
  evt.preventDefault();
  slideFrame.style.scrollBehavior = "initial"
  slideFrame.scrollLeft += (evt.deltaY/4);
  slideFrame.style.scrollBehavior = "smooth"
  }

});


function closeModal() {

  document.getElementById("myModal").style.display = "none";
  document.getElementById("main").style.maxHeight = "auto"; 
  document.getElementById("main").style.overflowY = "scroll";

}




  
