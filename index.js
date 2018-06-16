let videoFrame = 0;
let pixelsPerFrame = 10;
let pageHeight, video, loop;

$(function() {
    video = document.getElementById('video');

    video.addEventListener('canplay', function() {
        pageHeight = video.duration * 24 * pixelsPerFrame;
        document.getElementById('set-height').style.height = pageHeight + window.innerHeight + 'px';

        loop = true;
    });

    setInterval(function() {
        if (loop) {
            videoFrame = (window.pageYOffset / pageHeight) * video.duration;
            if (Math.abs(videoFrame - video.currentTime) > 0.01) {
                video.currentTime = videoFrame;
                console.log(videoFrame);
            }
        }
    }, 20);
});
