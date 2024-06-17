
// carnet A4 10-2023

var SliderDetector = document.getElementById("myRangeE");

let wE = 1920
let hE = 1488
let nbr = 50;



SliderDetector.oninput = function() {
    p = this.value
    if (n<p){
            if(p<nbr+1)
            carouselContainer.style.transform="translateX("+(-p+1)*(wE)+"px)";
            // carouselContainer.style.transform="translateY("+(-p+1)*(hE)+"px)";
            carouselContainer.style.transition="all 0.5s ease";
            affichermasquer();
            }
    else {
        if(p>0)
            
            carouselContainer.style.transform="translateX("+(-p+1)*(wE)+"px)";
            // carouselContainer.style.transform="translateY("+(-p+1)*(hE)+"px)";

            carouselContainer.style.transition="all 0.5s ease";
            affichermasquer();
            
    }
    n =this.value

}

document.body.onload=function(){



    resize();
    SliderDetector.value = 1
    p = SliderDetector.value;
    n = SliderDetector.value;


    carouselContainer = document.getElementById("carouselContainerE")
    lE = document.getElementById("lE")
    rE = document.getElementById("rE")
    carouselContainer.style.width = (wE*nbr)+"px";
    for( i = 1 ; i <= nbr; i++){
        div = document.createElement("div");
        div.className="carouselPhotoE"
        div.style.backgroundImage="url('../../assets/carnets/2024_05_A5/"+(i-1)+".jpg')";
        carouselContainer.appendChild(div);
    }
    affichermasquer();
    }

function resize(){

carouselScale = document.getElementById("carouselE")
carnetMargin = document.getElementById("carnetContainerE")
mainW = document.getElementById("main2").offsetWidth
sh = window.innerHeight
sw = window.innerWidth

t = (mainW - ((wE/hE)*0.8*sh))/2






if (t>=0){

    factor = sh/hE
    carouselScale.style.transform = "scale("+0.8*factor+")"
    carnetMargin.style.marginLeft = t+"px"

}
/*
else{

    factor = mainW/wE
    carouselScale.style.transform = "scale("+factor+")"
    carnetMargin.style.marginLeft = 0
}
*/
else{

    factor = mainW/wE
    carouselScale.style.transform = "scale("+factor+")"
    
    carnetMargin.style.marginLeft = 0
}







}

resize();

window.onresize=function(){
    
    resize();

}




    rE.onclick=function(){
        if(p<nbr+1)
            p++;
            SliderDetector.value = p
        carouselContainer.style.transform="translate("+(-p+1)*(wE)+"px)";
        carouselContainer.style.transition="all 0.5s ease";

       affichermasquer();

    }

    lE.onclick=function(){
        if(p>1)
            p--;
            SliderDetector.value = p
            
        carouselContainer.style.transform="translate("+(-p+1)*(wE)+"px)";
        carouselContainer.style.transition="all 0.5s ease";
        affichermasquer();
    }


  function affichermasquer(){
        if(p>=nbr)
            rE.style.visibility = "hidden";
        else
            rE.style.visibility = "visible";

        if(p<=1)
            lE.style.visibility = "hidden";
        else
            lE.style.visibility = "visible";

    }
    