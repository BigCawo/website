const animatedImage = document.querySelectorAll('[animation]')
let animState = 1

setInterval(function(){imageAnim(animatedImage,animState)},200  )
    
function imageAnim(animatedImage){

    for(let i = 0 ; i < animatedImage.length; i++){
        let animName = animatedImage[i].getAttribute("animation")
        animatedImage[i].style.backgroundImage = "url(/assets/animated/"+animName+"-0"+animState+".png"
    }
    if(animState == 1){animState = 2}
    else animState = 1

}
// const hoverableImage =  document.querySelectorAll('[hover]') 

// for(let i = 0 ; i < hoverableImage.length; i++){
 
//     hoverableImage[i].addEventListener("mousemove",function(e){  
//         hoverableImage[i].getElementsByTagName("img")[0].style.transition = "filter ease 0.25s"     
//         hoverableImage[i].getElementsByTagName("img")[0].style.filter = "grayscale(0)"
//     })
//     hoverableImage[i].addEventListener("mouseout",function(e){
//         hoverableImage[i].getElementsByTagName("img")[0].style.transition = "filter ease 0.25s"     
//         hoverableImage[i].getElementsByTagName("img")[0].style.filter = "grayscale(0.7)"
        
//     }
//     )
// }

//#region random wallpaper
let wallpaperNbr = 3;
let wallpaper = document.getElementById("papierPeint")
if (wallpaper != null){

    let imgSrc = "/assets/animated/homeBackground-0"+(Math.floor(Math.random() * wallpaperNbr)+1)+".png"

    //get wallpaper dimensions
    let image = new Image();
    image.src = imgSrc;
    image.onload = function () {
    let width = image.width
    // console.log(width)
    wallpaper.style.backgroundImage = "url("+imgSrc+")"
    wallpaper.style.backgroundSize = "calc(var(--scaleRatio)*"+50*width/1148+"vmin)"
}


}
//#endregion

//#region animation design objet
const blouc = document.getElementsByClassName("animObjet")
let n = 0
intervalTest = 100

if(window.location.href.includes("designObjet")){
startInterval(intervalTest);
}
function startInterval(intervalTest){
    intervalId = setInterval(function(){animObjet(blouc)},intervalTest)
}
function animObjet(blouc){
    for (let i = 0; i< blouc.length; i++)
    if(n < 12){
        blouc[i].style.backgroundImage = "url(/assets/services/animObjet_"+(n+1)+".png)"
    }
    else{ n = 0 ; blouc[i].style.backgroundImage = "url(/assets/services/animObjet_"+(n+1)+".png)"}


    clearInterval(intervalId)
    if([0,4,8].includes(n)){intervalTest = 750;} else {intervalTest = 120 }
    startInterval(intervalTest)
    n += 1
}
//#endregion