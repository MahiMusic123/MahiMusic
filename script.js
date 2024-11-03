const songs = ["Song1.mp3", "Song2.mp3", "Song3.mp3"]; // Add more song files here
let currentSongIndex = 0;

const audioPlayer = document.getElementById("audio-player");
const songTitle = document.getElementById("song-title");

function playSong() {
    audioPlayer.play();
    songTitle.innerText = `Now Playing: ${songs[currentSongIndex]}`;
}

function pauseSong() {
    audioPlayer.pause();
}

function stopSong() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    playSong();
}
