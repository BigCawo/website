let mainContainer = document.getElementById("mainContainer")
let textContainer = document.getElementById("textContainer")
let imgContainer = document.getElementById("imgContainer")
let textNbr = textContainer.getElementsByClassName("text")
bonjour = "0"

// console.log(mainContainer.offsetHeight, textContainer.offsetHeight,textNbr.length)
// console.log(imgContainer.scrollLeft)

window.addEventListener ("resize", function() {
    imgContainerMovement();
})

textContainer.addEventListener("scroll", function() {
    imgContainerMovement();
})

function imgContainerMovement(){
    bonjour = Math.ceil((textContainer.scrollTop - 10) / textContainer.offsetHeight)
    imgContainer.scrollLeft = textContainer.scrollTop * (imgContainer.offsetWidth/textContainer.offsetHeight)
}