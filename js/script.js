var music=document.getElementById("bgMusic");
 music.play();
 var audio=document.getElementsByClassName("zhong");
    audio.addEventListener("click",function(){
        music.pause();
        audio.style.background="url(images/play.png) no-repeat";
    });


