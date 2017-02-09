var i = 0;
var currentPic= $(".pic").html(`<img src ="${carouselImages[i].image_url}"/>`)

function nextPic(){
    i = i + 1;
    $(".pic").html(`<img src ="${carouselImages[i].image_url}"/>`)
    $(".pic").html(`<img src ="${carouselImages[i].image_url}"/>`)

    }


function lastPic(){
  i = i - 1;
  $(".pic").html(`<img src ="${carouselImages[i].image_url}"/>`)
  }


$(".nextPic").on("click",nextPic);
$(".lastPic").on("click",lastPic);
