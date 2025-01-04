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
const blouc = document.getElementsByClassName("animService")
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