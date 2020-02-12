var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '100%',
    width: '100%',
    playerVars: 
    {
      listType:'playlist',
      list: 'PLfmpCawfIKUWkHL0OiNocsqbF2QoR5Maq',
      autoplay: 1,
      mute: 1,
      loop: 1,
      controls: 0,
      modestbranding: 1
    }
  });
}

