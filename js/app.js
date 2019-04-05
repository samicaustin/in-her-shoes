// MATERIAL CLASSES BELOW
// (number, question, answer, resource)

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
        $(`.main`).append(`<div class="question"> ${this.question}</div>`);
    };

    clickCorrect = () => {
        $('body').on(`click`, '.correct', () => {
        $(`.main`).empty();
        $(`.main`).append(`${this.answer}`);
        $(`.footer`).empty();
        $(`.footer`).append(`<button class="next-button">Next Question</button>`)
    });
    };

    clickIncorrect = () => {
        $('body').on(`click`, '.incorrect', () => {
        $(`.main`).empty();
        $(`.main`).append(`${this.resource}`);
        $(`.footer`).empty();
        $(`.footer`).append(`<button class="next-button">Next Question</button>`)
        $(`body`).on()
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
            )};
            };
    
    };

// OBJECT INSTANCES!

const one = new Item(1, 2, "What is your favorite color?", "blue", "video");
const two = new Item(2, 3, "What is your favorite sport?", "soccer", "article");
const three = new Item(3, 4, "What is your favorite hobby?", "drawing", "comic");
const four = new Item(4, 5, "What is your favorite movie?", "movie", "poster");
const five = new Item(5, 6, "What is your favorite Spice Girl?", "Scary", "image");

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
    $(`.footer`).append(`<button class="next-button">Begin</button>`);
};



// RENDERING FIRST QUESTION
$(`body`).on('click', `.next-button`, () => {
    one.loadOptions();
    one.loadQuestion();
    one.clickCorrect();
    one.clickIncorrect();
    one.loadNext();
});


// One day the below will be refractured into the class and it'll be so beautiful 


// $(`body`).on('click', `.next-two`, () => {
//     two.loadOptions();
//     two.loadQuestion();
//     two.clickCorrect();
//     two.clickIncorrect();
// });

// $(`body`).on('click', `.next-three`, () => {
//     three.loadOptions();
//     three.loadQuestion();
//     three.clickCorrect();
//     three.clickIncorrect();
// });

// $(`body`).on('click', `.next-four`, () => {
//     four.loadOptions();
//     four.loadQuestion();
//     four.clickCorrect();
//     four.clickIncorrect();
// });

// $(`body`).on('click', `.next-five`, () => {
//     five.loadOptions();
//     five.loadQuestion();
//     five.clickCorrect();
//     five.clickIncorrect();
// });




// // RENDERING EVERY OTHER QUESTION BUT THE LAST ONE ==> hoping to add this as a method using
// "next" attribute, but not sure how to pull off quite yet

// loadNext = () => {
//     $(`body`).on('click', `.next`, () => {
//         console.log(`${this.next}`);
//         // this.loadOptions();
//         // this.loadQuestion();
//         // this.clickCorrect();
//         // this.clickIncorrect();
//     });
// };