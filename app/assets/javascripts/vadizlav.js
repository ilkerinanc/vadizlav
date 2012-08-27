var params = { allowScriptAccess: "always"};
    var atts = { id: "myytplayer"};
    swfobject.embedSWF("http://www.youtube.com/apiplayer?enablejsapi=1&version=3",
                       "ytapiplayer", "670", "580", "8", null, null, params, atts);

    function onYouTubePlayerReady(playerId) {
      ytplayer = document.getElementById("myytplayer");
      // ytplayer.loadVideoById("El8mLrBSPlA",0,"medium");
      ytplayer.loadPlaylist("5A437C0CA7460B11", 0, 0, "medium")
    }

     function basla() {
      ytplayer.setShuffle(true)
      ytplayer.setLoop(true)
      if (ytplayer) {
        ytplayer.nextVideo();
      }
    }

    function play() {
      if (ytplayer) {
        ytplayer.playVideo();
      }
    }
    
    function pause() {
      if (ytplayer) {
        ytplayer.pauseVideo();
      }
    }

    function stop() {
      if (ytplayer) {
        ytplayer.stopVideo();
      }
    }

    function next() {
      if (ytplayer) {
        ytplayer.nextVideo();
      }
    }

    function prev() {
      if (ytplayer) {
        ytplayer.previousVideo();
      }
    }

    function mute() {
      if (ytplayer) {
        ytplayer.mute();
      }
    }

    function unmute() {
      if (ytplayer) {
        ytplayer.unMute();
      }
    }

$(document).ready(function(){
$("#hede").fadeTo(1,1);
$("#turnoff").click(function () {
  $("#hede").fadeTo("slow",1);
});
$("#soft").click(function () {
  // document.getElementById("hede").style.display="block";
  $("#hede").fadeTo("slow",0.2);
});
$("#turnon").click(function () {
     // document.getElementById("hede").style.display="block";
     $("#hede").fadeTo("slow",0);
});
});