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
    if (Mq480.matches){
        if (x=0){}
        if (x=1){}
        if (x=2){}
        null;
        }
        else
        window.location.href = "../"; 
    
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