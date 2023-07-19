const music = new Audio('myaudio/1.mp3');

//music.play();

const songs =[
    {
        id:1,
        songName:`Butter<br>
        <div class="subtitle">bts</div>`,
        poster:"img/1.jpg"
        
    },
    {
        id:2,
        songName:`boombayah<br>
        <div class="subtitle">blackpink</div>`,
        poster:"img/2.jpg"
    },
    {
        id:3,
        songName:`beliver<br>
        <div class="subtitle">dragon d</div>`,
        poster:"img/3.jpg"
    },
    {
        id:4,
        songName:`boy with luv<br>
        <div class="subtitle">bts</div>`,
        poster:"img/4.jpg"
    },
    {
        id:5,
        songName:`dynamite<br>
        <div class="subtitle">bts</div>`,
        poster:"img/5.jpg"
    },
    {
        id:6,
        songName:`Enemy<br>
        <div class="subtitle">dragons</div>`,
        poster:"img/6.jpg"
    },
    {
        id:7,
        songName:`Set me free<br>
        <div class="subtitle">jimin</div>`,
        poster:"img/7.jpg"
    },
    {
        id:8,
        songName:`faded<br>
        <div class="subtitle">alan walker</div>`,
        poster:"img/8.jpg"
    },
    {
        id:9,
        songName:`husn parcham<br>
        <div class="subtitle">bollywood</div>`,
        poster:"img/9.jpg"
    },
    {
        id:10,
        songName:`home<br>
        <div class="subtitle">bts</div>`,
        poster:"img/4.jpg"
    },
    {
        id:11,
        songName:`Maria<br>
        <div class="subtitle">hawasa</div>`,
        poster:"img/11.jpg"
    },
    {
        id:12,
        songName:`Still with you<br>
        <div class="subtitle">jungkook</div>`,
        poster:"img/12.jpg"
    },
    {
        id:13,
        songName:`Bom diggy diggy<br>
        <div class="subtitle">Jasmin walia</div>`,
        poster:"img/13.jpg"
    },
    {
        id:14,
        songName:`Suzume<br>
        <div class="subtitle">Radwimps</div>`,
        poster:"img/14.jpg"
    },
    {
        id:15,
        songName:`Shinunoga-e-wa<br>
        <div class="subtitle">fujiii</div>`,
        poster:"img/15.jpg"
    },
    {
        id:16,
        songName:`Run<br>
        <div class="subtitle">bts</div>`,
        poster:"img/4.jpg"
    },
    {
        id:17,
        songName:`Phir mohhabat<br>
        <div class="subtitle">Arijit singh</div>`,
        poster:"img/17.jpg"
    },
    {
        id:18,
        songName:`crazy<br>
        <div class="subtitle">jimin</div>`,
        poster:"img/18.jpg"
    },
    {
        id:19,
        songName:`Aao milo chale<br>
        <div class="subtitle">jab we met</div>`,
        poster:"img/19.jpg"
    },
    {
        id:20,
        songName:`Money<br>
        <div class="subtitle">Lalisa</div>`,
        poster:"img/20.jpg"
    },
    {
        id:21,
        songName:`Unholy<br>
        <div class="subtitle">sam smith</div>`,
        poster:"img/21.jpg"
    },
]




   let masterPlay = document.getElementById('masterPlay');
   let wave = document.getElementById('wave');

 masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
        
    }
 });
 const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('PlaylistPlay')).forEach((el)=>{
        el.classList.add("bi-play-circle-fill");
        el.classList.remove("bi-pause-circle-fill");
         
    })
    
  }
  const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';  
    })
    
  }

 let index = 0;
 let poster_masterply = document.getElementById('poster_masterply');
 let title = document.getElementById('title');
 Array.from(document.getElementsByClassName('PlaylistPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        //console.log(index);
        music.src = `myaudio/${index}.mp3`;
        poster_masterply.src =`img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");

        let songtitles = songs.filter((els) =>{
            return els.id == index;
        });

        songtitles.forEach(elss =>{
           let{ songName } = elss;
           title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
      });
    })
 

    let currentStart = document.getElementById('currentStart');
    let currentEnd = document.getElementById('currentEnd');
   
    music.addEventListener('timeupdate', ()=>{
        let music_curr = music.currentTime;
        let music_dur = music.duration;
    
       
       // console.log(min1);
       
       
       
       let min1 = Math.floor(music_curr / 60);
       let sec1= Math.floor(music_curr % 60);

      //currentStart.innerText = `${min1}:${sec1}`;
       
       let min2= Math.floor(music_dur / 60);
       let sec2 = Math.floor(music_dur % 60);

       currentEnd.innerText = `${min2}:${sec2}`;


       let progressBar =parseInt((music_curr / music_dur) * 100);
       Seek.value = progressBar;
       //console.log(seek);
        let seekbar = seek.value;
       bar2.style.width = `${seekbar}%`;
       dot.style.left = `${seekbar}%`;
       


    })








let pop_songs_left = document.getElementById('pop_songs_left');
let pop_songs_right = document.getElementById('pop_songs_right');
let pop_songs = document.getElementsByClassName('pop_songs')[0];

pop_songs_right.addEventListener('click',() => {
    pop_songs.scrollLeft += 330;
});

pop_songs_left.addEventListener('click',() => {
    pop_songs.scrollLeft -= 330;
});




