This calculator uses elements of HTML, CSS, and Javascript. The Javascript code includes creation of math functions, event listeners for the calculator buttons, and proper calculator logic. Below is an unedited copy of the javascript code with all the comments we made on it. Below that is a copy of the notes taken while creating the calculator.









// UNEDITED JS CODE...

// we're gonna start with 4 basic functions:add,subtract,multiply, and divide

const display = document.getElementById('displayBox'); // We can't use queryselect and look for 'text' it just doesn't work, so giving our text box an id of 'displayBox' then using 'getElementById' does work

function add (num1, num2) {

    // console.log (num1 + num2); // return is so much better than console.log in the inspector console, since it returns the value immediately and we don't have to type 'Enter' every function, then erase, and retype the same thing with different parameters. We spoke too soon... When we used this function in the upcoming 'operate' function, the 'return' seems to be registering an undefined value. I think it might be bc return cuts the function off short, but in both instances, the function should pretty much end right there? Maybe the if then and switch statements aren't done? Not sure...
 return (Math.round((num1 + num2) * 10000000000)/10000000000);  // This iteration of the add function uses Math.round to round off to 10 decimal places, achieved by increasing our answer by 10 decimal places, then rouding off the the nearest integer using Math.round, then dividing to get back to 10 decimal places.
// num1+num2;

}

function subtract (num1, num2) {
    // return (num1 - num2);
    return (Math.round((num1 - num2) * 10000000000)/10000000000);
}

function multiply (num1, num2) {
    // return (num1 * num2);
    return (Math.round((num1 * num2) * 10000000000)/10000000000);
}

function divide (num1, num2) {
    // return (num1/num2);
    
    if(num2 === 0) {
        return 'You can\'t divide by 0!';

    } else return (Math.round((num1 / num2) * 10000000000)/10000000000);
}

// We want an 'operate' function that takes an operator (what does that mean?) and 2 numbers as parameters. I think we are trying to mimic what a calculator does here? We pick numbers (parameters) and an operator (add,subtract...) and it calculates the value

let operator =''; // we want to define operator as a string, since the switch cases aren't matching
let num1=''
let num2=''
let answer=''
let numCounter = 0;
let operatorCounter = 0;
let decimalCounter = 0;
// display.value= '';
// let textBox = display.value;

// function errorMessage () {  // Plugging this into our 'operate' switch statement doesn't give us 'error' like we wanted, but undefined, not sure why.
//     return 'Error';
// }

function operate (operator, num1, num2) { // Still a little confused, do we want the operator to be an array that holds our 4 functions? The assigment description is not clear.
    
    let total; // The key to having this operate function work is to let a variable be equal to the 'answer' then return that answer, otherwise the operator functions inside don't return it, which causes the undefined results we saw earlier when using return vs console.log for the operator functions

    switch (operator){      // We decide to use a switch statement, bc we want to practice it and it looks cleaner. Usually the 'case' are numbers from the google examples, but I think here matching the 'operator' to the case string works.
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
            // errorMessage();
    }

    return total;
}

// our switch statement doesn't seem to be working, let's try if then statements

    // function operate (operator, num1, num2) {

    //     if(operator = 'add') {
    //         add(num1,num2);

    //         // console.log(a + b); // is there something wrong with our add function? let's try this. Hmmm... console.log did work, so there's something wrong with the return in our add function

    //         // console.log(operator,a,b); // let's test to see if the values are in there, the values are, but why is it undefined?
    //     } else if (operator== 'subtract') {
    //         subtract(num1,num2);
    //     } else if (operator== 'multiply') {
    //         multiply(num1,num2);
    //     } else if (operator== 'divide') {
    //         divide(num1,num2);
    //     } else {
    //         return 'Error';
    //     }

    //     // Think the problem is that operator is not showing up, let's return 'operator' and see what value we get

    //     // alert (operator);   // interesting, this seems to return the function equation as the operator, let's use a different word for addition and see
    //     // When we put 'addition' into the parameter as a string, it does recognize the string, but now the function is coming out undefined for some reason
    // }

  

