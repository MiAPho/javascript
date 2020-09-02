window.onload=function(){
    let path="images/";
    let images=["cat1.jpg","cat2.jpg","cat3.jpg"];
    let index=0;
    let ele=this.document.getElementById("mainImage");
    ele.addEventListener("click",function(){
        this.src=path+images[++index % images.length];
    });
};