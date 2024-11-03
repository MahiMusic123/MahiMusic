document.addEventListener("DOMContentLoaded", () => {
    const songs = ["Song1.mp3", "Song2.mp3", "Song3.mp3"];
    let currentSongIndex = 0;

    const audioPlayer = document.getElementById("audio-player");
    const songTitle = document.getElementById("song-title");

    // Set initial song
    audioPlayer.src = songs[currentSongIndex];

    function playSong() {
        audioPlayer.play().catch(error => {
            console.error("Error playing audio:", error);
        });
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

    // Make functions globally accessible
    window.playSong = playSong;
    window.pauseSong = pauseSong;
    window.stopSong = stopSong;
    window.nextSong = nextSong;
});