function popDisplay (inputValue) {
    

    // const display = document.querySelector('text');
    // display.text = 'John';
    // console.log(display.textContent);
    // console.log(inputValue);

    // let processedValue = String(inputValue);
    display.value += inputValue;    // we're gonna use plus equals here bc we want the display to show all the numbers and functions we push. Actually we feel the += complicates it, and the functionality is the same, so we don't want a long string in our display. Actually we need +=, since they might do double digit numbers.
    // if (textBox.includes('.')) {
    if (display.value.includes('.')) {
        decimalCounter=1;
        // console.log(display.value,decimalCounter);
        // console.log(textBox,decimalCounter);

    } else decimalCounter=0;

    // console.log(display.value,decimalCounter);
    // console.log(textBox,decimalCounter);
    // console.log(inputValue,processedValue);

    // document.getElementById('displayBox').value = inputValue;

    // display.innerText = '4';
    // console.log(typeof display);
    // console.log(display.textContent);
}

const addBtn = document.getElementById('addBtn');   // This is just a test function to add an event listener to see the logistics of our calculator. We realized that we don't need to convert the operator symbols into a string, bc within each event listener addition, we can add the appropriate output, i.e. when they hit the '+' operate, we then convert that to the + string ('+') and save that value as the inputValue, so we don't need another function to process the operator values into strings.
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

// function checkErrorMessage () { // Is this necessary anymore after we put custom error messages in alot of our functions?
//     if (display.value === 'Error') {
//         display.value = '';
//     }
// }

function operatorBtnClick (operatorValue) {
    // if (isNaN(display.value) || display.value ==='') {
    if (isNaN(display.value) || display.value ==='' || operatorCounter===1) {   // Do we need this display.value is blank part of the code, isn't that part of the isNaN part?
        operator='';
        num1= '';
        num2= '';
        answer='';
        numCounter=0;
        operatorCounter=0;
        display.value = 'Error';
    } else if (num1 === ''){
        operator = operatorValue;
        num1 = display.value;
        display.value = '';
        popDisplay(operatorValue);
        numCounter=0;
        // operatorCounter=1;
        console.log('num1: '+ num1 + ' , num2: ' + num2 + ' , operator: ' + operator + ', numCounter: ' + numCounter + ' decimalCounter= ' + decimalCounter);
    } else {
        if (operator === '') {
            operator = operatorValue;
        }
        // operator = operatorValue;
        num2 = display.value;
        answer = operate(operator, Number(num1), Number(num2));
        display.value = '';
        popDisplay(answer); // Ugh, we finally figured out why our answer keeps showing 11, it's because we are adding 2 '1' strings together, let's convert them to numbers first. Using Number([string]) works, yes!
        num1 = answer;  // Do we need this answer1 saved up, and does it need to be converted into string form?
        numCounter=0;
        operatorCounter=1;
        // operator='';
        operator = operatorValue;
        console.log('num1: '+ num1 + ' , num2: ' + num2 + ' , operator: ' + operator + ', numCounter: ' + numCounter + ' decimalCounter= ' + decimalCounter);
    }
}

addBtn.addEventListener('click', () => {operatorBtnClick('+')});

// addBtn.addEventListener('click', () => {    // Test this for 1,2, and + operator
//     // popDisplay('+');    // we need to comment these lines out, bc the operator functions are more complicated than this
//     // operator = '+';
//     // if (typeof num1 === "undefined"){
//     if (isNaN(display.value)) {
//         operator='';
//         num1= '';
//         num2= '';
//         answer='';
//         display.value = 'Error';
//     } else if (num1 === ''){
//         operator = '+';
//         num1 = display.value;
//         display.value = '';
//         popDisplay('+');
//         console.log(num1,num2, operator);
//     } else {
       
//         operator = '+';
//         num2 = display.value;
//     //    let answer1 = operate(operator,Number(num1),Number(num2));
//        answer = operate(operator, Number(num1), Number(num2));
//        display.value = '';
//        popDisplay(answer); // Ugh, we finally figured out why our answer keeps showing 11, it's because we are adding 2 '1' strings together, let's convert them to numbers first. Using Number([string]) works, yes!
//        num1 = answer;  // Do we need this answer1 saved up, and does it need to be converted into string form?
//     //    operator = '';
//        console.log(num1,num2, operator,answer);
//     }

// });

