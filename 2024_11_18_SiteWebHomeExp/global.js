let Mq480 = window.matchMedia("(max-width: 480px)")
if (localStorage.getItem("explored") == 1){
    document.body.style.animation = "none"
 }
if(performance.navigation.type == 2){
    location.reload(true);
 }
