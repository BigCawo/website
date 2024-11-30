let Mq480 = window.matchMedia("(max-width: 480px)")

function oui(){

    
    document.getElementById("introText").style.opacity ="0"

    setTimeout(()=> {        
        document.getElementById("introText").style.display ="none"
        document.getElementById("genButton").style.display ="none" 

        const animatedTitles = document.getElementsByClassName("services")
        for (let i = 0; i < animatedTitles.length; i++) {
            animatedTitles[i].style.display ="flex"
            animatedTitles[i].style.opacity ="1"
        }

        const bottomTitles = document.getElementById("footer").getElementsByTagName("div")
        for (let i = 0; i < bottomTitles.length; i++) {
            bottomTitles[i].style.display ="flex"
            bottomTitles[i].style.opacity ="1"
        } 
    },500);
    


}

// boutons principaux
function serviceSelected(x){
        let arrayServices = ["designObjet","designMultimedia","Illustration"]
        if(Mq480.matches){
            if(document.getElementById(arrayServices[x]).getElementsByTagName("div")[2].offsetWidth > 0){goToService();}
        }
        else
        goToService();
         
    
}

function goToService(x){
    document.getElementById("principal").style.transition ="all ease 0.75s"
    document.getElementById("principal").style.opacity ="0"
    document.getElementById("principal").style.bottom ="90dvh"
    setTimeout(()=> {        
        window.location.href = "../";
    },750);
}

// boutons footer
function bottomSelected(x){
    let arrayBottom = ["aPropos","galerie"]
    if(Mq480.matches){
        if(document.getElementById(arrayBottom[x]).getElementsByTagName("div")[1].offsetWidth > 0){goToBottom(x);}
    }
    else
    goToBottom();
     

}

function goToBottom(x){
    document.getElementById("principal").style.transition ="all ease 0.75s"
    document.getElementById("principal").style.opacity ="0"
    document.getElementById("principal").style.bottom ="90dvh"
    setTimeout(()=> {        
        window.location.href = "../";
    },750);
}

const buttonServices = document.getElementsByClassName("servicesButton")
const services = document.getElementsByClassName("services")
const bottom = document.getElementsByClassName("bottomTitle")
const buttonBottom = document.getElementsByClassName("bottomButton")
const animatedImage = document.getElementsByClassName("animated")


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

for (let i = 0; i<buttonBottom.length; i++){
    buttonBottom[i].addEventListener("mousemove",function(e){ 
    bottom[i].style.transition = "all ease 0.25"
    bottom[i].style.width = "calc(var(--scaleRatio)*17vmin)"
    })

    buttonBottom[i].addEventListener("mouseout",function(e){   
    bottom[i].style.width = "0"
    
    // setTimeout(()=> {       
    //     null 
    //     services[i].getElementsByTagName("div")[0].style.display = "initial";
    //     services[i].getElementsByTagName("div")[1].style.width = "0";
    //     services[i].getElementsByTagName("div")[3].style.width = "0" 
    // },240);
    }
    )
}