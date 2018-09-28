document.addEventListener('DOMContentLoaded', bindEvent)

var button= document.querySelector('.button');;
function bindEvent() {
    button.addEventListener('click', function() {
        var isPlaying=button.classList.contains("play")==true;
        if(isPlaying){
            document.getElementById("bgMusic").pause();
            button.classList.remove('play');
            button.classList.add('pause');
        }
        else{
            document.getElementById("bgMusic").play();
            button.classList.remove('pause');
            button.classList.add('play');
        }

    })
    nextPage();
    upPage();
}
var pageFirst=document.getElementsByClassName("page_first")[0];
var pageTwo=document.getElementsByClassName("page_two")[0];
function nextPage(){
    var downPage=document.getElementById("right");
    downPage.addEventListener("click",function(){
        pageFirst.style.display='none';
        pageTwo.style.display="block";
    })
}
function upPage(){
    var upPage=document.getElementsByClassName("pagetwo_left")[0];
        upPage.addEventListener("click",function(){
            pageTwo.style.display="none";
            pageFirst.style.display='block';
        })
}   
