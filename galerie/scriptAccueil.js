// Variables
var root = document.documentElement;
var style = getComputedStyle(root);
let projectValue = -1;
let center = document.getElementById("center");
let spawnState = -1;
let w = projectValue
let descContainer = document.getElementById("projectInformations")
let y = 0
let glowState = -1
let glowEnabled = sessionStorage.getItem("glowEnabled")

glowCheck(glowEnabled);




console.log(glowEnabled)
let intervalGlow = undefined

projectList.sort((a, b) => a.offset[0] - b.offset[0])


// Navigation Bar //

function shutDownBaaaa() {
    descSpawn(0);

    let aa = buttonValue = document.getElementById("buttonIllustration").value;
    let bb = buttonValue = document.getElementById("buttonObjet").value;
    let cc = buttonValue = document.getElementById("buttonMediation").value;
    let dd = buttonValue = document.getElementById("buttonMultimedia").value; 

    if ( aa == "on" ){
        y = "illustration"
        z = "buttonIllustration"


    }

    if ( bb == "on"){
        y = "objet"
        z = "buttonObjet"

    }

    if ( cc == "on"){
        y = "mediation"
        z = "buttonMediation"
        
    }
   
    if ( dd == "on"){
        y = "multimedia"
        z = "buttonMultimedia"
        
    }

    document.getElementById(z).value = "off"


    document.getElementById(z).style.opacity = 1

    
    const reset = document.getElementsByClassName("button");
    for (let i = 0; i < reset.length; i++) {
        reset[i].style.opacity = 1;

    }

    const resett = document.getElementsByClassName("buttonReset");            
    for (let i = 0; i < resett.length; i++) {
        resett[i].value = "off"
        resett[i].style.opacity = 0.4
    }

    const icons = document.getElementsByClassName("project");
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.opacity = 1;
        icons[i].style.zIndex = 5;
        
    }
    //descriptions
    /**/


    const resetDesc = document.getElementsByClassName("desc");
    
    for (let i = 0; i < resetDesc.length; i++) {
        resetDesc[i].style.opacity = "block"
        resetDesc[i].style.opacity = "0%"
    } 


    for (let i = 0; i < resetDesc.length; i++) {
        resetDesc[i].style.maxHeight = "0"
    }


    
    //descriptions
}

function projectSort(x) {

    descSpawn(0);
    
    


    if ( x == 0){
        y = "illustration"
        z = "buttonIllustration"
        a = "descIllustration"
        buttonValue = document.getElementById("buttonIllustration").value

    }

    if ( x == 1){
        y = "objet"
        z = "buttonObjet"
        a = "descObjet"
        buttonValue = document.getElementById("buttonObjet").value
    }

    if ( x == 2){
        y = "mediation"
        z = "buttonMediation"
        a = "descMediation"
        buttonValue = document.getElementById("buttonMediation").value
    }
    
    if ( x == 3){
        y = "multimedia"
        z = "buttonMultimedia"
        a = "descMultimedia"
        buttonValue = document.getElementById("buttonMultimedia").value
    }
    

        if (buttonValue == "off") {
            
            const reset = document.getElementsByClassName("button");       
            for (let i = 0; i < reset.length; i++) {
                reset[i].value = "off"
                reset[i].style.opacity = 0.4
            }

                        
            const resett = document.getElementsByClassName("buttonReset");            
            for (let i = 0; i < resett.length; i++) {
                resett[i].value = "off"
                resett[i].style.opacity = 1
            }


            document.getElementById(z).value = "on"
            document.getElementById(z).style.opacity = 1

                // document.getElementById("categories").style.height = "calc( var(--h-sidebar) * 1.5 )"
            const icons = document.getElementsByClassName("project");
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.opacity = 0.4;
                // icons[i].style.zIndex = 51;
            }
            //descriptions
            /**/
            // const resetDesc = document.getElementsByClassName("desc");

            // for (let i = 0; i < resetDesc.length; i++) {
            //     resetDesc[i].style.opacity = 0.4
            //     resetDesc[i].style.opacity = "100%"

                
            // }
            // document.getElementById(a).style.opacity = "block"
            
            // document.getElementById(a).style.maxHeight = "calc( 80vh - var(--h-sidebar) )"
            

            // //descriptions


            const selection = document.getElementsByClassName(y);
            for (let i = 0; i < selection.length; i++) {
                selection[i].style.opacity = 1;
                // selection[i].style.zIndex = 5;
            }       
        } 

        if (buttonValue == "on") {



            document.getElementById(z).value = "off"

            document.getElementById(z).style.opacity = 1
            // document.getElementById("categories").style.height = "var(--h-sidebar)"

            

            const reset = document.getElementsByClassName("button");
            for (let i = 0; i < reset.length; i++) {
                reset[i].style.opacity = 1;

            }

            const resett = document.getElementsByClassName("buttonReset");            
            for (let i = 0; i < resett.length; i++) {
                resett[i].value = "off"
                resett[i].style.opacity = 0.4
            }
            
            const icons = document.getElementsByClassName("project");
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.opacity = 1;
                // icons[i].style.zIndex = 5;
                
            }
            //descriptions
            /**/


            // const resetDesc = document.getElementsByClassName("desc");
            
            // for (let i = 0; i < resetDesc.length; i++) {
            //     resetDesc[i].style.opacity = "block"
            //     resetDesc[i].style.opacity = "0%"
            // } 



            // document.getElementById(a).style.opacity = "100%"

            
            //descriptions

        
        }
    



}

