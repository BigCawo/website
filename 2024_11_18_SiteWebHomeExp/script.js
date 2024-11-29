let Mq480 = window.matchMedia("(max-width: 480px)")

function oui(){
    document.getElementById("introText").style.display ="none"
        document.getElementById("genButton").style.display ="none"
    const animatedTitles = document.getElementsByClassName("services")
        for (let i = 0; i < animatedTitles.length; i++) {
            animatedTitles[i].style.display ="flex"
        }
        

}

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

const buttonServices = document.getElementsByClassName("servicesButton")
const services = document.getElementsByClassName("services")
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