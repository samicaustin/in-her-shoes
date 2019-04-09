// POINT TRACKER
let points = 0;
addPoint = () => {
    points++;
    $(`.left`).empty();
    $(`.left`).append(`Points: <div class="points">${points}</div>`);
    console.log(points);
};


// MATERIAL CLASSES BELOW
class Item {
    constructor(number, next, question, answer, option1, option2, explanation){
        this.number = number;
        this.next = next;
        this.question = question;
        this.answer = answer;
        this.option1 = option1;
        this.option2 = option2;
        this.explanation = explanation;
    };

    // Figure out how to shuffle elements later--hardcoded for now.
    loadOptions = () => {
        $(`.footer`).empty();
        if (this.number === 1) {
            $(`.footer`).append(`
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option1}</button>
            <button class="incorrect">${this.option2}</button>
             `);
        } else if (this.number === 2) {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="incorrect">${this.option2}</button>
            <button class="correct">${this.answer}</button>
             `);
        } else if (this.number === 3) {
            $(`.footer`).append(`
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option1}</button>
            <button class="incorrect">${this.option2}</button>
             `);
        } else if (this.number === 4) {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option2}</button>
             `);
        } else if (this.number === 5) {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="incorrect">${this.option2}</button>
            <button class="correct">${this.answer}</button>
             `);
        } else if (this.number === 6) {
            $(`.footer`).append(`
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option1}</button>
            <button class="incorrect">${this.option2}</button>
             `);
        } else if (this.number === 7) {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option2}</button>
             `);
        } else if (this.number === 8) {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option2}</button>
             `);
        } else if (this.number === 9) {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="incorrect">${this.option2}</button>
            <button class="correct">${this.answer}</button>
             `);
        } else {
            $(`.footer`).append(`
            <button class="incorrect">${this.option2}</button>
            <button class="incorrect">${this.option1}</button>
            <button class="correct">${this.answer}</button>
             `);
        } 
        
    };

    loadQuestion = () => {
        $(`.main`).empty();
        $(`.main`).append(`<div class="question"> ${this.number}. ${this.question}</div>`);
        $(`.right`).empty();
        $(`.right`).append(`<br> Question: <br> ${this.number} of 10`);
    };

    clickCorrect = () => {
        $('body').on(`click`, '.correct', () => {
        $(`.main`).empty();
        $(`.main`).append(`<div class="answer">Correct. <br>${this.answer}</div><br>${this.explanation}`);
        $(`.footer`).empty();
        $(`.footer`).append(`<button class="next-button">Next Question</button>`);
        $(`.topright`).empty();
        $(`.topright`).append(`<br> Question: <br> ${this.number} of 10`);
    });
    };

    clickIncorrect = () => {
        $('body').on(`click`, '.incorrect', () => {
        $(`.main`).empty();
        $(`.main`).append(`<div class = "explanation">Not quite. <br>${this.explanation}</div>`);
        $(`.footer`).empty();
        $(`.footer`).append(`<button class="next-button">Next Question</button>`);
        $(`.topright`).empty();
        $(`.topright`).append(`<br> Question: <br> ${this.number} of 10`);
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

const one = new Item(1, 2, "J is a Black woman who has been working as a highly-successful mid-level administrator at her company for four years. She works with a few other women, but at any given point in her day, she is the only person of color in the room. She woke up this morning feeling extremely sick, but has an important presentation today. What will J do?", 
"She will do her presentation and accomplish more than usual.", 
"She should stay home and take care of herself--the presentation can be rescheduled!", 
"She should go to work but take it easy so that she can recover more quickly.", 
"J, like many people who are the only person of a given race, gender, or sexuality at their workplace, feels extra pressure to preform. She says, 'I need to come across as more than proficient, more than competent, more than capable. I have to be on all the time.'");

const two = new Item(2, 3, "What is your favorite sport?", "soccer", "option1", "option2", "option3", "article");
const three = new Item(3, 4, "What is your favorite hobby?", "drawing", "option1", "option2", "option3", "comic");
const four = new Item(4, 5, "What is your favorite movie?", "movie", "option1", "option2", "option3", "poster");
const five = new Item(5, 6, "What is your favorite Spice Girl?", "Scary", "option1", "option2", "option3", "image");
const six = new Item(6, 7, "Another question", "another answer", "option1", "option2", "option3", "another resource");
const seven = new Item(7, 8, "question seven", "answer seven", "option1", "option2", "option3", "comic");
const eight = new Item(8, 9, "eighth question", "eighth answer", "option1", "option2", "option3", "eighth resource");
const nine = new Item(9, 10, "ninth question", "ninth answer", "option1", "option2", "option3", "article");
const ten = new Item(10, 11, "tenth and final question", "tenth and final answer", "option1", "option2", "option3", "resource");

// LANDING PAGE
$(`.header`).append(`<header>IN HER SHOES</header>`);
$('.main').append(`<div class="landing"> <br> 
<h1>A working woman's life isn't easy. <br> 
Do you have what it takes to walk in her shoes?</h1>
</div>`);

$(`.right`).append(`
    <b>Source Info</b><br>
    All content from In Her Shoes is based off of data from <a href="https://www.mckinsey.com/featured-insights/gender-equality/women-in-the-workplace-2018">Women in the Workplace 2018</a>:
    the largest comprehensive study of the state of women in corporate America. <br>
    `);
    $(`.left`).append(`<b>Gameplay</b><br>
      
    Gain points by anticipating choices that you think will improve or maintain each woman's safety, 
    security, and success at work by condidering the following scenarios carefully. 
    `);

$(`.footer`).append(`<input type="text" name="name" class="name-input" placeholder="What's your name?"/>`);
$('.footer').append(`<button class="name-button">Enter</button>`);

let name;
$('.name-button').on('click', () => {
    name = $('.name-input').val();
    loadIntro(name);
});

const loadIntro = (name) => {
    $(`.footer`).empty();
    $(`.left`).empty();
    $(`.right`).empty();
    $(`.landing`).replaceWith(`<div class="intro">
       <i>In today's professional world, women continue to be vastly underrepresented
       and mistreated at every level. <br><br> For women of color, it’s even worse. <br> <br>
        Progress isn’t just slow-—it’s stalled. </i><br><br>
       <h1> Take a walk in her shoes, ${name}, to find out why.</h1> <br>
      
    </div>`);
    $(`.footer`).append(`<button class="begin-button">Begin</button>`);
    loadFirst();
};



// RENDERING FIRST QUESTION
const loadFirst = () => {
    $(`body`).on('click', `.begin-button`, () => {
        $(`.left`).append(`Points: <div class="points">${points}</div>`);
        $(`.right`).append(`Question: <br> 1 of 10`);
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

// Array for eventual refactoring:
// const itemsArray = [one, two, three, four, five, six, seven, eight, nine, ten];

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