const createCandyButton = document.querySelector('.create-candies') as HTMLElement;
const buyLollipopButton = document.querySelector('.buy-lollypops') as HTMLElement;
const candyMachine = document.querySelector('.candy-machine') as HTMLElement;
const candyCounter = document.querySelector('.candies') as HTMLElement;
const lollipopCounter = document.querySelector('.lollypops') as HTMLElement;
const speedCounter = document.querySelector('.speed') as HTMLElement;
const candyRainButton = document.querySelector('.candy-rain') as HTMLElement;

let candy: number = 0;
let lollipop: number = 0;
let speed: number = 0;
let candyRainActive: boolean = false;

function createCandy() {
  candy += 1;
  render();
}

function buyLollipop() {
  if (candy >= 100) {
    candy -= 100;
    lollipop += 1;
    render();
  }
}
function render() {
  candyCounter.innerHTML = candy.toFixed(1);
  lollipopCounter.innerHTML = lollipop.toString();
  speedCounter.innerHTML = speed.toString();
}

function candysPerSecond() {
  speed = lollipop / 10;
  candy += speed;
  render();
}

function candyRain() {
  if (candyRainActive === false) {
    candyRainActive = true;
    const interval = setInterval(createCandy, 100);
    setTimeout(() => {
      clearInterval(interval);
      candyRainActive = false;
    }, 3000);
  }
}

setInterval(candysPerSecond, 1000);

createCandyButton.addEventListener('click', createCandy);
buyLollipopButton.addEventListener('click', buyLollipop);
candyRainButton.addEventListener('click', candyRain);

