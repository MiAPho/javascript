window.onload=function(){
    let prices=[120,50,180];
    let result=this.document.getElementById("result");
    let fruits=document.getElementsByClassName("fruits");
    let numberChange=()=>{
        var sum=0;
        for(var i=0;i<fruits.length;i++){
          sum+=fruits[i].value*prices[i];
        }
        result.textContent=sum+"円です！";
    };
    for(let i=0;i<fruits.length;i++){
        fruits[i].addEventListener("change",numberChange);
        fruits[i].addEventListener("keyup",numberChange);
        fruits[i].addEventListener("mouseup",numberChange);
    }
    //function numberChange(){
    //    let sum=0;
    //    for(let i=0;i<fruits.length;i++){
    //        sum+=fruits[i].value*prices[i];
    //    }
    //    result.textContent=sum+"円です!";
    //}
}