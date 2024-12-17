let arrayPages = ["designObjet","designMultimedia","Illustration","aPropos","galerie","galerieObjets","galerieMultimedia","galerieIllustration","accueil","return"]
let currPage = ""
let currPageLength = ""
let buttonClicked = ""

// home buttons

const buttonServices = document.getElementsByClassName("servicesButton")
const services = document.getElementsByClassName("services")

for (let i = 0; i<buttonServices.length; i++){
buttonServices[i].addEventListener("mousemove",function(e){ 
services[i].style.transition = "all ease 0.25"
services[i].style.width = "calc(var(--scaleRatio)*54vmin)"
services[i].getElementsByTagName("div")[0].style.display = "none"
services[i].getElementsByTagName("div")[1].style.width = "calc(var(--scaleRatio)*7vmin)"
services[i].getElementsByTagName("div")[2].style.width = "calc(var(--scaleRatio)*40vmin)"
services[i].getElementsByTagName("div")[3].style.width = "calc(var(--scaleRatio)*7vmin)" 
})

buttonServices[i].addEventListener("mouseout",function(e){
    
services[i].style.width = "calc(var(--scaleRatio)*10vmin)"
services[i].getElementsByTagName("div")[2].style.width = "0"

setTimeout(()=> {        
    services[i].getElementsByTagName("div")[0].style.display = "initial";
    services[i].getElementsByTagName("div")[1].style.width = "0";
    services[i].getElementsByTagName("div")[3].style.width = "0" 
},240);
}
)
}

// bottom buttons

const bottom = document.getElementById("footer").getElementsByClassName("animatedTitle")
// const bottom = document.getElementById("footer").querySelectorAll('[buttonBottom]')
const buttonBottom = document.getElementsByClassName("bottomButton")

for (let i = 0; i<buttonBottom.length; i++){
    buttonBottom[i].addEventListener("mousemove",function(e){ 
    if(Mq480.matches == false){
    bottom[i].style.transition = "all ease 0.35s"
    bottom[i].style.width = "calc(var(--scaleRatio)*23vmin)"}
    })
    
    buttonBottom[i].addEventListener("mouseout",function(e){  
        if(Mq480.matches == false){ 
    bottom[i].style.width = "0"}
    }
    )
}


// page change

function serviceSelected(x){
        
    if(Mq480.matches){
        // document.getElementById(arrayPages[x]).getElementsByTagName("div")[2].offsetWidth > 0
        if(currPage == arrayPages[x] ||  ["accueil","aPropos","galerieObjets","galerieMultimedia","galerieIllustration","galerie","return"].includes(arrayPages[x])){goToService(x);} 
        currPage = arrayPages[x]
    }
    else goToService(x);
     
}

function goToService(x){
    // localStorage.setItem("Page", arrayPages[x])
    setTimeout(()=> {      

        for(let i= 0; i < arrayPages.length; i++){
           if (window.location.href.includes(arrayPages[i])){
            currPageLength = arrayPages[i].length+1}
        }
        

        if(arrayPages[x].includes("galerie")){
                window.location.href = window.location.href.slice(0,-currPageLength)+"galerie";}

        else{
            if(x == 8){
                window.location.href = window.location.href.slice(0,-currPageLength);}
            else{
                if(x == 9){
                    history.back();
                }
                else{
                    window.location.href = window.location.href.slice(0,-currPageLength)+arrayPages[x];}
                }
        }
    },250);

    }
