let slideContainer = document.getElementById("slides-container")
let slideDates = imgDatas

console.log(imgDatas[0].title)

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

        //container resize
        let imgRatio = document.getElementById("slide"+0).getElementsByTagName("img")[0].naturalHeight / document.getElementById("slide"+0).getElementsByTagName("img")[0].naturalWidth
        let slideContainerRatio = slideContainer.offsetHeight / slideContainer.offsetWidth
    
        // console.log(slideContainer.offsetHeight, hSlide)
    
        if (imgRatio / slideContainerRatio >= 1) /*img + haute que le container*/{
            document.getElementById("subSlide").style.height = "100%" 
            let hSlide = document.getElementById("subSlide").offsetHeight
            console.log(slideContainer.offsetHeight, hSlide)
            document.getElementById("subSlide").style.width = (1/imgRatio)*hSlide+"px"
        }
        else /*img + large que le container*/{
            document.getElementById("subSlide").style.width = "100%" 
            let wSlide = document.getElementById("subSlide").offsetWidth
            document.getElementById("subSlide").style.height = imgRatio*wSlide+"px"
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
    newSlide.style.display = "flex"
    newSlide.style.alignItems = "center"

    slideContainer.appendChild(newSlide)

    //subcontainer

    const newSubSlide = document.createElement("div")
    newSubSlide.id = "subSlide"+i
    newSubSlide.style.margin = "auto"
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
    // container

    const newSlide = document.createElement("div")
    // newSlide.style.backgroundImage = "url("+imgDatas[i].src+")"
    newSlide.style.scale = imgDatas[0].size
    newSlide.className = "slide"
    newSlide.id = "slide"
    newSlide.style.display = "flex"
    newSlide.style.alignItems = "center"

    slideContainer.appendChild(newSlide)

    //subcontainer

    const newSubSlide = document.createElement("div")
    newSubSlide.id = "subSlide"
    newSubSlide.style.margin = "auto"
    newSubSlide.style.backgroundImage = "url("+imgDatas[0].src+")"
    newSubSlide.style.backgroundSize = "contain"

   document.getElementById("slide").appendChild(newSubSlide)


    //titre

    const newTitle = document.createElement("p")
    newTitle.style.position = "relative"
    newTitle.style.top = "0"
    newTitle.style.padding = "1dvh"
    newTitle.innerHTML = imgDatas[0].title
    document.getElementById("subSlide").appendChild(newTitle)

    sizeCarousel();

}

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