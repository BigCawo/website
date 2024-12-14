const animatedImage = document.getElementsByClassName("animated")
let animState = 1


setInterval(function(){imageAnim(animatedImage,animState)},200)
    

function imageAnim(animatedImage){

    for(let i = 0 ; i < animatedImage.length; i++){
        let animName = animatedImage[i].getAttribute("animation")
        animatedImage[i].style.backgroundImage = "url(/2024_11_18_SiteWebHomeExp/assets/"+animName+"-0"+animState+".png"
    }
    if(animState == 1){animState = 2}
    else animState = 1

}