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
        } else {
            $(`.footer`).append(`
            <button class="incorrect">${this.option1}</button>
            <button class="incorrect">${this.option2}</button>
            <button class="correct">${this.answer}</button>
             `);
        } 
    };

    loadQuestion = () => {
        $(`.main`).empty();
        $(`.main`).append(`<div class="question"> ${this.number}. ${this.question}</div>`);
        $(`.right`).empty();
        $(`.right`).append(`Scenario: <br> ${this.number} of 5`);
    };

    clickCorrect = () => {
        $('body').on(`click`, '.correct', () => {
        $(`.main`).empty();
        $(`.main`).append(`<div class="answer"><b>Correct.</b> <br>${this.answer}</div><br><br>${this.explanation}`);
        $(`.footer`).empty();
        $(`.footer`).append(`<button class="next-button">Next Scenario</button>`);
        $(`.topright`).empty();
        $(`.topright`).append(`Scenario: <br> ${this.number} of 5`);
    });
    };

    clickIncorrect = () => {
        $('body').on(`click`, '.incorrect', () => {
        $(`.main`).empty();
        $(`.main`).append(`<div class = "explanation"><b>Not quite.</b> <br><br>${this.explanation}</div>`);
        $(`.footer`).empty();
        $(`.footer`).append(`<button class="next-button">Next Question</button>`);
        $(`.topright`).empty();
        $(`.topright`).append(`Scenario: <br> ${this.number} of 5`);
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
            loadResults();
            }
        )}; 
    };
    
    };
    
$('body').on(`click`, '.correct', () => {
addPoint();
});


// OBJECT INSTANCES and ITEMS ARRAY TO LOOP THROUGH!
const one = new Item(1, 2, "'J' is a Black woman who has been working as a highly-successful mid-level administrator at her company for four years. She works with a few other women, but at any given point in her day, she is the only person of color in the room. <br><br>She woke up this morning feeling extremely sick, but has an important presentation today. What will J do?", 
"She will do her presentation and work even harder to compensate.", 
"She will stay home and take care of herself--the presentation can be rescheduled!", 
"She will go to work but take it easy so that she can recover more quickly.", 
"'J', like many people who are the only person of a given race, gender, or sexuality at their workplace, feels extra pressure to preform. She says, 'I need to come across as more than proficient, more than competent, more than capable. <br><b>I have to be on all the time.</b>'");

const two = new Item(2, 3, "‘L’ is a white lesbian who is the senior vice president at the company she’s served for over ten years. <br> <br> On any given day, how much more likely is it that she’ll hear someone say something demeaning about her or people like her than it is for a man?", 
"2.5 times more likely.", "2 times more likely.", "1.5 times more likely.", 
"'L' and other lesbians are 250% more likely than straight men to hear discriminatory remarks about themselves or about the queer community. Over the course of her career, 'L' has had supervisors who have, intentionally or not, made her feel as if it were inappropriate to mention her wife.");

const three = new Item(3, 4, "'M', a Director at her company, is an Asian woman who is subject to microagressions, or acts of daily discrimination, regularly. <br><br>Recently in the elevator, she experienced something 22% of Asian women face at some point in their careers. What was it?", 
"She was mistaken for someone in a much more junior position.", "She was ignored entirely by the people inside.", "She was directly called a racial slur", "'M' recalls the incident: 'I was in the elevator and pressed the button for the executive office. Someone said to me ‘Um, no honey. That’s for the executive offices. The interns are going to this floor.’<br> <br>Incidents like these can make women feel undervalued and disrespected.");

const four = new Item(4, 5, "'S' is a Middle Eastern woman who works as an associate at her predominantly male organization.<br><br>Although she gets along with her male peers, she often feels left out socially. What percentage of employees who are the only women at their companies feel like 'S' does?", 
"75% of women.", "50% of women.", "25% of women.", "Only one in four women feel included socially in their workplace when they are the only woman present. 'S' describes her workplace as 'a boys' club.' Relationships with peers and supervisors are a critical piece of professional success, and this exclusion is yet another set back for women.");

const five = new Item(5, 6, "'T' is a Senior Executive at her company, and a Latina woman. <br><br>There is an enormous pressure placed on her everyday that is the most common microagression experienced in the workplace. <br><br> What is she experiencing?", 
"Having to prove evidence of her competence more than others.", "Having to look a certain way in order to be accepted.", "Having to ask for support more often than others.", 
"While reflecting on her career, 'T' says:<br> 'One thing I’ve become used to is having to prove myself constantly, over and over. It’s tiring, and unfortunately it hasn’t changed a whole lot as I’ve become more senior.”<br><br> A third of all professional women find themselves having to provide much more evidence of their competence than their male peers.");


// LANDING PAGE
$(`.header`).append(`<header>IN HER SHOES</header>`);
$('.main').append(`<div class="landing">
<i>A professional woman faces challenges that can make it <br> hard to be happy, successful, and safe at work. </i><br> 
<br><h1> Do you have what it takes to walk a mile in her shoes?</h1>
</div>`);

$(`.right`).append(`
    <b>SOURCE INFO</b><br>
    All In Her Shoes data and direct quotes are from real women via the <a href="https://www.mckinsey.com/featured-insights/gender-equality/women-in-the-workplace-2018">Women in the Workplace 2018</a> report:
    the largest comprehensive study of the state of women in corporate America. <br>
    `);
    $(`.left`).append(`<b>GAMEPLAY</b><br>
      
    Earn points by anticipating others' actions, tapping into others' perspectives, and answering questions about diversity and inclusion in the workplace.
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
       <i>In today's professional world, women continue to be vastly underrepresented at every level. 
       They compose only 38% of managers and a mere 22% of C-Suite positions.</i><br><br>
       <h1> Click "Begin", ${name}, to learn about some of the challenges women face in the workplace.</h1> <br>
      
    </div>`);
    $(`.footer`).append(`<button class="begin-button">Begin</button>`);
    loadFirst();
};



// RENDERING FIRST QUESTION
const loadFirst = () => {
    $(`body`).on('click', `.begin-button`, () => {
        $(`.left`).append(`Points: <div class="points">${points}</div>`);
        $(`.right`).append(`Scenario: <br> 1 of 5`);
        one.loadOptions();
        one.loadQuestion();
        one.clickCorrect();
        one.clickIncorrect();
        one.loadNext();

    });
};

// RESULTS
const loadResults = () => {
    $(`.left`).empty();
    $(`.right`).empty();
    $(`.main`).empty();
    $(`.main`).append(`<h1>You earned a total of ${points} points out of a possible 5, ${name},
    but your work to fight gender and racial inequity in today's workplace has only just begun. </h1><br>
    Check out the 
    <a href="https://www.mckinsey.com/featured-insights/gender-equality/women-in-the-workplace-2018">
    Women in the Workplace 2018</a> report <br>and continue educating yourself, your peers, 
    and your organization <br>on what we as professionals can do to make serious changes happen.`)
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