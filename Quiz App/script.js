let quiz = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyperlinks and Text Markup Language', correct: false },
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'Home Tool Markup Language', correct: false },
            { text: 'Hyper Text Makeup Language', correct: false }
        ]
    },
    {
        question: 'Who is making the Web standards?',
        answers: [
            { text: 'Microsoft', correct: false },
            { text: 'Google', correct: false },
            { text: 'Mozilla', correct: false },
            { text: 'The World Wide Web Consortium', correct: true }
        ]
    },
    {
        question: 'Choose the correct HTNL element for the largest heading:',
        answers: [
            { text: '&lt;h1&gt;', correct: true },
            { text: '&lt;heading&gt;', correct: false },
            { text: '&lt;h6&gt;', correct: false },
            { text: '&lt;header&gt;', correct: false }
        ]
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        answers: [
            { text: '&lt;br&gt;', correct: true },
            { text: '&lt;rb&gt;', correct: false },
            { text: '&lt;bl&gt;', correct: false },
            { text: '&lt;break&gt;', correct: false }
        ]
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        answers: [
            { text: '&lt;body bg="yellow"&gt;', correct: false },
            { text: '&lt;background&gt;yellow&lt;/background&gt;', correct: false },
            { text: '&lt;body style="background-color:yellow;"&gt;', correct: true},
            { text: '&lt;bg style="yellow"&gt;', correct: false }
        ]
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        answers: [
            { text: '&lt;strong&gt;', correct: false },
            { text: '&lt;b&gt;', correct: false },
            { text: '&lt;important&gt;', correct: true},
            { text: '&lt;i&gt;', correct: false }
        ]
    },
    {
        question: 'Which one is not the block level element?',
        answers: [
            { text: '&lt;nav&gt;', correct: false },
            { text: '&lt;div&gt;', correct: false },
            { text: '&lt;output&gt;', correct: true},
            { text: '&lt;nonescript&gt;', correct: false }
        ]
    },
    {
        question: 'Which one is the block level element?',
        answers: [
            { text: '&lt;dd&gt;', correct: true },
            { text: '&lt;p&gt;', correct: false },
            { text: '&lt;img&gt;', correct: false },
            { text: '&lt;b&gt;', correct: false }
        ]
    },
    {
        question: 'Default position property is:',
        answers: [
            { text: 'relative', correct: false },
            { text: 'absolute', correct: false },
            { text: 'fixed', correct: false },
            { text: 'static', correct: true }
        ]
    },
    {
        question: 'Which one is not the Javascript reserved word?',
        answers: [
            { text: 'continue', correct: false },
            { text: 'enum', correct: false },
            { text: 'typeOfNum', correct: true },
            { text: 'package', correct: false }
        ]
    },
    {
        question: 'Which one is the tramsform property?',
        answers: [
            { text: 'filter', correct: false },
            { text: 'scale', correct: true },
            { text: 'brightness', correct: false },
            { text: 'opacity', correct: false }
        ]
    },
    {
        question: 'Which one is not the tramsform property?',
        answers: [
            { text: 'translate', correct: false },
            { text: 'rotate', correct: false },
            { text: 'grayscale', correct: true },
            { text: 'perspective', correct: false }
        ]
    },
    {
        question: 'How many values does property of transform:scale() has?',
        answers: [
            { text: '1-3', correct: false },
            { text: '1-2', correct: true },
            { text: '1-4', correct: false },
            { text: '1', correct: false }
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '&lt;scripting&gt;', correct: false },
            { text: '&lt;script.js&gt;', correct: false },
            { text: '&lt;javascript&gt;', correct: false },
            { text: '&lt;script&gt;', correct: true }
        ]
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below?<br/><br/> &lt;p id="demo"&gt;This is a demonstration.&lt;/p&gt;',
        answers: [
            { text: 'document.getElementById("demo").innerHTML="Hello World";', correct: true },
            { text: '#demo.innerHTML="Hello World";', correct: false },
            { text: 'document.getElement("demo").innerHTML="Hello World"', correct: false },
            { text: 'document.querySelector("demo").innerHTML="Hello World"', correct: false }
        ]
    },
    {
        question: 'Where is the correct place to insert a JavaScript',
        answers: [
            { text: 'The &lt;head&gt; section', correct: false },
            { text: 'The &lt;body&gt; section', correct: true},
            { text: 'Both are correct', correct: false },
            { text: 'Both are incorrect', correct: false }
        ]
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            { text: '&lt;script name="xxx.js"&gtl', correct: false },
            { text: '&lt;script src="xxx.js"&gtl', correct: true },
            { text: '&lt;link src="xxx.js"&gtl', correct: false },
            { text: '&lt;script href="xxx.js"&gtl', correct: false }
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: 'warning("hello world")', correct: false },
            { text: 'prompt("hello world")', correct: false },
            { text: 'alertBox("hello world")', correct: false },
            { text: 'alert("hello world")', correct: true }
        ]
    },
    {
        question: 'How do you creat a function in JavaScript?',
        answers: [
            { text: 'A.function myfunction()', correct: false },
            { text: 'B.function:myfuction()', correct: false },
            { text: 'C.( ) => { };', correct: false },
            { text: 'D.Both B and C', correct: true}
        ]
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        answers: [
            { text: 'md(7.25)', correct: false },
            { text: 'round(7.25)', correct: false },
            { text: 'Math.round(7.25)', correct: true },
            { text: 'Math.md(7.25)', correct: false }
        ]
    },
    {
        question: 'Which operator do you use to assign the value to a variable?',
        answers: [
            { text: '+', correct: false },
            { text: '=', correct: true },
            { text: '/', correct: false },
            { text: '*', correct: false }
        ]
    },
    {
        question: 'How to declare a variable in css?',
        answers: [
            { text: '::var', correct: false },
            { text: ':var', correct: false },
            { text: '::root', correct: false },
            { text: ':root', correct: true }
        ]
    },
    {
        question: 'How do you select all p elements inside a div?',
        answers: [
            { text: 'div.p', correct: false },
            { text: 'div~p', correct: false },
            { text: 'div p', correct: true },
            { text: '.p', correct: false }
        ]
    },
    {
        question: 'How do you callback a variable in CSS',
        answers: [
            { text: 'var(-xx-xx)', correct: false },
            { text: 'var--xx-xx', correct: false },
            { text: 'var(--xx-xx)', correct: true },
            { text: 'var(-xx--xx)', correct: false }
        ]
    },
    {
        question: 'Property to reflect an image ',
        answers: [
            { text: 'box-reflect', correct: true },
            { text: 'reflect-box', correct: false },
            { text: 'image-reflect', correct: false },
            { text: 'reflect-image', correct: false }
        ]
    },

];
let questionElement = document.getElementById('question');
let answerBtn = document.getElementById('ans-buttons');
let nextBtn = document.getElementById('next-btn');
let indexNum = 0;
let score = 0;

function startQuiz() {
    indexNum = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() { 
    updateAns();
    let currentQuiz = quiz[indexNum];
    questionElement.innerHTML = currentQuiz.question;
    
    currentQuiz.answers.forEach(element=> {
        const button = document.createElement('button');
        button.innerHTML = element.text;
        button.classList.add('ans-btn');
        answerBtn.appendChild(button);    
        if (element.correct) { 
            button.dataset.correct = element.correct;
        }

        button.addEventListener('click', selectAnswer);
    });
}
function updateAns() {
    nextBtn.style.display = 'none';
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
    
}
function selectAnswer(e) {
    let selectBtn = e.target;
    let isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else { 
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}


function showScore() {
    updateAns();
    questionElement.innerHTML = "Your score is " + score + " out of " + indexNum + "!";
    nextBtn.style.display = "block";
    nextBtn.innerHTML = "Retry";
}

function handleNextBtn() {
   indexNum++; 
    if (indexNum < quiz.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}



nextBtn.addEventListener('click', () => {
    
    if (indexNum < quiz.length) { 
        handleNextBtn();
     } else {
         startQuiz();
    }
})

startQuiz();