// function navBar() {
//     const blehh = document.getElementById("categories");
//     if (Mq480.matches){
    
//     document.getElementById("footer").appendChild(blehh); 
//     }
//     else
//     document.getElementById("footer").appendChild(blehh); 

// }





//project generation
for (let i = 0 ; i < projectList.length; i++) {
    let projPath = projectList[i];
    let buttonId = "button" + projPath.id.charAt(0).toUpperCase() + projPath.id.slice(1);
    const buttonProject = document.createElement("button");
    
    buttonProject.id = buttonId;
    buttonProject.className = "buttonProject";
    buttonProject.style.left= projPath.offset[0]*center.offsetHeight/hGalerie+"px"
    buttonProject.style.bottom= projPath.offset[1]*center.offsetHeight/hGalerie+"px"
    buttonProject.style.width= projPath.size[0]*center.offsetHeight/hGalerie+"px"
    buttonProject.style.height= projPath.size[1]*center.offsetHeight/hGalerie+"px"
    buttonProject.setAttribute('onclick',`projectSelect(${i});`);
   
    document.getElementById("projects").appendChild(buttonProject);
   
    
    const project = document.createElement("div");
    
    project.className = projPath.class +" project";
    project.id = projPath.id;
    project.style.left= projPath.offset[0]*center.offsetHeight/hGalerie+"px"
    project.style.bottom= projPath.offset[1]*center.offsetHeight/hGalerie+"px"
    document.getElementById("projects").appendChild(project);
    
    // const Img = document.createElement("img");
    // Img.src = "../assets/galerie/"+projPath.id+".png";
    // Img.className = "background shake"
    // Img.alt =""
    // document.getElementById(projPath.id).appendChild(Img);

    const Img2 = document.createElement("img");
    Img2.src = "/assets/galerie/"+projPath.id+"Color.png";
    Img2.className = "backgroundColor shake"
    Img2.alt =""
    if (projPath.mirror == 1){Img2.style.scale = "-1 1"}
    document.getElementById(projPath.id).appendChild(Img2);

    const Img3 = document.createElement("img");
    Img3.src = "/assets/galerie/"+projPath.id+"Color.png";
    Img3.className = "backgroundColor2 shake"
    Img3.alt =""
    document.getElementById(projPath.id).appendChild(Img3);
    if (projPath.mirror == 1){Img3.style.scale = "-1 1"}

    


}
glowClear();
// project sort by position



//centersize change

function centerResize() {
null
};

//mediaqueries



Mq480.addEventListener("change", function() {
    // introElemPos(Mq480)
    // navBar();
    descSpawn(0);
}); 



function loadValues() {
    //reload project positions
    for (let i = 0 ; i < projectList.length - 1; i++) {
        let projPath = projectList[i + 1];
        const buttonProject = document.getElementById("button" + projPath.id.charAt(0).toUpperCase() + projPath.id.slice(1));
        


        buttonProject.style.left= projPath.offset[0]*center.offsetHeight/hGalerie+"px"
        buttonProject.style.bottom= projPath.offset[1]*center.offsetHeight/hGalerie+"px"
        buttonProject.style.width= projPath.size[0]*center.offsetHeight/hGalerie+"px"
        buttonProject.style.height= projPath.size[1]*center.offsetHeight/hGalerie+"px"

        const project = document.getElementById(projPath.id);
        
        project.style.left= projPath.offset[0]*center.offsetHeight/hGalerie+"px"
        project.style.bottom= projPath.offset[1]*center.offsetHeight/hGalerie+"px"

    
    }    

    projectHilight(projectValue)
    center.style.opacity = "initial"
    document.getElementById("header").style.opacity = "initial"
    
    scaleFactor = Number(style.getPropertyValue('--scaleFactor'));


    WindowWidth = window.innerWidth;
    
    wAccueil = 0*WindowWidth;
 

    scrollTo(projectValue);

    if (Mq480.matches){
        projectCenter = -0.50
        projectHide = WindowWidth/3
    }
    else {
        projectCenter = -0.25
        projectHide = WindowWidth/6
    }  

    showHide();

}; 

