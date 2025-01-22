let slideContainer = document.getElementById("slides-container")
let slideDates = imgDatas


loadCaroussel();

sizeCarousel();



function sizeCarousel(){
    for (i = 0; i< imgDatas.length ; i++){

        let imgRatio = document.getElementById("slide"+i).getElementsByTagName("img")[0].naturalHeight / document.getElementById("slide"+i).getElementsByTagName("img")[0].naturalWidth
        let slideContainerRatio = slideContainer.offsetHeight / slideContainer.offsetWidth
    
        // console.log(slideContainer.offsetHeight, hSlide)
    
        if (imgRatio / slideContainerRatio >= 1) /*img + haute que le container*/{
            document.getElementById("subSlide"+i).style.height = "100%" 
            let hSlide = document.getElementById("subSlide"+i).offsetHeight
            console.log(slideContainer.offsetHeight, hSlide)
            document.getElementById("subSlide"+i).style.width = (1/imgRatio)*hSlide+"px"
        }
        else /*img + large que le container*/{
            document.getElementById("subSlide"+i).style.width = "100%" 
            let wSlide = document.getElementById("subSlide"+i).offsetWidth
            document.getElementById("subSlide"+i).style.height = imgRatio*wSlide+"px"
        }
    

    }

}

window.addEventListener("resize", function(){
    sizeCarousel();
})

function loadCaroussel(){

for (i = 0; i< imgDatas.length ; i++){

    // container

    const newSlide = document.createElement("div")
    // newSlide.style.backgroundImage = "url("+imgDatas[i].src+")"
    newSlide.style.scale = imgDatas[i].size
    newSlide.className = "slide"
    newSlide.id = "slide"+i
    newSlide.style. height = "100%"
    newSlide.style.display = "flex"
    newSlide.style.alignItems = "center"

    slideContainer.appendChild(newSlide)

    //subcontainer

    const newSubSlide = document.createElement("div")
    newSubSlide.id = "subSlide"+i
    newSubSlide.style.margin = "auto"
    newSubSlide.style. height = "100%"
    newSubSlide.style.backgroundImage = "url("+imgDatas[i].src+")"
    newSubSlide.style.backgroundSize = "contain"

   document.getElementById("slide"+i).appendChild(newSubSlide)

    //image

    const newImg = document.createElement("img")
    newImg.src = imgDatas[i].src
    newImg.style.height = "100%"
    
    newImg.style.display = "none"
    newImg.style.margin = "auto"

    document.getElementById("subSlide"+i).appendChild(newImg)

    //titre

    const newTitle = document.createElement("p")
    newTitle.style.position = "relative"
    newTitle.style.top = "0"
    newTitle.style.padding = "1dvh"
    if (imgDatas[i].titleColor == 1){newTitle.style.color = "white"}
    else {}
    newTitle.innerHTML = imgDatas[i].title
    document.getElementById("subSlide"+i).appendChild(newTitle)

}


    sizeCarousel();

}

const slideLength = imgDatas.length
const slide = document.querySelector(".slide")
let behhh = document.getElementsByClassName("slide")



let n = 0
let interval = intervalBase*imgDatas[0].time
slideContainer.scrollLeft = 0

startInterval(interval);

function startInterval(interval){
    intervalId = setInterval(function(){animObjet()},interval)
}


function animObjet(){
    
    slideWidth = slide.clientWidth
    sliderWidth = slideContainer.clientWidth

    



    if(n >= slideLength-1){
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
        document.getElementById("subSlide"+(n+1)).style.backgroundImage = "url("+imgDatas[n+1].src+")"
        behhh[n+1].style.opacity = "1"
        slideContainer.scrollLeft += slideWidth; 
        
        
        // slideContainer.scrollLeft = (sliderWidth/slideLength)*n; 
        n += 1}
    
    
    


    clearInterval(intervalId)
    if([slideLength-1,0].includes(n)){interval = (intervalBase*imgDatas[0].time)/2;} 
    else {interval = intervalBase*imgDatas[n].time}
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