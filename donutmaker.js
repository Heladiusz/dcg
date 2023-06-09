const nav = document.querySelector("nav"); // Selects the <nav> element
const collapsibleNavBar = document.getElementsByClassName("collapsibleNavBar"); // Selects elements with the class "collapsibleNavBar"
let i;
// Attaches event listeners to the collapsibleNavBar elements
for (let i = 0; i < collapsibleNavBar.length; i++) {
  collapsibleNavBar[i].addEventListener("click", function () {
    this.classList.toggle("active"); // Toggles the "active" class
    const content = this.nextElementSibling; // Selects the next sibling element
    if (content.style.display === "block") {
      content.style.display = "none";
      nav.style.marginBottom = "0px"; // Updates the margin bottom of the <nav> element
    } else {
      content.style.display = "block";
      nav.style.marginBottom = "65px"; // Updates the margin bottom of the <nav> element
    }
  });
}

const openModal = (modalId) => {
  const modal = document.getElementById(`${modalId}Modal`);
  modal.style.display = "block";
}

const closeModal = (modalId) => {
  const modal = document.getElementById(`${modalId}Modal`)
 modal.style.display = "none"}

let count = 0;
const countElement = document.getElementById("count");
const donutButton = document.getElementById("donutButton");

let autoClickerCount = 0;
const autoClickerElement = document.getElementById("auto-clicker");
const purchaseAutoClickerButton = document.getElementById("purchase-auto-clicker");
const activateAutoClickersButton = document.getElementById("activate-auto-clickers");
const stopAutoClickersButton = document.getElementById("stop-auto-clickers");
const resetGameButton = document.getElementById("reset-game-button")

let autoClickerCost = 100;
let autoClickerInterval;

//function to increment donut count
const incrementCount = () => {
  count++;
  countElement.textContent = count;
};

//function to purchase auto clicker
const purchaseAutoClicker = () => {
  if (count >= autoClickerCost) {
    count -= autoClickerCost;
    autoClickerCount++;
    countElement.textContent = count;
    autoClickerElement.textContent = autoClickerCount;

    autoClickerCost = math.round(autoClickerCost * 1.1);
    purchaseAutoClickerButton.textContent = `Purchase Auto Clicker (${autoClickerCost} donuts)`;
  }
};

const activateAutoClickers = () => {
  autoClickerInterval = setInterval(() => {
    count += autoClickerCount;
    countElement.textContent = count;
  }, 1000);

  //stop the auto clickers after a certain period
  setTimeout(() => {
    stopAutoClickers();
  }, 1000);
};

//function to stop auto clickers
const stopAutoClickers = () => {
  clearInterval(autoClickerInterval);
};

//add event listeners
donutButton.addEventListener("click", incrementCount);
purchaseAutoClickerButton.addEventListener("click", purchaseAutoClicker);
activateAutoClickersButton.addEventListener("click", activateAutoClickers);
stopAutoClickersButton.addEventListener("click", stopAutoClickers);
resetButton.addEventListener('click', resetgame)

//resets the game - reload page
const resetgame = () => {
  location.reload();
}
