import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const VIDEO_STORAGE_KEY = 'videoplayer-current-time';
const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

onGetTimePause();

player.on('timeupdate', throttle(onRememberTimeOfPause, 1000));

function onRememberTimeOfPause({seconds}) {
    localStorage.setItem(VIDEO_STORAGE_KEY, seconds);
}

function onGetTimePause() {
    const seconds = localStorage.getItem(VIDEO_STORAGE_KEY);

    if (seconds){
        player.setCurrentTime(seconds);
    } 
}