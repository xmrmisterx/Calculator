const display = document.getElementById('displayBox');

function add (num1, num2) {

    return (Math.round((num1 + num2) * 10000000000)/10000000000);  // This iteration of the add function uses Math.round to round off to 10 decimal places, achieved by increasing our answer by 10 decimal places, then rouding off to the nearest integer using Math.round, then dividing to get back to 10 decimal places.
}

function subtract (num1, num2) {
    return (Math.round((num1 - num2) * 10000000000)/10000000000);
}

function multiply (num1, num2) {

    return (Math.round((num1 * num2) * 10000000000)/10000000000);
}

function divide (num1, num2) {
    
    if(num2 === 0) {    // This part of the code gives an error message when dividing by 0, per the assignment.
        return 'You can\'t divide by 0';

    } else return (Math.round((num1 / num2) * 10000000000)/10000000000);
}

let operator ='';
let num1=''
let num2=''
let answer=''
let numCounter = 0;     // We use these 3 counters to keep track of numbers input, operators input, and decimals input. Calculator functionality changes depending on these variables.
let operatorCounter = 0;
let decimalCounter = 0;

function operate (operator, num1, num2) {
    
    let total; // The key to having this operate function work is to let a variable be equal to the 'answer' then return that answer, otherwise the operator functions inside don't return it the numbers we want.

    switch (operator){
        case '+':
            // add(num1,num2)
            total = add(num1,num2);
            break;
        case '-':
            total = subtract(num1,num2)
            break;
        case '*':
            total = multiply(num1,num2)
            break;
        case '/':
            total = divide(num1,num2)
            break;
        default:
            return 'Error';
    }

    return total;
}

function popDisplay (inputValue) {  // This function populates the display with a variable inputvalue.
    
    display.value += inputValue;    // We use += so we can enter a string of numbers, among other things.

    if (display.value.includes('.')) {  // If there is a decimal within the display, set decimal counter to 1, otherwise to 0.
        decimalCounter=1;

    } else decimalCounter=0;
}

const addBtn = document.getElementById('addBtn'); // We need to create links between the relevant elements in our html to this javascript file, in order to call methods on them.
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn =  document.getElementById('multiplyBtn');
const divideBtn =  document.getElementById('divideBtn');
const equalBtn = document.getElementById('equalBtn');
const decimalBtn = document.getElementById('decimalBtn');
const clearBtn = document.getElementById('clearBtn');
const zeroBtn = document.getElementById('zeroBtn');
const oneBtn= document.getElementById('oneBtn');
const twoBtn =  document.getElementById('twoBtn');
const threeBtn = document.getElementById('threeBtn');
const fourBtn = document.getElementById('fourBtn');
const fiveBtn = document.getElementById('fiveBtn');
const sixBtn =  document.getElementById('sixBtn');
const sevenBtn =  document.getElementById('sevenBtn');
const eightBtn =  document.getElementById('eightBtn');
const nineBtn = document.getElementById('nineBtn'); 

function operatorBtnClick (operatorValue) { // We wanted to create a general function to occur when the operator btn is hit. This code used for the +,-,*, and / operators.

    if (isNaN(display.value) || display.value ==='' || operatorCounter===1) {   // When the display is blank, or not a number, or there's an active operator... show an error message and reset all the important variables.
        operator='';
        num1= '';
        num2= '';
        answer='';
        numCounter=0;
        operatorCounter=0;
        display.value = 'Error';
    } else if (num1 === ''){    // If num1 is not defined yet, set it to the display value, then erase the display and show the operator inputted.
        operator = operatorValue;
        num1 = display.value;
        display.value = '';
        popDisplay(operatorValue);
        numCounter=0;
    } else {
        if (operator === '') {  // If there is no operator saved, set the inputted operator to be equal to the operator variable.
            operator = operatorValue;
        }
        num2 = display.value;   // Save the numbers on the display as num2, then perform the operate function on num1,num2, using the operator set. At this point, the operator buttons function effectively as the equals button.
        answer = operate(operator, Number(num1), Number(num2));
        display.value = ''; // Reset the display, then display the answer, and save the answer as num1, since it is on the display and we can perform functions on it, even though it wasn't input technically.
        popDisplay(answer);
        num1 = answer; 
        numCounter=0;
        operator = operatorValue;   // Save the operator just input and set the operatorCounter to 1 so we know there is an operator saved.
        operatorCounter=1;
    }
}

