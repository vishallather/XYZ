console.log("welcome to Nacho Bc");
//initalize the variables
let songIndex =0;
let audioElement = new Audio('../Downloads/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName: "Listen it",FilePath: "../Downloads/song1.mp3", coverPath: "../Downloads/cover2.jpeg" },
    {songName: "Mada Faka",FilePath: "../Downloads/song2.mp3",coverPath: "../Downloads/song 1.jpg"},
    {songName: "Red Eye",FilePath: "../Downloads/song3.mp3", coverPath: "../Downloads/cover3.jpeg" },
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play(); 
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
      
      //update seekbar
      progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
     
      myProgressBar.value = progress;
})
//live with 
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{     
       makeAllPlays();
       songIndex = parseInt(e.target.id)
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src = `../Downloads/song${songIndex+1}.mp3`;
       masterSongName.innerText = songs[songIndex].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       gif.style.opacity=1;
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=2){
        songIndex = 0
    }
    else{
        songIndex +=1 ;
    }
    audioElement.src = `../Downloads/song${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1 ;
    }
    audioElement.src = `../Downloads/song${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})



