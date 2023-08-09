// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const createCandyButton = document.querySelector('.create-candies');
const buyLollipopButton = document.querySelector('.buy-lollypops');
const candyMachine = document.querySelector('.candy-machine');
const candyCounter = document.querySelector('.candies');
const lollipopCounter = document.querySelector('.lollypops');
const speedCounter = document.querySelector('.speed');
const candyRainButton = document.querySelector('.candy-rain');

let candy:number = 0;
let lollipop: string = '🍭';
let speed: number = 0;
let candyRainActive: boolean = false;