function numBtnClick (numValue) {   // Similarly we have a numBtnClick generic function for all the possible numbers (0 to 9).

        if (display.value.includes('.') && operator==='') { // This allows us to use a leading decimal and still add to the display screen, instead of erasing it.
            if (num2 !== '') {  // This part of the code allows us to input numbers after performing the operate function when hitting the = btn, without adding to the answer
                display.value= '';
            }
            
            popDisplay(numValue);   // Show the number we just input, then set the numCounter to 1, and operatorCounter to 0.
            numCounter=1;
            operatorCounter=0;
        } else if ((isNaN(display.value)) || numCounter < 1) {     // If the display is blank/error message, or the numCounter is 0, we want to erase the display before adding numbers to it.
            display.value ='';
            popDisplay(numValue);
            numCounter=1;
            operatorCounter=0;
        } else {    // This is the most general function when we hit a number, we'll add it to the display, set the numcounter to 1, and reset the operatorCounter.
            popDisplay(numValue);
            numCounter=1;
            operatorCounter=0;
    }
}

function decimalBtnClick () {   // We wanted a generic function for the decimal button.

    if (decimalCounter=== 0) {  // When the decimalCounter is 0, add a decimal to the display and set decimalCounter to 1.
        display.value+= '.';
        decimalCounter= 1;
    }   
}

function clearData () {     // This is the generic function when 'c', the clear button, is hit, resetting all relevant variables.
    operator='';
    num1= '';
    num2= '';
    answer='';
    display.value = '';
    numCounter=0;
    operatorCounter=0;
    decimalCounter=0;
}

zeroBtn.addEventListener('click', () => {numBtnClick(0)});  // We add the event listeners to all the html buttons, and link them to their respective functions.
oneBtn.addEventListener('click', () => {numBtnClick(1)});
twoBtn.addEventListener('click',() => {numBtnClick(2)});
threeBtn.addEventListener('click', () => {numBtnClick(3)});
fourBtn.addEventListener('click', () => {numBtnClick(4)});
fiveBtn.addEventListener('click', () => {numBtnClick(5)});
sixBtn.addEventListener('click', () => {numBtnClick(6)});
sevenBtn.addEventListener('click', () => {numBtnClick(7)});
eightBtn.addEventListener('click', () => {numBtnClick(8)});
nineBtn.addEventListener('click', () => {numBtnClick(9)});

clearBtn.addEventListener('click', () => {clearData()});
addBtn.addEventListener('click', () => {operatorBtnClick('+')});
subtractBtn.addEventListener('click', () => {operatorBtnClick('-')});
multiplyBtn.addEventListener('click', () => {operatorBtnClick('*')});
divideBtn.addEventListener('click', () => {operatorBtnClick('/')});
decimalBtn.addEventListener('click', () => {decimalBtnClick()});

equalBtn.addEventListener('click', () => {

    if (isNaN(display.value) || operatorCounter===1) {  // If the display is not a number, or operator was hit before this, give an error message and reset relevant variables.
        display.value= 'Error';
        operator='';
        num1= '';
        num2= '';
        answer='';
        numCounter=0;
        operatorCounter=0;
        // clearData(); // we don't want to cleardata bc that will not show the 'error' message as intended

    } else {    // If used like a normal equal btn, num2 becomes the number on the display, then perform the operate function...
        num2 = display.value;
   
        answer = operate(operator, Number(num1), Number(num2));
        display.value = ''; // Reset the display, then display the answer.
        popDisplay(answer); 
        num1='';  // Reset relevant variables.
        // operator= '';
        numCounter=0;
        operatorCounter=0;
        operator='';
    }    
});
