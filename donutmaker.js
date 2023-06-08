let count = 0;
const countElement = document.querySelector('count');
const addDonutbutton = document.querySelector('add-donut')

let autoClickerCount= 0;
const autoClickerElement = document.querySelector('auto-clicker');
const purchaseAutoClickerButton = document.querySelector('purchase-auto-clicker');
const activateAutoClickersButton = document.querySelector('activate-auto-clickers');

let autoClickerCost = 100;
let autoClickerInterval;

//function to increment donut count 
const incrementCount =() =>{
  count++;
  countElement.textContent = count;
};

//function to purchase auto clicker
const purchaseAutoClicker = () => {
  if ( count >= autoClickerCost){
    count -= autoClickerCost;
    autoClickerCount++;
    countElement.textContent = count;
    autoClickerElement.textContent = autoClickerCount;

    autoClickerCost = math.round(autoClickerCost * 1.1);
    purchaseAutoClickerButton.textContent = `Purchase Auto Clicker (${autoClickerCost} donuts)`;
  }
};
