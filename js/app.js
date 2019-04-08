// MATERIAL CLASSES BELOW
let points = 0;
addPoint = () => {
    points++;
    $(`.left`).empty();
    $(`.left`).append(`Points: <div class="points">${points}</div>`);
    console.log(points);
};

class Item {
    constructor(number, next, question, answer, resource){
        this.number = number;
        this.next = next;
        this.question = question;
        this.answer = answer;
        this.resource = resource;
    };

    loadOptions = () => {
        $(`.footer`).empty();
        $(`.footer`).append(`
            <button class="correct">Option A</button>
            <button class="incorrect">Option B</button>
            <button class="incorrect">Option C</button>
            <button class="incorrect">Option D</button>
             `);
    };

    loadQuestion = () => {
        $(`.main`).empty();
        $(`.main`).append(`<div class="question"> ${this.number} ${this.question}</div>`);
    };

    clickCorrect = () => {
        $('body').on(`click`, '.correct', () => {
        $(`.main`).empty();
        $(`.main`).append(`${this.answer}`);
        $(`.footer`).empty();
        $(`.footer`).append(`<button class="next-button">Next Question</button>`);
    });
    };

    clickIncorrect = () => {
        $('body').on(`click`, '.incorrect', () => {
        $(`.main`).empty();
        $(`.main`).append(`${this.resource}`);
        $(`.footer`).empty();
        $(`.footer`).append(`<button class="next-button">Next Question</button>`);
    });
    };

    loadNext = () => {
        if (this.next === 2) {
            $(`body`).on('click', `.next-button`, () => {
            two.loadOptions();
            two.loadQuestion();
            two.clickCorrect();
            two.clickIncorrect();
            two.loadNext();
            }
        )} else if (this.next === 3) {
            $(`body`).on('click', `.next-button`, () => {
            three.loadOptions();
            three.loadQuestion();
            three.clickCorrect();
            three.clickIncorrect();
            three.loadNext();
            }
        )} else if (this.next === 4) {
            $(`body`).on('click', `.next-button`, () => {
            four.loadOptions();
            four.loadQuestion();
            four.clickCorrect();
            four.clickIncorrect();
            four.loadNext();
            }
        )} else if (this.next === 5) {
            $(`body`).on('click', `.next-button`, () => {
            five.loadOptions();
            five.loadQuestion();
            five.clickCorrect();
            five.clickIncorrect();
            five.loadNext();
            }
        )}  else if (this.next === 6) {
            $(`body`).on('click', `.next-button`, () => {
                six.loadOptions();
                six.loadQuestion();
                six.clickCorrect();
                six.clickIncorrect();
                six.loadNext();
                }
        )} else if (this.next === 7) {
            $(`body`).on('click', `.next-button`, () => {
                seven.loadOptions();
                seven.loadQuestion();
                seven.clickCorrect();
                seven.clickIncorrect();
                seven.loadNext();
                }
        )}  else if (this.next === 8) {
            $(`body`).on('click', `.next-button`, () => {
                eight.loadOptions();
                eight.loadQuestion();
                eight.clickCorrect();
                eight.clickIncorrect();
                eight.loadNext();
                }
        )}else if (this.next === 9) {
            $(`body`).on('click', `.next-button`, () => {
                nine.loadOptions();
                nine.loadQuestion();
                nine.clickCorrect();
                nine.clickIncorrect();
                nine.loadNext();
                }
        )} else if (this.next === 10) {
            $(`body`).on('click', `.next-button`, () => {
                ten.loadOptions();
                ten.loadQuestion();
                ten.clickCorrect();
                ten.clickIncorrect();
                ten.loadNext();
                }
        )} else {
            $(`body`).on('click', `.next-button`, () => {
            loadResults();
            }
        )}; 
    };
    
    };
    
$('body').on(`click`, '.correct', () => {
addPoint();
});

// OBJECT INSTANCES and ITEMS ARRAY TO LOOP THROUGH!

const one = new Item(1, 2, "What is your favorite color?", "blue", "video");
const two = new Item(2, 3, "What is your favorite sport?", "soccer", "article");
const three = new Item(3, 4, "What is your favorite hobby?", "drawing", "comic");
const four = new Item(4, 5, "What is your favorite movie?", "movie", "poster");
const five = new Item(5, 6, "What is your favorite Spice Girl?", "Scary", "image");
const six = new Item(6, 7, "Another question", "another answer", "another resource");
const seven = new Item(7, 8, "question seven", "answer seven", "comic");
const eight = new Item(8, 9, "eighth question", "eighth answer", "eighth resource");
const nine = new Item(9, 10, "ninth question", "ninth answer", "article");
const ten = new Item(10, 11, "tenth and final question", "tenth and final answer", "resource");

const itemsArray = [one, two, three, four, five, six, seven, eight, nine, ten];

// PSEUDOCODE
// LANDING PAGE
$('.main').append(`<div class="landing">Landing page text here.</div>`);
$(`.footer`).append(`<input type="text" name="name" class="name-input" placeholder="What's your name?"/>`);
$('.footer').append(`<button class="name-button">Enter</button>`);

// make event listener on start button to load intro page
let name;
$('.name-button').on('click', () => {
    name = $('.name-input').val();
    loadIntro(name);
});

const loadIntro = (name) => {
    $(`.footer`).empty();
    $(`.landing`).replaceWith(`<div class="intro">
        Hello ${name}! Informational/contextual text here. Hello ${name}! Informational/contextual text here. 
        Hello ${name}! Informational/contextual text here. Hello ${name}! Informational/contextual text here. 
        Hello ${name}! Informational/contextual text here. Hello ${name}! Informational/contextual text here. 
        Hello ${name}! Informational/contextual text here. Hello ${name}! Informational/contextual text here. 
        Hello ${name}! Informational/contextual text here. Hello ${name}! Informational/contextual text here. 
    </div>`);
    $(`.footer`).append(`<button class="begin-button">Begin</button>`);
    loadFirst();
};



// RENDERING FIRST QUESTION
const loadFirst = () => {
    $(`body`).on('click', `.begin-button`, () => {
        $(`.left`).append(`Points: <div class="points">${points}</div>`);
        one.loadOptions();
        one.loadQuestion();
        one.clickCorrect();
        one.clickIncorrect();
        one.loadNext();

    });
};

// RESULTS
const loadResults = () => {
    $(`.main`).empty();
    $(`.main`).text(`You earned a total of ${points} points out of a possible 10.`)
    $(`.footer`).empty();
    $(`.footer`).append(`<button class = "try-again">Try Again?</button>`);
    $(`.footer`).on(`click`, `.try-again`, () => {
        location.reload();
    });
};



// Loop through array eventually for DRY code. Get everything to work first!

// const test = (itemsArray) => {
//     for (i = 0; i < itemsArray.length; i++){
//         $(`body`).on('click', `.next-button`, () => {
//             $(`.left`).append(`Points: <div class="points">${points}</div>`);
//             this.loadOptions();
//             this.loadQuestion();
//             this.clickCorrect();
//             this.clickIncorrect();
//             this.loadNext();
//         });
//     }
// };