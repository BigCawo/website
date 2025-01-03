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
let lastScrollTop = 0;
let initScrollTop = 50;

window.addEventListener("scroll", function(){


var st =  this.window.scrollY;

if (st > lastScrollTop) {
    Sidebar.style.bottom= "calc(-1*var(--h-sidebar))"} 
   
else 
    Sidebar.style.bottom= "0"
    // else was horizontal scroll
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling 
   })     

// function bwyuu(){
//     document.getElementById("output").innerHTML = scrollTop
// }

document.body.addEventListener("scroll", function(){

sst = document.body.scrollTop

if (sst > initScrollTop) {
    Sidebar.style.bottom= "calc(-1*var(--h-sidebar))"
    } 
    
else 
    Sidebar.style.bottom= "0"
    // else was horizontal scroll
    initScrollTop = sst <= 0 ? 0 : sst; // For Mobile or negative scrolling
})