window.onload = loadValues();

center.addEventListener("touchmove", function() {
    if(document.getElementById("buttonDesc").style.visibility == "visible"){
     descSpawn(0);
    }
    
}); 

function goToProject(){
    
    document.getElementById('center').scrollLeft = WindowWidth
}

function showHide(){

    
    if(center.scrollLeft > projectHide){
        
        document.getElementById("categories").style.opacity = "1";

    } 
    else{
        document.getElementById("categories").style.opacity = "1";

    }

}

center.addEventListener("scroll", function(){ showHide(); })


center.addEventListener('wheel', (evt) => {
    spotsVisible = document.getElementById("spot").style.opacity
    evt.preventDefault();
    if (spotsVisible == 0.55 && projectValue >= 0){ 
        
        w = Math.max(projectValue +  Math.sign(evt.deltaY),-1)
        if(-1 < w && w < projectList.length){
            projectSelect(w)
            }
  

    }
    else {
    center.style.scrollBehavior = "initial"
    center.scrollLeft += evt.deltaY;
    center.style.scrollBehavior = "smooth"
    }
  
});

function descSpawn(x){



        if (x == 1) {
            document.getElementById("buttonDesc").style.visibility = "visible";
            document.getElementById("spot").style.visibility = "visible";
            document.getElementById("spot").style.opacity = "0.55";
            descContainer.scrollTop = "0";
            if (Mq480.matches){null}
            else{
            const elements = document.getElementById("spot").getElementsByTagName("div")
            elements[0].getElementsByTagName("img")[0].style.visibility = "initial"
            elements[1].style.transition = "all ease 0s"
            elements[1].style.backgroundColor = "rgb(255, 255, 255)"
            elements[1].style.transition = "all ease 0.25s"
            elements[2].getElementsByTagName("img")[0].style.visibility = "initial"
            }
                      
            if(spawnState == 1) {
                null

            }

            else {
                descContainer.style.right = "0"
                spawnState = -spawnState
            }

        }


    if (x == 0) {
        glowClear();
        document.getElementById("spot").style.opacity = "0"
        if(Mq480.matches)
        {center.style.overflowX = "scroll" }

        const backgroundColor = document.getElementsByClassName("backgroundColor2");
        for (let i = 0; i < backgroundColor.length; i++) {
            backgroundColor[i].style.opacity = 0;
        }
        // document.getElementById("projectAnimation").style.visibility = "hidden"
        descContainer.style.right = "calc(-1*var(--w-desc))"

        setTimeout(()=> {
            document.getElementById("buttonDesc").style.visibility = "hidden"
            document.getElementById("spot").style.visibility = "hidden"
            descContainer.scrollTop = "0";

            //enableButtons
            const disableButtons = document.getElementsByClassName("buttonProject");
            for (let i = 0; i < disableButtons.length; i++) {
                disableButtons[i].style.visibility = "visible";
            }
            

            const resetZIndex = document.getElementsByClassName("project");
            for (let i = 0; i < resetZIndex.length; i++) {
                resetZIndex[i].style.zIndex = "initial";
                
            }
        

            spawnState = -1
            projectValue = -1
            }
            ,350);
        

    }
}



function projectSelect(x){
    if (glowEnabled == 0){

        glowCheck(1);
    }
    
    y = projectValue



    if (projectValue == x || x == -1){

        if (projectList[x].link !== undefined) {

            if (projectList[x].link !== "none"){glowCheck(2);}
            setTimeout(()=>{

            if (projectList[x].link.includes('http'))
                {window.open(projectList[x].link, '_blank');}

            else if (projectList[x].link == "none")                
            {shake(document.getElementById(projectList[x].id));}

            else
            {window.location.href = "/galerie/"+ projectList[x].id}
                
            },100)
            }
            
        
        
        else
        null;


    }

    if( x >= 0 ){ projectValue = x}

    const backgroundColor = document.getElementsByClassName("backgroundColor2");
    for (let i = 0; i < backgroundColor.length; i++) {
        backgroundColor[i].style.opacity = 0;
        
    }


    const non = document.getElementsByClassName("project");
    for (let i = 0; i < non.length; i++) {
        non[i].style.zIndex = 5;
        
    }

    
    descSpawn(1);
    scrollTo(x);
    projectHilight(x);
}


