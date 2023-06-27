//song list
let All_song = [
  {
    name: "Day 1 ◑",
    path: "music/m1.mp3",
    img: "pic/1.jpg",
    singer: "Honne"
  },
  {
    name: "Sanctuary",
    path: "music/m2.mp3",
    img: "pic/2.jpg",
    singer: "Joji"
  },
  {
    name: "Die For You",
    path: "music/m3.mp3",
    img: "pic/3.jpg",
    singer: "The Weeknd"
  },
  {
    name: "Is There Someone Else?",
    path: "music/m4.mp3",
    img: "pic/4.jpg",
    singer: "The Weeknd"
  },
];


/*tracks*/
let tracks = document.querySelector('.tracks');

for (let i = 0; i < All_song.length; i++) {

 let Html = ` <div class="song">
     <div class="img">
     <img src="${All_song[i].img}"/>
     </div>
     <div class="more">
     <audio src="${All_song[i].path}" id="music"></audio>
     <div class="song_info">
        <p id="title">${All_song[i].name}</p>
        <p>${All_song[i].singer}</p>
     </div>
     <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
     </div>
   </div>`;

 tracks.insertAdjacentHTML("beforeend", Html);
};


