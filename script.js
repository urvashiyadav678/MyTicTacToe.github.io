console.log("WELCOME");

let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";

let isgameover = false;

// function to change turn


const changeturn = () => {
        return turn === "X" ? "0" : "X";
}


// function to check a win 

const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") )
        {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover =true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="20vw" 
            gameover.play();
        }
    })

}

// game logic here
// music.play()
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(Element =>{
         
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click', ()=>{
        if(boxtext.innerHTML === "")
        {
            boxtext.innerHTML = turn;
            turn = changeturn();
            audioturn.play();
            checkwin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})


 //  add event lisitner to reset btn

 reset.addEventListener('click', () => {
    console.log("work")
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element =>{
        Element.innerText = ""
    });
    turn = 'X';
    isgameover =false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0" 
 })

 function restart()
 {
    console.log("work")
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element =>{
        Element.innerText = ""
    });

 }