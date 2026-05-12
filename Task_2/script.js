// small music player script with a simple playlist

const songs = [
    {
        title: "7 Years",
        artist: "Lukas Graham",
        file: "assets/music/7_years.mp3",
        cover: "assets/images/7 years.jpg"
    },
    {
        title: "Heat Waves",
        artist: "Glass Animals",
        file: "assets/music/heat_waves.mp3",
        cover: "assets/images/heat waves.jpg"
    }
];

// grab DOM elements once and keep them handy
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volumeSlider = document.getElementById("volumeSlider");
const playlist = document.getElementById("playlist");

let currentSongIndex = 0;
let isPlaying = false;

// load the selected song into the player UI
function loadSong(index) {
    const song = songs[index];

    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audio.src = song.file;

    // reset progress display when a new song is loaded
    progress.value = 0;
    currentTimeEl.textContent = "0:00";
    durationEl.textContent = "0:00";

    updatePlaylist();
}

// play the audio and update the button icon
function playSong() {
    audio.play()
        .then(() => {
            isPlaying = true;
            playBtn.textContent = "⏸";
        })
        .catch((error) => {
            console.log("Audio play error:", error);
            alert("Audio file not found. Check file names and folder paths.");
        });
}

// pause the audio and switch the icon back to play
function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "▶";
}

// toggle between play/pause when button is clicked
playBtn.addEventListener("click", () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// go to the next song in the playlist
nextBtn.addEventListener("click", () => {
    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex);
    playSong();
});

// go to the previous song in the playlist
prevBtn.addEventListener("click", () => {
    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    loadSong(currentSongIndex);
    playSong();
});

// update total duration once the song metadata is ready
audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
});

// update progress and current time as the song plays
audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
        progress.value = (audio.currentTime / audio.duration) * 100;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    }
});

// allow the user to seek using the progress bar
progress.addEventListener("input", () => {
    if (!isNaN(audio.duration)) {
        audio.currentTime = (progress.value / 100) * audio.duration;
    }
});

// volume control slider
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
});

// automatically play the next song when the current one ends
audio.addEventListener("ended", () => {
    nextSong();
});

function nextSong() {
    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex);
    playSong();
}

// helper to format seconds into minutes:seconds
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return `${minutes}:${seconds}`;
}

// render the playlist below the player
function createPlaylist() {
    playlist.innerHTML = "";

    songs.forEach((song, index) => {
        const songDiv = document.createElement("div");
        songDiv.classList.add("song-item");
        songDiv.textContent = `${song.title} - ${song.artist}`;

        songDiv.addEventListener("click", () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });

        playlist.appendChild(songDiv);
    });
}

// highlight the current song in the playlist
function updatePlaylist() {
    const songItems = document.querySelectorAll(".song-item");

    songItems.forEach((item, index) => {
        item.classList.toggle("active", index === currentSongIndex);
    });
}

// start with a comfortable volume and load the first song
audio.volume = 0.8;
createPlaylist();
loadSong(currentSongIndex);