let count = 0;
const countElement = document.getElementById("count");
const addDonutbutton = document.getElementById("add-donut");

let autoClickerCount = 0;
const autoClickerElement = document.getElementById("auto-clicker");
const purchaseAutoClickerButton = document.getElementById(
  "purchase-auto-clicker"
);
const activateAutoClickersButton = document.getElementById(
  "activate-auto-clickers"
);
const stopAutoClickersButton = document.getElementById("stop-auto-clickers");

let autoClickerCost = 100;
let autoClickerInterval;

//function to increment donut count
const incrementCount = () => {
  count++;
  countElement.textContent = count;
}

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
addDonutbutton.addEventListener("click", incrementCount);
purchaseAutoClickerButton.addEventListener("click", purchaseAutoClicker);
activateAutoClickersButton.addEventListener("click", activateAutoClickers);
stopAutoClickersButton.addEventListener("click", stopAutoClickers);
