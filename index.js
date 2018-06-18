let videoFrame = 0;
let pixelsPerFrame = 6.5;
let pageHeight, video, loop;

$(function() {
    video = document.getElementById('video');

    video.addEventListener('loadeddata', setHeight);
    window.addEventListener('resize', setHeight);

    setInterval(function() {
        if (loop) {
            videoFrame = (window.pageYOffset / pageHeight) * video.duration;
            if (Math.abs(videoFrame - video.currentTime) > 0.01) {
                video.currentTime = videoFrame;
            }
        }
    }, 20);
});

function setHeight() {
    pageHeight = video.duration * 24 * pixelsPerFrame;
    document.getElementById('set-height').style.height = pageHeight + window.innerHeight + 'px';
    console.log("no");

    loop = true;
}