function numBtnClick (numValue) {
    // if (operator === '') {
        // if (isNaN(display.value) || num1 !== '') { // If the display is not a number (essentially an error message or an operator) we want to clear out that display and display the number, otherwise display normally and add any additional numbers to the display.
        if (display.value.includes('.') && operator==='') { // This allows us to use a leading decimal and still add to the display screen, instead of erasing it.
            if (num2 !== '') {  // This part of the code allows us to input numbers after performing the operate function when hitting the = btn, without adding to the answer
                display.value= '';
            }
            
            popDisplay(numValue);
            numCounter=1;
            operatorCounter=0;
            console.log('num1: '+ num1 + ' , num2: ' + num2 + ' , operator: ' + operator + ', numCounter: ' + numCounter + ' decimalCounter= ' + decimalCounter);
        } else if ((isNaN(display.value)) || numCounter < 1) {
            display.value ='';
            popDisplay(numValue);
            numCounter=1;
            operatorCounter=0;
            console.log('num1: '+ num1 + ' , num2: ' + num2 + ' , operator: ' + operator + ', numCounter: ' + numCounter + ' decimalCounter= ' + decimalCounter);
        } else {
            // display.value ='';
            popDisplay(numValue);
            numCounter=1;
            operatorCounter=0;
            console.log('num1: '+ num1 + ' , num2: ' + num2 + ' , operator: ' + operator + ', numCounter: ' + numCounter + ' decimalCounter= ' + decimalCounter);
    }

    // popDisplay(numValue);
    // console.log(num1,num2, operator);
}

function decimalBtnClick () {   // What is the logic for a decimal btn? First off, on an empty screen, it still wants to display, since we can have decimals then numbers.

    if (decimalCounter=== 0) {
        display.value+= '.';
        decimalCounter= 1;
        console.log('num1: '+ num1 + ' , num2: ' + num2 + ' , operator: ' + operator + ', numCounter: ' + numCounter + ' decimalCounter= ' + decimalCounter);
    }   
}

function clearData () {
    operator='';
    num1= '';
    num2= '';
    answer=''; //Do we need to clear out the answer? Will there ever be a time that we display 'answer' without first setting its value to something?
    display.value = '';
    numCounter=0;
    operatorCounter=0;
    decimalCounter=0;
}

//     numBtnClick(1);

//     // if (operator === '') {
//     //     popDisplay(1);
//     //     console.log(num1,num2, operator);
//     // } else {
//     //     display.value ='';
//     //     popDisplay(1);
//     //     console.log(num1,num2, operator);
//     // }

//     // if (num1 === '') {

//     //     if (operator === '') {
//     //         popDisplay(1);
//     //         console.log(num1,num2, operator);
//     //     } else {
//     //         display.value ='';
//     //         popDisplay(1);
//     //         console.log(num1,num2, operator);
//     //     }
//     // } else {
//     //     num2 = display.value;

//     //    answer = operate(operator, Number(num1), Number(num2));
//     //    display.value = '';
//     //    popDisplay(answer); // Ugh, we finally figured out why our answer keeps showing 11, it's because we are adding 2 '1' strings together, let's convert them to numbers first. Using Number([string]) works, yes!
//     //    answer = num1;  // Do we need this answer1 saved up, and does it need to be converted into string form?
//     //    console.log(num1,num2, operator,answer);
//     // }
    
//     // console.log(num1,num2)
//     // num1 = 1;
    
// });

// oneBtn.addEventListener('click', function() {numBtnClick(1);}); // Yes! This is the notation that we've been looking for, to link a function to the event listener in 1 line. We have to use an 'anonymous function', then follow that with our function with its parameters in brackets, followed by a semicolon. Interesting, removing the semicolon has the same effect. Looking over this, it's the exact same arrow function, but just condensed into 1 line? Let's try writing our arrow function like this...

// function testFunction (value) {
//     console.log(value);
// }

// oneBtn.addEventListener('click', () => {numBtnClick(1); testFunction(4)}); // Yeah, this is the exact same thing as our anonymous function, I think the semicolon after our function only matters if there are multiple functions? Let's try making 2 functions. Hey, that's really cool, we can do 2 functions. Really good stuff.
// oneBtn.addEventListener('click', () => {checkErrorMessage(); numBtnClick(1)});
oneBtn.addEventListener('click', () => {numBtnClick(1)});
// twoBtn.addEventListener('click', () => {
//     // popDisplay(2);
//     // console.log(num1,num2)
//     // num2 = 2;

