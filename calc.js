

let elements = {
    topResult: document.getElementById('top-result'),
    bottomResult: document.getElementById('bottom-result'),
    topInput: document.getElementById('top-input'),
    bottomInput: document.getElementById('bottom-input')
}

let tipPercentage = 0;
let bill = 0;
let amountOfPeople = 0;

function colorChange(){
const color = document.querySelectorAll('.button');
color.forEach((item)=>{
    item.style.backgroundColor = 'hsl(183, 100%, 15%)';
});
};

function fivePercent(){
    colorChange();
    tipPercentage = 5; 
    let five = document.getElementById('five');
    five.style.backgroundColor = 'hsl(172, 67%, 45%)';
};

function tenPercent(){
    colorChange();
    tipPercentage = 10; 
    let five = document.getElementById('ten');
    five.style.backgroundColor = 'hsl(172, 67%, 45%)';
};

function fifteenPercent(){
    colorChange();
    tipPercentage = 15; 
    let five = document.getElementById('fifteen');
    five.style.backgroundColor = 'hsl(172, 67%, 45%)';
};

function twentyFivePercent(){
    colorChange();
    tipPercentage = 25; 
    let five = document.getElementById('twenty-five');
    five.style.backgroundColor = 'hsl(172, 67%, 45%)';
};

function fiftyPercent(){
    colorChange();
    tipPercentage = 50; 
    let five = document.getElementById('fifty');
    five.style.backgroundColor = 'hsl(172, 67%, 45%)';
};

function submit(){
    if(elements.bottomInput.value > 0 && elements.topInput.value > 0 ){
        amountOfPeople = elements.bottomInput.value;
    bill = elements.topInput.value;
    let cut = (bill * .1) / amountOfPeople;
    elements.topResult.innerHTML = `$${(bill/amountOfPeople) + cut}`
    elements.bottomResult.innerHTML = `$${cut}`
    } else {
        alert('Please input valid bill and people amount.')
    };
};

function reset(){
    colorChange();
    tipPercentage = 0;
    bill = 0;
    amountOfPeople = 0;
    elements.bottomInput.value = 0;
    elements.topInput.value = 0;
};