function scrollTo(x){
    if(x >= 0){
    let pProject = Number(document.getElementById("button" +  projectList[x].id.charAt(0).toUpperCase() + projectList[x].id.slice(1)).offsetLeft);
    let Wproject = Number(document.getElementById("button" + projectList[x].id.charAt(0).toUpperCase() + projectList[x].id.slice(1)).offsetWidth);
    center.scrollTo((WindowWidth/4)+projectCenter*WindowWidth+(pProject+0.5*Wproject), 0)
    }
    
    







}

function projectHilight(x){
    if(intervalGlow !== undefined){glowClear();}

    if(x >= 0){
        let a = Number(document.getElementById("button" + projectList[x].id.charAt(0).toUpperCase() + projectList[x].id.slice(1)).offsetWidth);


        const non = document.getElementById(projectList[x].id).getElementsByClassName("backgroundColor2");
        for (let i = 0; i < non.length; i++) {
            non[i].style.opacity = 1;
            
        }
        document.getElementById(projectList[x].id).style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"

        // document.getElementById("voile").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        // document.getElementById("voile").style.width = a+"px"
        // document.getElementById("voile").style.opacity = 0.5

        document.getElementById("projectName").innerHTML = projectList[x].name
        document.getElementById("projectText").innerHTML = projectList[x].text
        document.getElementById("projectType").innerHTML = projectList[x].type
        let image = projectList[x].imgSrc1
        
        document.getElementById("projectImg").style.width = 100*projectList[x].scale+"%"
        if (image == "none"){document.getElementById("projectImg").style.display = "none"}
        else {document.getElementById("projectImg").style.display = "initial"
        document.getElementById("projectImg").src = "/assets/galerie/images/"+projectList[x].imgSrc1
        }
        const elements = document.getElementById("spot").getElementsByTagName("div")
       
        setTimeout(()=> {
            if(glowEnabled < 2){
                glowClear();
                if(document.getElementById("spot").style.visibility == "visible"){
                startGlowInterval(x);
                }
            } 
        }  
        ,7500)
    }
}

//#region Glow Functions

//get glow value
function glowCheck(x){
    
    if(glowEnabled == undefined || null){
        sessionStorage.setItem("glowEnabled","0")   
    }
    else {sessionStorage.setItem("glowEnabled",x)}
    glowEnabled = sessionStorage.getItem("glowEnabled")
    console.log(glowEnabled)
}

//clear glow effect
function glowClear(){
    for (let i = 0; i <  projectList.length; i++){
        if(projectList[i] != undefined){

            document.getElementById(projectList[i].id).style.transition = "unset"
            document.getElementById(projectList[i].id).getElementsByClassName("backgroundColor2")[0].style.transition = "unset"
           
            document.getElementById(projectList[i].id).style.filter = "brightness(1)";
            document.getElementById(projectList[i].id).getElementsByClassName("backgroundColor2")[0].style.filter = "drop-shadow(0 0 0 0)"
            // document.getElementById(projectList[i].id).getElementsByClassName("backgroundColor")[0].style.filter = "drop-shadow(0 0 0 0)"
            // document.getElementById(projectList[i].id).style.opacity = 1
        }

    }   
    document.getElementById("projectInformations").style.backgroundColor = "white";

    clearInterval(intervalGlow);
}

// bypass glow 1 (computer version)
if(Mq480.matches){
setTimeout(() => {if(glowEnabled == 0){startGlowInterval(x = 0);}},10000)
}
else{if(glowEnabled == 0){glowCheck(1);}
}

//start glow loop
function startGlowInterval(x){  
    intervalGlow = setInterval(function(){glowProj(x,glowState)},800)
}