//     if (operator === '') {
//         popDisplay(2);
//         console.log(num1,num2, operator);
//     } else {
//         display.value ='';
//         popDisplay(2);
//         console.log(num1,num2, operator);
//     }
// });

// twoBtn.addEventListener('click',() => {checkErrorMessage(); numBtnClick(2)});
twoBtn.addEventListener('click',() => {numBtnClick(2)});

threeBtn.addEventListener('click', () => {numBtnClick(3)});

zeroBtn.addEventListener('click', () => {numBtnClick(0)});

divideBtn.addEventListener('click', () => {operatorBtnClick('/')});

equalBtn.addEventListener('click', () => {  // So on the equal button, we want to put in all the variables (operator, value1, value2) into an operate function, then display the result.
//    answer = operate(operator, num1, num2); // We want a variable for our answer, since if the person wants to operate on that answer, we have it saved as a new 'value1'. Ok so we still haven't figured out the logistics of saving the operator and the values. Let's talk it out... When we hit the oneBtn, it displays the value of 1, which should be stored as value1. Then we hit the operator, it displays the operator, and saves it. Then when we hit the 2nd value, it displays that, and also saves it. Only when we hit the equal sign does it run the operate function. 
   
// //    let answer1 = add(1,2); // When we just use the add function, with a return in its body instead of console.log, popdisplay works properly and shows the answer of '3', so what is wrong with our operate function that is incompatible with our add function?
//    popDisplay(answer); 
    // console.log(operator,num1, num2, answer1);
    // if (isNaN(display.value)) { 
    if (isNaN(display.value) || operatorCounter===1) { 
        display.value= 'Error';
        operator='';
        num1= '';
        num2= '';
        answer='';
        numCounter=0;
        operatorCounter=0;
        // clearData(); // we don't want to cleardata bc that will not show the 'error' message as intended

    } else {
        num2 = display.value;
   
        answer = operate(operator, Number(num1), Number(num2));
        display.value = '';
        popDisplay(answer); // Ugh, we finally figured out why our answer keeps showing 11, it's because we are adding 2 '1' strings together, let's convert them to numbers first. Using Number([string]) works, yes!
        // num1 = answer;  // Do we need this answer1 saved up, and does it need to be converted into string form?
        num1='';    // When using the equal btn to get an answer, we don't want to save num1 in order to have our desired functionality. This is the slight difference between the operator code and the equal btn code.
        // operator= '';
        numCounter=0;
        operatorCounter=0;
        operator='';
        // if (textBox.includes('.')) {
        //     decimalCounter=1;

        // } else decimalCounter=0;
        console.log('num1: '+ num1 + ' , num2: ' + num2 + ' , operator: ' + operator + ', numCounter: ' + numCounter + ' decimalCounter= ' + decimalCounter);
    }    
});

decimalBtn.addEventListener('click', () => {decimalBtnClick()});

clearBtn.addEventListener('click', () => {clearData()});

// document.getElementById('addBtn').addEventListener('click', popDisplay('+')); // This quite simply doesn't work, but it seems like it should, and would make the code shorter.



// NOTES WHILE CREATING THIS...

// 1) Our 'operate' function ran into a couple problems. First off, the 'operator' value wasn't being read by the function when we put it in. We solved this enclosing our 'operator' parameter in quotes when putting in the 'operate' function and its parameters within the inspector console. Secondly, once we matched the operator string with our comparison expression, the function was coming out undefined. After some debugging with console.log, we found that the 'alert' code in our functions was maybe ending the function too early and presumably leaving a value defined. Changing 'alert' to 'console.log' fixed the problem. 

// 2) Making the number and function buttons in html is very easy, but, how do we style all these numbers and buttons to look like an actual calculator? We're trying to brainstorm, but the only thing we know how to do, which we learned in the etch-a-sketch project, is create a class and then edit properties of the class in the css. Will this get the numbers in a box? How do we do a display for the calculator? Wait a minute, isn't a display just the text box that we used in the google website project? We thought we would style the calculator with css, but it seems alot of it is in the html as well. We can use <tr> to create the rows of our calculator, and <td> to create the columns of the calculator. Let's try it out and see how the calculator looks with just html. OK, we're able to put the buttons and display in a rows and columns using the html table div, but it's still offcentered. Play around with CSS and table options to get it more aligned. There's also th, which is apparently a table header, it's aligned center and bold, which we accidentally used bc we were just following w3school example. So... we start with <table> then we can have table headers '<th>', then we have table columns '<td>' and table rows '<tr>'. We added an extra </td> inside the '<td colspan="3"><input type="text"></td>' line after 'colspan=3>', which made our text box outside of the table. Took us like 30 mins to catch it.

