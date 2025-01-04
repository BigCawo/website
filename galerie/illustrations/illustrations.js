// testing

// console.log(document.getElementById("illustrations").offsetWidth)
// setInterval(function(){console.log(document.getElementById("main").scrollLeft)},500  )


// sidebar SPECIAAAL

document.getElementById("illustrations").addEventListener("scroll", function(){
let st =  document.getElementById("illustrations").scrollTop;

if (st > lastScrollTop || st > lastScrollTop) {
    Sidebar.style.bottom= "calc(-1*var(--h-sidebar))"} 
else 
    Sidebar.style.bottom= "0"
   lastScrollTop = st <= 0 ? 0 : st;
   })     


// ~~~~~ IMAGE GENERATION ~~~~~


// IMGINATION

illusListImagination = illusList.filter(function test(x){if (x.type.includes(1)){return x}})

//(phone)


for (i = 0; i < illusListImagination.length ; i++){
  const illusCanvas = document.createElement("div")
  illusCanvas.setAttribute("onclick","openModal("+i+")")
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
  illusCanvas.setAttribute("onclick","openModal("+i+")")
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

illusListObservation = illusList.filter(function test(x){if (x.type.includes(0)){return x}})

//(phone)


  for (i = 0; i < illusListObservation.length ; i++){
    const illusCanvas = document.createElement("div")
    illusCanvas.setAttribute("onclick","openModal("+i+")")
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
    illusCanvas.setAttribute("onclick","openModal("+i+")")
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

function sectionChange(x){
  let sectionWidth = document.getElementById("illustrations").offsetWidth
  document.getElementById("main").style.scrollBehavior = "smooth"
  document.getElementById("main").scrollLeft = sectionWidth*x
}




//prototype-sorting
function prototypeSort(){
illusList.sort((a, b) => a.type[0] - b.type[0])
}


//popup img

closeModal();

function openModal(n) {

    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModal").scrollTo(0,0); 
    document.getElementById("main").style.maxHeight = "100dvh";
    document.getElementById("main").style.overflowY = "hidden";

    let slides = document.getElementById("imgZoom")
    slides.src = illusList[n].src
}
  

function closeModal() {

  document.getElementById("myModal").style.display = "none";
  document.getElementById("main").style.maxHeight = "auto"; 
  document.getElementById("main").style.overflowY = "scroll";

}




  