//glow effect
function glowProj(x){
    bwa = 1-Math.max(-glowState*0.5,-0.5)
    colorIndex = ["white","rgb(255, 228, 155)"]
    if(document.getElementById("spot").style.visibility == "visible"){

        if (projectList[x].link !== "none"){
        document.getElementById(projectList[x].id).style.transition = "filter ease-out 1.2s"
        document.getElementById(projectList[x].id).getElementsByClassName("backgroundColor2")[0].style.transition = "filter ease-out 1.2s"
        document.getElementById("projectInformations").style.transition = "background-color ease-out 1.2s"

        document.getElementById(projectList[x].id).style.filter = "brightness("+bwa+")";
        document.getElementById(projectList[x].id).getElementsByClassName("backgroundColor2")[0].style.filter = "drop-shadow(0 0 10vmin rgba(255, 202, 58, "+Math.max(glowState,0.2)+"))"
        document.getElementById("projectInformations").style.backgroundColor = colorIndex[Math.max(glowState,0)];
        }
    }
    else{
        for (let i = 0; i < projectList.length; i++){
        // setTimeout(() => {
            document.getElementById(projectList[i].id).style.transition = "filter ease-out 1.2s"
            // document.getElementById(projectList[i].id).getElementsByClassName("backgroundColor")[0].style.transition = "filter ease-out 1.2s"
            document.getElementById(projectList[i].id).style.filter = "brightness("+bwa+")";
        //     document.getElementById(projectList[i].id).getElementsByClassName("backgroundColor")[0].style.filter = "drop-shadow(0 0 10vmin rgba(255, 202, 58, "+Math.max(glowState,0.2)+"))"
        // // },(i*50))
        }
    }
    glowState = -glowState;

}

//#endregion

window.addEventListener("mousemove",function(e){ Mx=e.clientX; My=e.clientY;} )

    



const buttonProject = document.getElementsByClassName("buttonProject")
let Mx = 0
let My = 0

for (let i = 0; i<buttonProject.length; i++){

    const popup = document.getElementById("popup") 
    
    if (Mq480.matches == false){buttonProject[i].addEventListener("mousemove",function(e){
        
        popup.style.visibility = "visible"

        popup.style.left = (Mx+10) + "px"
        popup.style.top = (My+10) + "px"
        if(projectList[i].miniature == 1){
        popup.getElementsByTagName("img")[0].style.display = "initial"
        popup.getElementsByTagName("img")[0].src = "/assets/projets/miniatures/"+projectList[i].id+".gif"
        }else{popup.getElementsByTagName("img")[0].style.display = "none"}

        popup.getElementsByTagName("h2")[0].innerHTML = projectList[i].name
        if(Mq480.matches){return}
        else{
        document.getElementById(projectList[i].id).getElementsByClassName("backgroundColor")[0].style.filter = "grayscale(0) brightness(1)";}
    })
    buttonProject[i].addEventListener("mouseout",function(e){
        popup.style.visibility = "hidden"
        if(Mq480.matches){return}
        else{
        document.getElementById(projectList[i].id).getElementsByClassName("backgroundColor")[0].style.filter = "grayscale(1)  brightness(1.3)";}
        
    }
    )}
}

var shakingElements = [];

var shake = function (element, magnitude = 16) {


  //A counter to count the number of shakes
  var counter = 1;
  var numberOfShakes = 15;
  var startX = 0;
  var magnitudeUnit = magnitude / numberOfShakes;
  var randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  //Add the element to the `shakingElements` array if it
  //isn't already there
  if(shakingElements.indexOf(element) === -1) {
    //console.log("added")
    shakingElements.push(element);

	upAndDownShake();
    
  }

  //The `upAndDownShake` function
  function upAndDownShake() {

    //Shake the element while the `counter` is less than 
    //the `numberOfShakes`
    if (counter < numberOfShakes) {

      //Reset the element's position at the start of each shake
      element.style.transform = 'translate(' + startX + 'px, 0)';

      //Reduce the magnitude
      magnitude -= magnitudeUnit;

      //Randomly change the element's position
      var randomX = randomInt(-magnitude, magnitude);
      var randomY = randomInt(-magnitude, magnitude);

      element.style.transform = 'translate(' + randomX + 'px, 0)';

      //Add 1 to the counter
      counter += 1;

      requestAnimationFrame(upAndDownShake);
    }

    //When the shaking is finished, restore the element to its original 
    //position and remove it from the `shakingElements` array
    if (counter >= numberOfShakes) {
      element.style.transform = 'translate(' + startX + ', 0)';
      shakingElements.splice(shakingElements.indexOf(element), 1);
    }
  }



};

if(typeof prevServicePage !== 'undefined'){
if(prevServicePage == "Illustration"){projectSort(0);}
if(prevServicePage == "designObjet"){projectSort(1);}
if(prevServicePage == "designMultimedia"){projectSort(3);}
if(prevServicePage == "mediationGraphique"){projectSort(2);}
}
