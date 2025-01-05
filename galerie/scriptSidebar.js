const footer = document.getElementById("footer")
// footer.id ="footer"
footer.style.position = "fixed"
footer.style.bottom = "0"
footer.style.transition = "all ease 0.25s"
footer.style.backgroundColor = "rgba(255,255,255,0.75)"
footer.style.zIndex = "10"

// document.getElementsByTagName("body")[0].appendChild(footer)

// const backButton = document.createElement("div")
// // backButton.setAttribute('buttonBottom',"aPropos")
// backButton.id = "aPropos"

// document.getElementById("footer").appendChild(backButton)

// const accueilButton = document.createElement("div")
// // backButton.setAttribute('buttonBottom',"aPropos")
// accueilButton.id = "galerie"

// document.getElementById("footer").appendChild(accueilButton)

// const backButton0 = document.createElement("button")
// backButton0.className = "bottomButton"
// backButton0.setAttribute('onclick',"serviceSelected(9)")

// const backButton1 = document.createElement("div")
// backButton1.className = "animatedContent"
// backButton1.setAttribute('animation',"cone")

// const backButton2 = document.createElement("div")
// backButton2.style.display = "none"

// document.getElementById("aPropos").appendChild(backButton0)
// document.getElementById("aPropos").appendChild(backButton1)
// document.getElementById("aPropos").appendChild(backButton2)

{/* 
<div id="footer" style="position: fixed; bottom: 0; transition: all ease 0.25s; background-color: white; z-index: 10;">
        
<div buttonBottom=  "aPropos" id="aPropos">
    <button class="bottomButton" onclick="serviceSelected(9)"></button>

    <div animation="cone" class="animatedContent"></div>
    <div style="display: none;"></div>
    <div style="visibility: hidden;" animation="title-apropos" class="bottomTitle animatedTitle"></div>
</div>
<div buttonBottom="galerie" id="galerie">
    <button  class="bottomButton"> <a href="/aPropos/" style="display: inline-block; width: 100%; height: 100%;"></a></button>
    <div animation="apropos" class="cone animatedContent"></div>
    <div style="display: none;"></div>
    <div animation="title-apropos" class="bottomTitle animatedTitle"></div>
</div>
</div> */}
// ~~~~ Sidebar ~~~~ //
let Sidebar = document.getElementById("footer")
let currscroll = 0
let lastscroll = 0

window.addEventListener("scroll", function(){

let st =  this.window.scrollY;

if (currscroll != Math.ceil(st / 50) * 50){
    lastscroll = currscroll
  
  currscroll = Math.ceil(st / 50) * 50;
  console.log("last : "+lastscroll+", current : "+currscroll)
  
  if (currscroll > lastscroll) {
      Sidebar.style.bottom= "calc(-1*var(--h-sidebar))"} 
  else 
      Sidebar.style.bottom= "0"
     }}
    )     
// function bwyuu(){
//     document.getElementById("output").innerHTML = scrollTop
// }

document.body.addEventListener("scroll", function(){

sst = document.body.scrollTop

if (currscroll != Math.ceil(sst / 50) * 50){
    lastscroll = currscroll
  
  currscroll = Math.ceil(sst / 50) * 50;
  console.log("last : "+lastscroll+", current : "+currscroll)
  
  if (currscroll > lastscroll) {
      Sidebar.style.bottom= "calc(-1*var(--h-sidebar))"} 
  else 
      Sidebar.style.bottom= "0"
     }}
    )     

