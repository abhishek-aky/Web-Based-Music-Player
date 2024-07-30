let playBtn = document.getElementById("play-btn")
let progress = document.getElementById("progress")
let songList = document.getElementById("song-list")



let songs = [
    {
        name : 'song-1',
        id:1
    },

    {
        name:"song-2",
        id:2
    },

    {
        name:"song-3",
        id:3
    },

    {
        name:"song-4",
        id:4
    },

    {
        name:"song-5",
        id:5
    }
]

let audio = new Audio('./assets/song-1.mp3');
// Shoe the song list in the UI


for(let song of songs){

    let li = document.createElement('li'); // list item create krenge
    li.innerText = song.name; //List item pr gaane ka name nazar aayega toh uske liye .name ya .id kyuki array object bnaya hai
    li.setAttribute('id',song.id); //pehla btata hai konsi id leni hain then second attribute set kr deta hai
    li.classList.add('song-item'); // dynamic class bnayenge decoration ke liye
    songList.append(li);
}

// play btn ka icon badlo gaana chalao

playBtn.addEventListener('click',()=>{
    audio.paused ? audio.play() : audio.pause()
    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play')
        playBtn.children[0].classList.add('fa-pause')
    }
    else{
        playBtn.children[0].classList.remove('fa-pause')
        playBtn.children[0].classList.add('fa-play')
    }
})


// Current time ke hisaab se range chale

audio.addEventListener("timeupdate",function(){
    let currentProgress = (audio.currentTime * 100)/audio.duration;
    progress.value = currentProgress;
})


// drag krne se gaane ka time change ho jaaye
progress.addEventListener('change',function(){
    let updatedTime = (audio.duration * progress.value)/100;
    audio.currentTime = updatedTime;
})

//btn dbao gaana chalao pratiyogita

songList.addEventListener('click', function(event){
    let songId = event.target.getAttribute('id') // jaise hi kisi gaane pr click krunga uski id nika jayegi
    console.log(songId);
    console.log(audio.src);
     audio.src = `./assets/song-${songId}.mp3`; //id nikalte hi source badal dunga
     console.log(audio.src);
     audio.currentTime = 0; // jaise hi source mila uska current time zero krke usse play krna hain
     audio.play(); //after updating currenttime audio play kr dena
     playBtn.children[0].classList.add('fa-pause') //play ho jayega toh pause ka option dikhana hain 
     playBtn.children[0].classList.remove('fa-play') // play ka option hta dena hain
})
