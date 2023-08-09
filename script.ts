// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const createCandyButton = document.querySelector('.create-candies') as HTMLElement;
const buyLollipopButton = document.querySelector('.buy-lollypops') as HTMLElement;
const candyMachine = document.querySelector('.candy-machine') as HTMLElement;
const candyCounter = document.querySelector('.candies') as HTMLElement;
const lollipopCounter = document.querySelector('.lollypops') as HTMLElement;
const speedCounter = document.querySelector('.speed') as HTMLElement;
const candyRainButton = document.querySelector('.candy-rain') as HTMLElement;

const lollipopIcon = '🍭';

let candy:number = 0;
let lollipop: number = 0;
let speed: number = 0;
let candyRainActive: boolean = false;

function createCandy() {
  candy++;
  candyCounter.innerHTML = candy.toFixed(1);
}

function buyLollipop() {
  if (candy >= 100) {
    candy -= 100;
    candyCounter.innerHTML = candy.toFixed(1);
    lollipop++;
    lollipopCounter.innerHTML += lollipopIcon;
    speed += 1;
    speedCounter.innerHTML = speed.toString();
  }
}

function candysPerSecond() {
  candy += lollipop / 10;
  candyCounter.innerHTML = candy.toFixed(1);
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

