const animatedImage = document.querySelectorAll('[animation]')
let animState = 1


setInterval(function(){imageAnim(animatedImage,animState)},200  )
    

function imageAnim(animatedImage){

    for(let i = 0 ; i < animatedImage.length; i++){
        let animName = animatedImage[i].getAttribute("animation")
        animatedImage[i].style.backgroundImage = "url(/2024_11_18_SiteWebHomeExp/assets/"+animName+"-0"+animState+".png"
    }
    if(animState == 1){animState = 2}
    else animState = 1

}


const hoverableImage =  document.querySelectorAll('[hover]') 
for(let i = 0 ; i < hoverableImage.length; i++){
 
    hoverableImage[i].addEventListener("mousemove",function(e){  
        hoverableImage[i].getElementsByTagName("img")[0].style.transition = "opacity ease 0.25s"     
        hoverableImage[i].getElementsByTagName("img")[0].style.opacity = "0"
    })
    hoverableImage[i].addEventListener("mouseout",function(e){
        hoverableImage[i].getElementsByTagName("img")[0].style.transition = "opacity ease 0.25s"     
        hoverableImage[i].getElementsByTagName("img")[0].style.opacity = "1"
        
    }
    )
}