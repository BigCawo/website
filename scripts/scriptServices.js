let mainContainer = document.getElementById("mainContainer")
let textContainer = document.getElementById("textContainer")
let imgContainer = document.getElementById("imgContainer")
let textNbr = textContainer.getElementsByClassName("text")
bonjour = "0"

// console.log(mainContainer.offsetHeight, textContainer.offsetHeight,textNbr.length)
// console.log(imgContainer.scrollLeft)

textContainer.addEventListener("scroll", function() {
    bonjour = Math.ceil((this.scrollTop - 10) / this.offsetHeight)
    // console.log(imgContainer.scrollLeft, imgContainer.offsetWidth)
    imgContainer.scrollLeft = this.scrollTop * (imgContainer.offsetWidth/this.offsetHeight)

})
