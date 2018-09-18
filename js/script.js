document.addEventListener('DOMContentLoaded', bind)
function bind(){
var music=document.getElementById("bgMusic");
 music.play();
 
 var audio=document.getElementsByClassName("zhong");
    audio.addEventListener("click",function(){
        var music=document.getElementById("bgMusic");
        music.pause();
        audio.style.background="url(images/play.png) no-repeat";
    });
}