// 3) We want functions that will display the number, or functions, when they are clicked on. So, we need to add an eventlistener to each button, that when clicked, stores that value, which then gets outputted into our display, probably via '.textContent='. Hmmm... it seems we can't 'document.queryselect' for 'text', so let's give it an id in the html? Wow, we thought it'd be easy to display the button pressed, just change the text.content, but we've tried alot of ways to set text.content, even inner.html, but the text box has not changed. Wow! We finally figured it out. Our original thought was correct, it was 'display.value=inputValue', but we thought we messed up bc when we typed 'display.v', the value property was not suggested, which usually means it's not a valid function. Wow, this took like several hours, boy do we feel dumb. 
// we need to figure out how to get the operator symbols to display when we push them, the numbers are easy to display. It's actually pretty easy, converting every symbol into a string makes it show up well on the display, we just need to make sure the eventlistener function converts the symbols into their string forms.

// 4) Now it's time to make the calculator work! We need to find a way to store the first input value (maybe as value1), the operator chosen (operatorValue), and the second value chosen (value2). Then, these parameters need to be input into an operate function and the display shows the solution. Let's test it with our test eventlistener. Let's add evenlisteners to 1 operator, 2 number btns, and an equal sign to test.
// We are getting an undefined for the operate function, and I think it's bc the operator is not showing up as a string, let's just to string it? hmm doesnt work. The console.log is printing the right answer, but is that answer being saved? Why is this not showing the correct value, not sure,let's test it some more. It seems our initial function is wrong somehow, it doesn't actually give an answer? Hmm.. we tested just the add function. With a console.log, it logs a 3, but says undefined as well, whereas a 'return num1 + num2' seems to show the correct answer but... why doesn't our operate function work with return? We solved it. It seems we need to set a variable for the 'answer', then set the operator functions to equal that answer and actually return that answer. If we don't return the answer in the operate function, the add/subtract/etc operations don't return the answers within the operate function.

