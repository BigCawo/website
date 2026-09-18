// scroll

const center = document.getElementById("sectionContainer")
// center.addEventListener("scroll", function(){ showHide(); })


center.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    // if (spotsVisible == 0.55 && projectValue >= 0){ 
        
    //     w = Math.max(projectValue +  Math.sign(evt.deltaY),-1)
    //     if(-1 < w && w < projectList.length){
    //         projectSelect(w)
    //         }


    // }
    // else {
    center.style.scrollBehavior = "initial"
    center.scrollLeft += evt.deltaY;
    center.style.scrollBehavior = "smooth"
    // }

});


// lists

let illusListObservation = illusList.filter(function test(x){if (x.type.includes(0)){return x}})
let illusListImagination = illusList.filter(function test(x){if (x.type.includes(1)){return x}})
let illusListLists = [illusListObservation,illusListImagination]

let slides = document.getElementById("imgZoom")
let slideContainer =  document.getElementById("modalImg")
let slideFrame = document.getElementById("myModal")
let buttonTypesContainer = undefined
let activeSection = 0

let centerDim = [document.getElementById("center").offsetHeight,document.getElementById("center").offsetWidth]
let windowWidth = window.innerWidth
console.log(centerDim,windowWidth)

//#region ~~~~ get img Ratio


  // for (let i = 0; i< illusList.length;i++){
  //   //get image dimensions
  //   imgSrc = illusList[i].src
  //   let image = new Image();
  //   image.src = imgSrc;
  //   image.onload = function () {
  //   let imgRatio = image.width / image.height
  //   illusList[i].ratio = imgRatio   
  // }
  // }
  console.log(illusList[2])
  //#endregion

  //#region ~~~~ create divisions for each img
  for (let i = 0; i< illusList.length;i++){

    const illusCanvas = document.createElement("div")
    // illusCanvas.setAttribute("onclick","openModal(event);")
    illusCanvas.className = "imgGallery"
    illusCanvas.id = illusList[i].name
    illusCanvas.style.backgroundColor = "aqua"
    illusCanvas.style.margin ="5dvh"
    illusCanvas.style.padding ="3dvh"

  
    //get image dimensions
    imgSrc = illusList[i].src
    let image = new Image();
    image.src = imgSrc;

    image.onload = function () {
        let minHeight = 35
        let imgRatio = image.width / image.height

        if(imgRatio <=1){
          illusCanvas.style.height = minHeight+25*(1/imgRatio) +"dvh"
          illusCanvas.style.minWidth = (minHeight+25*(1/imgRatio))*imgRatio +"dvh"
        }
        else{
          illusCanvas.style.height = minHeight+25*(1-1/imgRatio) +"dvh"
          illusCanvas.style.minWidth = (minHeight+25*(1-1/imgRatio))*imgRatio +"dvh"
        }
      }

    
    illusCanvas.style.backgroundImage = "url(/galerie/illustrations/"+imgSrc+")"

    illusCanvas.style.backgroundSize = "contain"
    document.getElementById("sectionContainer").appendChild(illusCanvas)


  }

console.log(document.getElementById(illusList[2].name).offsetLeft,document.getElementById("galerieIllustration").offsetWidth)
// document.getElementById("center").style.minWidth = document.getElementById(illusList[illusList.length-1].name).offsetLeft+"px"
