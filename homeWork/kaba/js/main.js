'use strict';
window.onload=()=>{
  var images=document.getElementsByClassName("headerImage");
  var zIndexMax=0;
  for(var i=0;i<images.length;i++){
    images[i].addEventListener("click",function(){
      this.style.zIndex=++zIndexMax;
    });
  }
}
