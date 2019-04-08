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
    constructor(number, next, question, answer, option1, option2, option3, explanation){
        this.number = number;
        this.next = next;
        this.question = question;
        this.answer = answer;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
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
            <button class="incorrect">${this.option3}</button>
             `);
        } else if (this.number === 2) {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="incorrect">${this.option2}</button>
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option3}</button>
             `);
        } else if (this.number === 3) {
            $(`.footer`).append(`
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option1}</button>
            <button class="incorrect">${this.option2}</button>
            <button class="incorrect">${this.option3}</button>
             `);
        } else if (this.number === 4) {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option3}</button>
            <button class="incorrect">${this.option2}</button>
             `);
        } else if (this.number === 5) {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="incorrect">${this.option2}</button>
            <button class="incorrect">${this.option3}</button>
            <button class="correct">${this.answer}</button>
             `);
        } else if (this.number === 6) {
            $(`.footer`).append(`
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option1}</button>
            <button class="incorrect">${this.option2}</button>
            <button class="incorrect">${this.option3}</button>
             `);
        } else if (this.number === 7) {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option3}</button>
            <button class="incorrect">${this.option2}</button>
             `);
        } else if (this.number === 8) {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option3}</button>
            <button class="incorrect">${this.option2}</button>
             `);
        } else if (this.number === 9) {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="incorrect">${this.option3}</button>
            <button class="incorrect">${this.option2}</button>
            <button class="correct">${this.answer}</button>
             `);
        } else {
            $(`.footer`).append(`
            <button class="incorrect">${this.option2}</button>
            <button class="incorrect">${this.option1}</button>
            <button class="correct">${this.answer}</button>
            <button class="incorrect">${this.option3}</button>
             `);
        } 
        
    };

    loadQuestion = () => {
        $(`.main`).empty();
        $(`.main`).append(`<div class="question"> ${this.number}. ${this.question}</div>`);
        $(`.right`).empty();
        $(`.footer`).append(`<br> Question: <br> ${this.number} of 10`);
    };

    clickCorrect = () => {
        $('body').on(`click`, '.correct', () => {
        $(`.main`).empty();
        $(`.main`).append(`<div class="answer">${this.answer} is correct! </div>`);
        $(`.footer`).empty();
        $(`.footer`).append(`<button class="next-button">Next Question</button>`);
        $(`.footer`).append(`<br> Question: <br> ${this.number} of 10`);
    });
    };

    clickIncorrect = () => {
        $('body').on(`click`, '.incorrect', () => {
        $(`.main`).empty();
        $(`.main`).append(`<div class = "explanation">${this.explanation}</div>`);
        $(`.footer`).empty();
        $(`.footer`).append(`<button class="next-button">Next Question</button>`);
        $(`.footer`).append(`<br> Question: <br> ${this.number} of 10`);
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

const one = new Item(1, 2, "One in five senior leaders is a woman, and one in ___ is a woman of color.", "25", "20", "15", "10", "Nope--a lousy one in 25 senior leadership positions are filled by a woman of color.");
const two = new Item(2, 3, "What is your favorite sport?", "soccer", "option1", "option2", "option3", "article");
const three = new Item(3, 4, "What is your favorite hobby?", "drawing", "option1", "option2", "option3", "comic");
const four = new Item(4, 5, "What is your favorite movie?", "movie", "option1", "option2", "option3", "poster");
const five = new Item(5, 6, "What is your favorite Spice Girl?", "Scary", "option1", "option2", "option3", "image");

// roleplaying choose-your-own-adventure below?
const six = new Item(6, 7, "Another question", "another answer", "option1", "option2", "option3", "another resource");
const seven = new Item(7, 8, "question seven", "answer seven", "option1", "option2", "option3", "comic");
const eight = new Item(8, 9, "eighth question", "eighth answer", "option1", "option2", "option3", "eighth resource");
const nine = new Item(9, 10, "ninth question", "ninth answer", "option1", "option2", "option3", "article");
const ten = new Item(10, 11, "tenth and final question", "tenth and final answer", "option1", "option2", "option3", "resource");

// LANDING PAGE
$(`.header`).append(`<header>Women in the <br> Workplace 2018</header>`);
$('.main').append(`<div class="landing">
Women are doing their part. Now companies need to do their part, too.<br>

<p>Test your knowledge of today's workplace inequities and find out what you can do to fix things.</p>
</div>`);

$(`.footer`).append(`<input type="text" name="name" class="name-input" placeholder="What's your name?"/>`);
$('.footer').append(`<button class="name-button">Enter</button>`);

let name;
$('.name-button').on('click', () => {
    name = $('.name-input').val();
    loadIntro(name);
});

const loadIntro = (name) => {
    $(`.footer`).empty();

    // put the ABOUT THE STUDY in an optional hoverable space. 
//     $(`.left`).text(`
//     ABOUT THE STUDY
// Women in the Workplace 2018 is the largest comprehensive study of the state of women in corporate America. 
// Since 2015, LeanIn.Org and McKinsey & Company have published this report annually to give companies and 
// employees the information they need to advance women and improve gender diversity within their organizations.
//  McKinsey & Company also conducted similar research in 2012. `);
    
//     $(`.right`).text(`ABOUT THE STUDY
//     279 companies employing more than 13
//      million people shared their pipeline data and completed a survey of their HR practices. In addition, more 
//      than 64,000 employees were surveyed on their workplace experiences, and we interviewed women of different 
//      races and ethnicities and LGBTQ women for additional insights. Since 2015, 462 companies employing almost
//       20 million people have participated in the study.`);


    $(`.landing`).replaceWith(`<div class="intro">
        <h1>Are you ready to Lean In, ${name}? </h1> <br>
        For the last four years, companies have reported that they are highly committed to gender diversity. 
        But that commitment has not translated into meaningful progress.
        Women continue to be vastly underrepresented at every level. For women of color, it’s even worse. <br>
        <b>Progress isn’t just slow—it’s stalled. And we know why. Do you?</b> <br>

      
    </div>`);
    $(`.footer`).append(`<button class="begin-button">Begin</button>`);
    loadFirst();
};



// RENDERING FIRST QUESTION
const loadFirst = () => {
    $(`body`).on('click', `.begin-button`, () => {
        $(`.left`).append(`Points: <div class="points">${points}</div>`);
        $(`.footer`).append(`Question: <br> 1 of 10`);
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