let switchCnt = document.querySelector('#switch-cnt');
let switchC1 = document.querySelector('#switch-c1');
let switchC2 = document.querySelector('#switch-c2');
let switchCircle = document.querySelector('.switch_circle');
let switchBtn = document.querySelector('.switch-btn');
let aContainer = document.querySelector('#a-container');
let bContainer = document.querySelector('#b-container');
let allButtons = document.querySelector('#submit');

const getButtons = (e) => e.preventDefault();

const mainFunc = (e) => {
    for (let i = 0; i < allButtons.clientHeight; i++) {
        allButtons[i].addEventListener('click', getButtons);
    }
}

window.addEventListener('load', mainFunc);
