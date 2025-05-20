const footer = document.getElementById("footer")
// footer.id ="footer"
footer.style.position = "fixed"
footer.style.bottom = "0"
footer.style.transition = "all ease 0.25s"
footer.style.backgroundColor = "rgba(255,255,255,0.75)"
footer.style.zIndex = "10"

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

