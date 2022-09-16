var insectImg;
var section_list;
function startGame() {
    section_list = document.querySelectorAll(".section");
    console.log(section_list);
    section_list[0].classList.add("up");

}

var seconds = 0;
function timer() {
    seconds++;
    var min = 0;
    var sec = 0;

    min = Math.floor(seconds / 60);
    sec = seconds - min * 60;
    document.getElementById('timer').innerHTML = "Time : " + ((min > 10) ? min : ("0" + min)) + ":" + (sec > 10 ? sec : ("0" + sec));
    if (seconds > 60 * 100 - 1) {
        document.getElementById('timer').innerHTML = "∞";
    }
}

var score = 0;
function increaseScoreHTML() {
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
}

function insetGameStart(insect) {
    section_list[1].classList.add('up');
    console.log(section_list);
    insectImg = insect;
    setInterval(timer, 1000);
    createInsect();
}

function addInsect() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 2000);
}

function createInsect() {
    var insectDiv = document.createElement('div');
    const game_container = document.querySelector('.game_board');
    const { x, y } = getRandomLocation();
    insectDiv.classList.add('insect');
    insectDiv.style.left = `${x}px`;
    insectDiv.style.top = `${y}px`;
    insectDiv.innerHTML = `<img src="img/${insectImg}.png" arc="img" style="transform: rotate(${Math.random() * 360}deg)"/>`;
    ;
    insectDiv.addEventListener('click', catchInsect);

    game_container.appendChild(insectDiv);
}

function catchInsect() {
    increaseScoreHTML();
    this.classList.add('catched');
    setTimeout(() => { this.remove(); }, 2000);
    addInsect();
}



function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;

    return {
        x,
        y
    };
}