// 5) The calculator should work with a big string of #s, such as 12 + 7 - 5 * 3, so we need to have a running display (use += for display.value?) and then run the operate function when they finally hit = button. I don't think we need more than 2 num variables, we just have to do the operations 2 numbers at a time, then have the saved answer as the new num1, when there is more operations left. What would be the logic for that? Ok, so we decided we don't have long strings in the display, bc that doesn't actually make the calculator function any better, but how do we handle multidigit numbers, like 12? I think the logic for this is to have the display.value keep +=, but once an operator (+,-,/,*) is hit, the display.value is saved as num1 or num2, and the operator is saved obviously. So, what is the logic is there a digit is num1 or num2? I think this logic should be in the operator event listener function. 'If num1=''', then 'display.value=num1', else dislay.value= num2. There also needs to be another logic, that involves calling the operate function outside of the 'equalBtn', and thats when there is a num1, operator, and num2. Actually within the operator num2 code, we can just call the operate function, so and change the display.value to that answer, and keep that answer as num1.
// To make the checking is num1,num2,and operator variables easier, and since we clear them by setting them to empty strings, we initially set all these values to be empty strings. This became a problem when we tried to add 1 + 1, but we were really adding '1' + '1', which kept giving us 11 and we didn't understand why bc the console.log said the num1 and num2 variables were indeed 1 and 1. To solve this, we convert them in the operate function to numbers using 'Number([insert string here])'.
// In order to make the calculator perform the 'operate' function everytime there is a num1 and num2, we need to put the operate procedure within the event listeners of the number buttons too. We changed the code for the oneBtn, but now it's performing the operate function at 1 + 1 step, rethinking it, we don't need it in the number Btns. The only time the answer should come up is when we hit the operator buttons or equal button right? Fix the oneBtn code to just look for operator being defined.
// We've encountered 2 more problems 1) putting in an error message is hard, we have to account for all the instances where doing something that we wouldn't expect should create an error message (currently we want to make sure error mesages are not saved in num1 or num2 as the display.value, and also that repeatedly hitting + or = doesn't result in nonsense, it should be showing an error message) 2) Once we hit an operator key, our btnevents are not correctly getting the number strings, that is, we can't do multiple number strings like 11 or 100, it's cutting it off, bc we reset the display when there is an operator? Test these things
// It seems adding an error check to the numBtn function actually fixed both these things. When inputting a number after an error message, it will erase it, just like it would erase an operator. This erasing of the display.value was also the reason the strings weren't adding, bc we were putting in the condition of whether the operator was defined or not, but the functionality that we want is actually asking whether the display.value is a number or not.
// We need to round off our answers with long decimals so they don't go pass the screen. From what we remember, the screen can take like 20 digits, so maybe round to the nearest 20th, or does a float only have a precision of 13 digits. Testing it out, our screen can probably take at least 25 digits. Let's first add the divide function to get answers with decimal places. While we were trying to add decimals, we found another bug. We tried to make the add function into a general operator function, and not sure if that caused this issue, or whether it was always here and we didn't run into it, but, hiting values and the + button repeatedly causes the values to not be correct. After the second plus, the value in there stays as a string messes up further addition. It seems sometimes we want to add the display.value, and sometimes we want to erase the value and display a new one, and the logic so far is not the functionality that we want. Let's first revert our addBTN code and see if it was something in there. It wasn't our code change. It's something to do with the display not erasing after we hit the operator button after we've already gotten the first answer, which means the numbers are getting added to the display. We need to erase the display when an answer is already there and we hit the operator again. Actually it seems as if the numberBtn push while there is an answer already is adding to the display, instead of erasing the display and adding to it. Alright, we kinda fixed it by adding to the condition of display value being NaN, another saying the operator is not empty, or that there's an operator, but this brings us back to our original problem, that being that when there is an operator, we can't add our strings together, it will keep deleting.
// Alright, I think we solved it by introducing the numCounter variable. We realized that whenver we have a single number, we don't need to add to the display string. When we have consecutive numbers, thats when we want to add to display string, so we use a numCounter to keep track of how many numbers are currently displayed. If there is at least 1 number, we'll add to the display string, but if there's no number, then we want to erase the display.value and add to an empty string. Adjusting the numCounter to tick up (++) or reset (numCounter=0) in the correct spots in our code (usually ticking up when a number is displayed, and resetting when an operator or error message is displayed).
// We encountered another bug where if we hit num1 plus num2 plus, which is when we'd get the answer, then the equals button, it would add that answer to the display string, essentially making the + then = btns add twice, which isn't the functionality that we want. I think we solved this by doing something similar, adding a operatorCounter that ticks to 1 when operate is called, except after an equal Btn, where it is reset to keep functionality. The operatorCounter is reset when a numBtn is hit, or the clear button.
// They weren't kidding when they said the logic for keeping track of the numbers for a simple calculator would be difficult. This logic took alot of trial and error, but hopefully we've fixed all the kinks. We still need to incorporate rounding of decimals into our functionality, maybe add the '/' operator to get decimals, or just the '.' button, or both.
// Let's first add the decimal button and see if that gives us any weird interactions. Actually, let's first incorporate the rounding off of decimal places. To do that, add the '/' function. Lol, we also need to add the '3' btn to actually get decimal answers. It seems by default the decimals go all the way to 16 places... The notation for rounding seems to be 'Math.round(numValue*xdecimalplaces)/xdecimalplaces'. The idea is that since the math.round function only rounds to nearest integer (neareast whole number) we have to multiply it by how many decimal places we want, then divide it by the same amount. I think we should put this rounding into our 4 math functions (add, divide, multiply, subtract), which should round it off all the time. Lol, apparently 16 digits was too much and the code couldn't handle it, so we settle on 10 digits.

