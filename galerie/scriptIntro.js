// intro //
// Listener function on state changes


let content = document.getElementById('imgIntro');
let parentMobile = document.getElementById('baliseMobile');
let parentScreen = document.getElementById('baliseScreen');
let dateMobile = document.getElementById("dateMobile")
let date = document.getElementById("date")


parentMobile.insertBefore(content, parentMobile.firstChild);
date.style.display = "inline-block";
dateMobile.innerHTML = "&nbsp;-&nbsp;"


function introElemPos(Mq900) {
if (Mq900.matches) { // If media query matches
null
} else {
    parentScreen.insertAdjacentElement("afterend",content);
    date.style.display = "block";
    dateMobile.innerHTML = ""

}
}

// Mq dependant function to call 
introElemPos(Mq900);

// Listener function on state changes
Mq900.addEventListener("change", function() {
    introElemPos(Mq900);
}); 

let bottomMessage = document.createElement("div")
bottomMessage.style.width = "100%"
bottomMessage.id = "bottomMessage"
document.body.appendChild(bottomMessage)

if(projectIndex !== 0 && projectList[projectIndex].class == "objet"){
    let bottomMessageImg = document.createElement("img")
    bottomMessageImg.style.margin = "auto"
    bottomMessageImg.style.display = "block"
    if(Mq480.matches){bottomMessageImg.style.width = "33dvw"}
    else{bottomMessageImg.style.width = "10dvw"}
    bottomMessageImg.style.paddingBottom = "5dvw"
    bottomMessageImg.src = "/assets/projets/miniatures/"+projectList[projectIndex].id+".gif"
    document.getElementById("bottomMessage").appendChild(bottomMessageImg)
}

let bottomMessagee = document.createElement("div")
bottomMessagee.className = "endGradient"
document.getElementById("bottomMessage").appendChild(bottomMessagee)

