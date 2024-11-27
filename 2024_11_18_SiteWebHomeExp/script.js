function oui(){
    document.getElementById("introText").style.display ="none"
        document.getElementById("genButton").style.display ="none"
    const animatedTitles = document.getElementsByClassName("services")
        for (let i = 0; i < animatedTitles.length; i++) {
            animatedTitles[i].style.display ="flex"
            
        }
        

}