// 6) There's one more bug that the project talked about, dividing by 0, which we never thought of, partly bc we've been debugging with just 2 numbers and the plus function. Let's see what happens when we try to divide by 0. Lol, we don't even have the 0 btn programmed, let's first add that. Interesting, so dividing by 0 says the answer is infinity, not sure why it wants us to throw an error message when by default there already is an answer, but we'll do it. I like this code in the divide portion of the code. We got the error message up, but found another bug in the code, When we hit '2/3', then hit '+', it should use the equal function, but instead is calling the '+' function, and adding. The code wants to be... when you have 2 numbers and an operator, it needs to operate using those parameters.
// I think we fixed this bug by doing 2 things. First, we set an additional if statement within the operatorclick function, asking if operator is empty, if it is, go ahead and set it to our operator value, if not, just use the operator value saved. This lets all the operator btns function as equal buttons. Secondly, once the operate function is called within the operatorclick function, we needed to set the operatorvalue to be equal to the operator just clicked in order to save it for the next operation. Without this portion of the code, or by resetting the operator, we get the previous operator being used instead of the current operator just clicked on, or an error message bc there is no operator for the operatorvalue, respectively.

// 7) I think we want to do one more part of this assignment, the decimal Btn portion, which is actually extra credit, but it's an important part of calculator functionality, so we want to try to code this. It mentions to let them only put in 1 decimal btn, which means to us a decimalCounter variable to keep track. When do we remove the decimalCounter, it's defintely not after every operate function, since some operate functions leave a decimal behind, and in those cases, we need to keep the decimal counter. It'd be much better code if we had some way to parse the string in our display and look for things, that's essentially what we are doing as the person using the calculator, but how do we put that into code. Googling reveals that there is a method called '.includes' that returns a boolean if a string includes something or not. Let's try that. I think if we put this code inside the popDisplay function, the decimal counter is always up to date. Ok, let's try it now.
// We've stumbled upon a couple problems. First, when we hit the decimal btn, then follow it up with a number, it is erasing the decimal Btn, instead of adding to it. This is either a result of our numBtnClick function thinking the decimal is NaN and erasing it, or the popDisplay not registering that there is a decimal point in the display? The second issue is that after we get answer with a decimal place, we can still hit the decimal btn and get another decimal. Seems the popDisplay not reading the '.' in the display? Setup a console.log for the decimal counter and see if it's tracking the decimals correctly. Let's first test the populate display function by itself by calling it through the console. We want to see if the '.includes' method is working properly.
// Hmmm.. we seemed to fix the decimal button going multiples times. Funnily enough, we put it to return an 'error' message, but it just doeesn't do anything, which is probably better functionality. Apparently we can use the code 'display.value.includes' even though, just like 'display.value', it does not autopop up as a possible method suggestion. Alright, now we need to fix the numBtnClick function to not erase our leading decimal.
// So, when we hit a number first, then hit decimal, then more numbers, everything works fine. However, when we lead off with a decimal, then hit a number, the decimal is erased. This seems to be a problem with the display checking conditions within the numBtnClick function. We added the first if statement asking if display has '.' in it, but it's very ineloquent, we couldn't figure out how to combine the first and 3rd if conditions.
// There's another issue with decimals with the operatorbtnclick function. It seems to not erase the display when a decimal is involved, and that's not the functionality that we want. Debug the operatorBtnClick function with the decimal now. I think we're gonna scratch the decimal inclusion, even though it's on our html lol. Let's just redo this without the decimal btn? We are getting really tired of all this debugging...
// Ok, with our new code, when there's a value with a decimal, it's not erasing the display and adding it to the answer, which is not what we want... Alright, we solved that bug where after dividing, the decimalcounter is at 1, and then when we hit a number, it adds to our answerdisplay, instead of erasing, by checking to see if there's an operator, if there is an operator, then we can erase, which fixed that display problem, but there's a similar problem when we hit the = btn. That operation does not set an operator value, which means the same thing happens there... We noticed in our debugging that the num2 is always there, so why not check for num2 instead of operator.
// Wow, we almost gave up bc it was getting really complicated with all the variables we had to keep track of, but in only 30 mins, I think we solved the 2 issues bugging us. We fixed the leading decimal problem by putting in a condition of not only having a decimal place, but no operator value as well. When we perform on operation, the operator value sticks around, so that means after an operate function, we'd want to delete the display for our next input. This code however conflicted with our equal btn, which didn't leave an operator behind. So, for this exception, we put another condition within that condition,saying that if num2 is not an empty string, which it's actually the only variable to have a value after an equal btn, then we can erase the display and put in the new input.