// MATERIAL CLASSES BELOW
// (number, question, answer, resource)

class Item {
    constructor(number, question, answer, resource){
        this.number = number;
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
    });
    };

    clickIncorrect = () => {
        $('body').on(`click`, '.incorrect', () => {
        $(`.main`).empty();
        $(`.main`).append(`${this.resource}`);
        $(`.footer`).append(`<button class="next-button">Next Question</button>`)
        $(`body`).on()
    });
    };
    
};

// OBJECT INSTANCES!

const one = new Item(1, "What is your favorite color?", "blue", "video");
const two = new Item(2, "What is your favorite sport?", "soccer", "article");
const three = new Item(3, "What is your favorite hobby?", "drawing", "comic");
const four = new Item(4, "What is your favorite movie?", "movie", "poster");
const five = new Item(5, "What is your favorite Spice Girl?", "Scary", "image");

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


// RENDERING EACH NEW QUESTION!
$(`body`).on('click', `.next-button`, () => {
    one.loadOptions();
    one.loadQuestion();
    one.clickCorrect();
    one.clickIncorrect();
});



