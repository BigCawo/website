

// retrieve data value


// sessionStorage.setItem("explored", 0);

let name = sessionStorage.getItem("explored")


if (name == 1){
    oui();
}

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
        sessionStorage.setItem("explored", 1);
    },0);

}

const bottomTitles = document.getElementById("footer").getElementsByTagName("div")
for (let i = 0; i < bottomTitles.length; i++) {
    bottomTitles[i].style.display ="none"
    bottomTitles[i].style.opacity ="0"
} 

