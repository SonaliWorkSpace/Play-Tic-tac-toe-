console.log("Are you ready to play ?")
let music = new Audio("music.mp3.xspf")
let audioTurn = new Audio("tingtong.mp3.xspf")
let gameover = new Audio("gameover.mp3.xspf")
let turn = "X"
let gameOver = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
           

        }
 })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
            if (!gameOver){ 
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', ()=> {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""

    });
    turn = "X"
    gameOver=false
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})