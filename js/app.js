// MATERIAL CLASSES BELOW
// (number, question, answer, resource)

class Item {
    constructor(number, question, answer, resource){
        this.number = number;
        this.question = question;
        this.answer = answer;
        this.resource = resource;
    };
    addButton=()=>{
        console.log(`${this.number}`);
    };
};

const one = new Item(1, "What is your favorite color?", "blue", "video");
console.log(one);

const two = new Item(2, "What is your favorite sport?", "soccer", "article");
console.log(two);

const three = new Item(3, "What is your favorite hobby?", "drawing", "comic");
console.log(three);

const four = new Item(4, "What is your favorite movie?", "movie", "poster");
console.log(four);


// TESTING

$('body').append(`<div class="test">testing: new div with class of test!</div>`);
$('body').append(`<div class="item">${four.question}</div>`);


// PSEUDOCODE
// 1. On page load, landing page will prompt user to enter their name and to select 
//  "Begin Game."
// 2. A brief intro screen will appear that establishes the need/purpose for learning 
//  about the topics the game will cover. Optional: preview of question and resource 
// types as well.
// 3. 

