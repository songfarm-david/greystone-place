import Hls from '../../node_modules/hls.js/dist/hls.js';
export default function loadVideo(src) {
	var video = document.getElementById('greystoneVideo');
	if(Hls.isSupported()) {
		console.log('Hls supported', src);
    var hls = new Hls();
    hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
	 // hls.loadSource(src)
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
	 });
 } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    // video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
	 video.src = src;
    video.addEventListener('loadedmetadata',function() {
      video.play();
    });
  }
}
// https://stackoverflow.com/questions/48966464/add-raw-html-with-script-inside-gatsby-react-page
