let audio = new Audio("./assets/music/Bad Meets Evil - Fast Lane.mp3");

// Creating Variables

let currentCover = document.getElementById("current-cover-img");
let track = Array.from(document.getElementsByClassName("track"));
let seekBar = document.getElementById("seekBar");
let currentTIme = document.getElementById("current-time");
let masterBtn = document.getElementById("masterBtn");
let prevBtn = document.getElementById("prevBtn");
let frwdBtn = document.getElementById("frwdBtn");
let currentCoverImg = document.getElementById("cover-image");
let coverImg = document.getElementById("cover-image");
let playSong = Array.from(document.getElementsByClassName("new"));
let currentSongDesc = document.getElementById("current-song-name");
let artistName = document.getElementById("artist-name");

let songCollection = [
  {
    songName: "Without Me",
    artist: "Eminem",
    filePath: "./assets/music/Without Me - Eminem.mp3",
    coverImage: "./assets/img/coverImages/without-me.jpg",
  },
  {
    songName: "From The D2 The LBC",
    artist: "Eminem, Snoop Dogg",
    filePath: "./assets/music/From The D 2 The LBC.mp3",
    coverImage: "./assets/img/coverImages/fromD2.jpg",
  },
  {
    songName: "The Real Slim Shady",
    filePath: "./assets/music/The Real Slim Shady - Eminem.mp3",
    artist: "Eminem",
    coverImage: "./assets/img/coverImages/slim-shady.jpg",
  },
  {
    songName: "Fast Lane",
    filePath: "./assets/music/Bad Meets Evil - Fast Lane.mp3",
    artist: "Bad Meets Evil",
    coverImage: "./assets/img/coverImages/fast-lane.jpg",
  },
];

masterBtn.addEventListener("click", () => {
  if (masterBtn.classList.contains("fa-play")) {
    audio.play();
    masterBtn.classList.remove("fa-play");
    masterBtn.classList.add("fa-pause");
  } else {
    audio.pause();
    masterBtn.classList.remove("fa-pause");
    masterBtn.classList.add("fa-play");
  }
});

// audio.addEventListener("timeupdate", () => {
//   console.log("timeupdate");
//   let p = parseInt((audio.currentTime / audio.duration) * 100);
//   seekBar.value = p;
// });

track.forEach((e, i) => {
  e.getElementsByClassName("song-name")[0].innerText =
    songCollection[i].songName;
  e.getElementsByClassName("song-list-cover")[0].src =
    songCollection[i].coverImage;
});

playSong.forEach((e) => {
  e.addEventListener("click", () => {
    id = e.id;
    audio.src = songCollection[id].filePath;

    if (e.classList.contains("fa-circle-play")) {
      currentCover.src = songCollection[id].coverImage;
      audio.play();
      e.classList.add("fa-circle-pause");
      e.classList.remove("fa-circle-play");
      currentSongDesc.innerText = songCollection[id].songName;
      masterBtn.classList.remove("fa-play");
      masterBtn.classList.add("fa-pause");
      artistName.innerText = " - " + songCollection[id].artist;
    } else {
      audio.pause();
      e.classList.remove("fa-circle-pause");
      e.classList.add("fa-circle-play");
      masterBtn.classList.remove("fa-pause");
      masterBtn.classList.add("fa-play");
    }
  });
});
