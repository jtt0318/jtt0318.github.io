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
}
