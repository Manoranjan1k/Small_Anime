var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");
var rk = document.querySelector("#kris"); 
var pic = document.querySelector("img");
var flag = 0;
main.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
})
rk.addEventListener("click",function(){
     if (flag==0) {
        pic.style.opacity = 1;
        rk.style.color = "white";
        flag=1;
     }
     else{
        pic.style.opacity = 0;
        rk.style.color = "rgb(160, 62, 252)";
        flag = 0;
     }
   
     
    

})