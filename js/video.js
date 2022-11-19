// Add js here.
var vid = document.getElementById("videoplayer");
document.getElementById("play").onclick = function(){playVid()};
document.getElementById("pause").onclick = function(){pauseVid()};
document.getElementById("slower").onclick = function(){slowerVid()};
document.getElementById("faster").onclick = function(){fasterVid()};
document.getElementById("skip").onclick = function(){skipVid()};
document.getElementById("mute").onclick = function(){muteVid()};
document.getElementById("slider").onclick = function(){volumeVid()};

vid.onload = function(){pageLoad()};

function pageLoad(){
    vid.autoplay = true;
    vid.loop = false;
}

function playVid(){
    vid.play();
}

function pauseVid(){
    vid.pause();
}

function slowerVid(){
    if (vid.playbackRate == 2){
        vid.playbackRate = 1;
    }
    else if(vid.playbackRate == 1){
        vid.playbackRate = 0.5;
    }
    else{
        alert("Video is at slowest speed!");
    }
}

function fasterVid(){
    if (vid.playbackRate == 0.5){
        vid.playbackRate = 1;
    }
    else if(vid.playbackRate == 1){
        vid.playbackRate = 2;
    }
    else{
        alert("Video is at fastest speed!");
    }
}

function skipVid(){
    if (vid.currentTime + 15 > vid.duration){
        vid.currentTime = 0;
    }
    else {
        vid.currentTime += 15;
    }
}

function muteVid(){
    const muteText = document.getElementById("mute");

    if (vid.muted == false){
        vid.muted = true;
        muteText.innerHTML = "Unmute";
    }
    else{
        vid.muted = false;
        muteText.innerHTML = "Mute";
    }
}

function volumeVid(){
    vol = document.getElementById("slider");
    vid.volume = vol.value * 0.01;
    document.getElementById("volume").innerHTML = vid.volume * 100 + '%';
}