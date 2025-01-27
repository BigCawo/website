const mainContainer = document.getElementById("mainContainer")
const textContainer = document.getElementById("textContainer")
const imgContainer = document.getElementById("imgContainer")
const textNbr = textContainer.getElementsByClassName("text")
const carouselTriggers = document.getElementsByClassName("carouselTrigger")
const carouselGroup = document.getElementsByClassName("carouselContainer")[0].getElementsByTagName("div")
bonjour = "0"


// console.log(mainContainer.offsetHeight, textContainer.offsetHeight,textNbr.length)
// console.log(imgContainer.scrollLeft)

window.addEventListener ("resize", function() {
    imgContainerMovement();
})

textContainer.addEventListener("scroll", function() {
    imgContainerMovement();
})

setTimeout(imgContainerMovement(), 500)

function imgContainerMovement(){
    bonjour = Math.ceil((textContainer.scrollTop - 10) / textContainer.offsetHeight)
    imgContainer.scrollLeft = textContainer.scrollTop * (imgContainer.offsetWidth/textContainer.offsetHeight)
}
// console.log(carouselGroup.length,carouselTriggers.length)

// for (i = 0; i < carouselTriggers.length ; i++){
//     carouselTriggers[i].style.backgroundColor = "blue"
//     if (Mq480.matches == false){
  
//         carouselTriggers[i].addEventListener("mousemove",function(){ 

//         for (g = 0; g < carouselTriggers.length ; g ++) {     
//             carouselGroup[g].style.display = "none"      
//         } 
//         console.log(i)
//         })

         
// }
// }
