// reload

window.onresize = function(){

  if(Mq480.matches == true){document.getElementById("buttonTypesContainer").style.alignItems = "left"}
  else{document.getElementById("buttonTypesContainer").style.alignItems = "center"}
  sectionChange(activeSection)

}


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
    Sidebar.style.bottom= "calc(-1*var(--h-sidebar))"
    if (buttonTypesContainer != undefined){

      buttonTypesContainer.style.height = "70dvh"
    }

  } 
else {
    Sidebar.style.bottom= "0"
    if (buttonTypesContainer != undefined){

      buttonTypesContainer.style.height = "60dvh"
    }}
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
let buttonTypesContainer = undefined
let activeSection = 0

loadIllustrations();
generateTypesButtons();
checkTypePresence(activeSection);

//#region generation boutons classification

function generateTypesButtons(){
  const genButtonTypesContainer = document.createElement("div")
  genButtonTypesContainer.id = "buttonTypesContainer"
  genButtonTypesContainer.style.position = "absolute"
  genButtonTypesContainer.style.bottom = "0"
  genButtonTypesContainer.style.display = "flex"
  genButtonTypesContainer.style.flexDirection = "column"
  genButtonTypesContainer.style.justifyContent = "space-around"
  if(Mq480.matches){genButtonTypesContainer.style.alignItems = "left"}
  else{genButtonTypesContainer.style.alignItems = "center"}
  genButtonTypesContainer.style.width = "100%"
  genButtonTypesContainer.style.height = "60dvh"
  genButtonTypesContainer.style.transition = "all ease 0.2s"
  document.getElementById("buttonTypeFrame").appendChild(genButtonTypesContainer)

  buttonTypesContainer = document.getElementById("buttonTypesContainer")

  for (let i = 0; i< illusTypes.length;i++){
    const buttonTypes = document.createElement("button")
    buttonTypes.setAttribute("onclick","sortBy('"+illusTypes[i]+"')")
    buttonTypes.innerHTML = illusTypes[i]
    buttonTypes.style.width ="fit-content"   
    buttonTypes.style.padding ="0 3vw 0 3vw"  
    buttonTypes.style.borderRadius ="1vw"  
    buttonTypes.style.fontSize ="150%"
    buttonTypes.style.fontFamily ="Fababrac"
    buttonTypes.style.backgroundColor = "rgba(255,255,255,0.75"
    buttonTypes.style.filter = "unset"
    buttonTypes.className = "buttonType"
    buttonTypes.id = "buttonType"+illusTypes[i]
    buttonTypes.style.height = "fit-content"
    // buttonTypes.style.height = 60/illusTypes.length+"dvh"
    buttonTypesContainer.appendChild(buttonTypes)   
    
  }




}

function checkTypePresence(q){
  //"invert" q
  q = 1-q

  for (let i = 0; i< illusTypes.length-1; i++){
    let illusSectioncheck = illusList.filter(function test(z){if (z.type.includes(q)){return z}})
    let illusCheck = illusSectioncheck.filter(function test(z){if (z.type.includes(illusTypes[i])){return z}})
    // console.log(illusTypes[i],illusCheck.length)
    if (illusCheck.length == 0){
      document.getElementsByClassName("buttonType")[i].style.opacity = 0.5
      document.getElementsByClassName("buttonType")[i].disabled = true
    }
    else {
      document.getElementsByClassName("buttonType")[i].style.opacity = 1
      document.getElementsByClassName("buttonType")[i].disabled = false
    }
  }
}


//#endregion

// ~~~~~ IMAGE GENERATION ~~~~~


// IMAGINATION

function loadIllustrations(){
//(phone)


for (i = 0; i < illusListImagination.length ; i++){
  const illusCanvas = document.createElement("div")
  illusCanvas.setAttribute("onclick","openModal(event);")
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
  illusCanvas.setAttribute("onclick","openModal(event);")
  illusCanvas.className = "imgGallery"
  illusCanvas.id = illusListImagination[i].name
  

  document.getElementsByClassName("galleryPhone")[0].appendChild(illusCanvas)

  if (i % 2 == 0) {document.getElementsByClassName("imgRight")[0].appendChild(illusCanvas)}
  else{document.getElementsByClassName("imgLeft")[0].appendChild(illusCanvas)}

  const illus = document.createElement("img")
  illus.setAttribute("number",i)
  illus.setAttribute("onclick","openModal(event);")
  illus.loading = "lazy"
  illus.src = illusListImagination[i].src
  
  document.getElementById(illusListImagination[i].name).appendChild(illus)
}


// OBSERVATION



//(phone)


  for (i = 0; i < illusListObservation.length ; i++){
    const illusCanvas = document.createElement("div")
    illusCanvas.setAttribute("onclick","openModal(event);")
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
    illusCanvas.setAttribute("onclick","openModal(event);")
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

}

function clearIllustrations(){
  const elements = document.getElementsByClassName("imgGallery");
  while(elements.length > 0){

      elements[0].parentNode.removeChild(elements[0]);}


}
// ~~~~~ 

// sort by

function sortBy(x){

  clearIllustrations();
  if (x == "X"){
    illusListObservation = illusList.filter(function test(x){if (x.type.includes(0)){return x}})
    illusListImagination = illusList.filter(function test(x){if (x.type.includes(1)){return x}})
    for (i = 0; i < illusTypes.length; i++){
      document.getElementsByClassName("buttonType")[i].style.fontWeight = "unset"
    }
    
  }
  else{
    newIllusList = illusList.filter(function test(y){if (y.type.includes(x)){return y}})
    illusListObservation = newIllusList.filter(function test(x){if (x.type.includes(0)){return x}})
    illusListImagination = newIllusList.filter(function test(x){if (x.type.includes(1)){return x}})

      for (i = 0; i < illusTypes.length; i++){
        document.getElementsByClassName("buttonType")[i].style.fontWeight = "unset"
      }
    
    document.getElementById("buttonType"+x).style.fontWeight = "900"
    document.getElementsByClassName("buttonType")[illusTypes.length-1].style.fontWeight = "900"
  }
  loadIllustrations();
}

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

sectionChange(activeSection);

function sectionChange(x){
  
  
  sectionButtonTitle = document.getElementById("menuBar").getElementsByClassName("animatedContent")
  
  for (i = 0; i < sectionButtonTitle.length; i++){sectionButtonTitle[i].style.opacity = "0.5"; sectionButtons[i].style.borderColor = "rgba(0,0,0,0.7"}
  sectionButtonTitle[x].style.opacity = "1"
  sectionButtons[x].style.borderColor = "black"

  let sectionWidth = document.getElementById("illustrations").offsetWidth
  document.getElementById("antiScroll").style.visibility = "visible"
  document.getElementById("main").style.scrollBehavior = "smooth"
  document.getElementById("main").scrollLeft = sectionWidth*x

  localStorage.setItem("sectionOpen", x)
  
  checkTypePresence(x);
  setTimeout(()=> {document.getElementById("antiScroll").style.visibility = "hidden"},650)

}




//prototype-sorting
function prototypeSort(){
illusList.sort((a, b) => a.type[0] - b.type[0])
}


//popup img

closeModal();

function openModal(event) {
    const source = event.srcElement


    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModal").scrollTo(0,0); 
    document.getElementById("main").style.maxHeight = "100dvh";
    document.getElementById("main").style.overflowY = "hidden";

    
    slides.src = source.src
    
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




  
