const audioPlayer = document.getElementById('audio-player');
const playBtn = document.querySelector('.play-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const progressBar = document.querySelector('.progress');
const currentTimeElement = document.querySelector('.current-time');
const totalTimeElement = document.querySelector('.total-time');
const songTitleElement = document.querySelector('.song-title');
const artistNameElement = document.querySelector('.artist-name');
const albumCoverImage = document.querySelector('.album-cover img');

let isPlaying = false;
let currentSongIndex = 0;

const songs = [
  {
    title: 'Song 1',
    artist: 'Artist 1',
    src: 'song1.mp3',
    cover: 'album-cover1.jpg'
  },
  {
    title: 'Song 2',
    artist: 'Artist 2',
    src: 'song2.mp3',
    cover: 'album-cover2.jpg'
