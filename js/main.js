/*----- constants -----*/ 
/*----- app's state (variables) -----*/ 
var count, input;

/*----- cached element references -----*/ 
var inEl = document.getElementById('input');
var countEl = document.getElementById('count');

/*----- event listeners -----*/ 
document.getElementById('plus').addEventListener('click', add);
document.getElementById('minus').addEventListener('click', subtract);

/*----- functions -----*/

function render(){
    countEl.textContent = count;
    if (count < 0){
        countEl.style.color = "red";
    }
}

function add(){
    input = inEl.value;
    count += parseInt(input);
    render();
}

function subtract(){
    input = inEl.value;
    count -= parseInt(input);
    render();
}


function initialize(){
    count = 0;
    inEl.value = 1;
    render();
}


initialize();