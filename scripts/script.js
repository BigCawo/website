let slideContainer = document.getElementById("slides-container")
let slideDates = imgDatas

console.log(imgDatas[0].title)

for (i = 0; i< imgDatas.length ; i++){
    const newSlide = document.createElement("div")
    newSlide.style.backgroundImage = "url("+imgDatas[i].src+")"
    newSlide.style.scale = imgDatas[i].size
    newSlide.className = "slide"
    newSlide.id = "slide"+i
    slideContainer.appendChild(newSlide)

    // const newTitle = document.createElement("p")
    // newTitle.style.position = "relative"
    // newTitle.style.padding = "1dvh"
    // newTitle.innerHTML = imgDatas[i].title
    // document.getElementById("slide"+i).appendChild(newTitle)

}
const newSlide = document.createElement("div")
newSlide.style.backgroundImage = "url("+imgDatas[0].src+")"
newSlide.className = "slide"
slideContainer.appendChild(newSlide)



const slideLength = imgDatas.length
const slide = document.querySelector(".slide")
let behhh = document.getElementsByClassName("slide")


let interval = intervalBase
let n = 0
slideContainer.scrollLeft = 0

startInterval(interval);

function startInterval(interval){
    intervalId = setInterval(function(){animObjet()},interval)
}


function animObjet(){
    
    slideWidth = slide.clientWidth
    sliderWidth = slideContainer.clientWidth

    



    if(n >= slideLength){
        for (i = 0; i< behhh.length; i++){behhh[i].style.opacity = "0"}
        
        slideContainer.style.scrollBehavior = "initial"
        slideContainer.scrollLeft = 0
        slideContainer.style.scrollBehavior = "smooth"
        behhh[0].style.transition = "none"
        behhh[0].style.opacity = "1"

        n = 0

    }
    else{
        for (i = 0; i< behhh.length; i++){behhh[i].style.opacity = "0"}
        behhh[0].style.transition = "opacity ease 0.2s"
        behhh[n+1].style.opacity = "1"
        slideContainer.scrollLeft += slideWidth; 
        
        
        // slideContainer.scrollLeft = (sliderWidth/slideLength)*n; 
        n += 1}
    
    
    


    clearInterval(intervalId)
    if([slideLength,0].includes(n)){interval = intervalBase/2;} else {interval = intervalBase}
    startInterval(interval)
    
    
}

slideContainer.addEventListener("mousedown", function(){
    clearInterval(intervalId);
})

slideContainer.addEventListener("mouseup", function(){
    startInterval(interval);
})

slideContainer.addEventListener("touchstart", function(){
    clearInterval(intervalId);
})

slideContainer.addEventListener("touchend", function(){
    startInterval(interval);
})