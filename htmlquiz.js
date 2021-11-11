const quizDB=[
{
    question: "Q1: What is full form of HTML?",
    a:"HighText Machine Language",
    b:"HyperText and links Markup Language",
    c:"HyperText Markup Language",
    d:"None of these",
    ans:"ans3"
    
},{
    question: "Q2: The correct sequence of HTML tags for starting a webpage is-",
    a:"Head, Title, HTML, body",
    b:"HTML, Body, Title, Head",
    c:"HTML, Head, Body, Title",
    d:"HTML, Head, Title, Body",
    ans:"ans4"

},{
    question: "Q3: Which of the following element is responsible for making the text bold in HTML?",
    a:"<pre>",
    b:"<a>",
    c:"<b>",
    d:"<br>",
    ans:"ans3"

},{
    question: "Q4: Which of the following tag is used for inserting the largest heading in HTML?",
    a:"h6",
    b:"h3",
    c:"h1",
    d:"h2",
    ans:"ans3"
},{
    question: "Q5: Which HTML tag is used to display the power in expression, i.e., (x2 - y2)?",
    a:"<sub>",
    b:"<sup>",
    c:"<p>",
    d:"None of these",
    ans:"ans2"
},{
    question: "Q6: Which is the correct way to comment out something in HTML?",
    a:"Using ## and #",
    b:"Using <!-- and -->",
    c:"Using </-- and -/->",
    d:"Using <!-- and -!>",
    ans:"ans2"
},{
    question: "Q7: Which of the following are the attributes of the tag?",
    a:"method",
    b:"action",
    c:"both a and b",
    d:"none of these",
    ans:"ans3"
},{
    question: "Q8: Which of the following tag is used to create a combo box (or drop-down box)?",
    a:"list",
    b:"select",
    c:'<input type = "dropdown">',
    d:"ul",
    ans:"ans2"
},{
    question: "Q9: In HTML5, which of the following tag is used to initialize the document type?",
    a:"<Doctype HTML>",
    b:"<Doctype HTML/>",
    c:"<!Doctype html/>",
    d:"<!Doctype html>",
    ans:"ans4"
},{
    question: "Q10: Which of the following is the root tag of the HTML document?",
    a:"<body>",
    b:"<head>",
    c:"<title>",
    d:"<html>",
    ans:"ans4"
},{
    question: "Q11: The tags in HTML are _ _ _ _",
    a:"case-sensitive",
    b:"in upper case",
    c:"not case sensitive",
    d:"in lowercase",
    ans:"ans3"
},{
    question: "Q12: A program in HTML can be rendered and read by -",
    a:"web browser",
    b:"server",
    c:"interpreter",
    d:"compiler",
    ans:"ans1"
},{
    question: "Q13: Which of the following HTML attribute is used to define inline styles?",
    a:"style",
    b:"tape",
    c:"class",
    d:"id",
    ans:"ans1"
},{
    question: "Q14: Which of the following is the correct way to start an ordered list with the count of numeric value 4?",
    a:'<ol type = "1" initial = "4">',
    b:'<ol type = "1" begin = "4">',
    c:'<ol type = "1" num = "4">',
    d:'<ol type = "1" start = "4">',
    ans:"ans4"
},{
    question: "Q15: Which of the following is the correct way to create a list using the lowercase letters?",
    a:'<ol alpha = "a" >',
    b:'<ol type = "a">',
    c:'<ol letter = "a">',
    d:"none of these",
    ans:"ans2"
},{
    question: "Q16: What are the types of unordered or bulleted list in HTML?",
    a:"disc, square, triangle",
    b:"polygon, triangle, circle",
    c:"disc, circle, square",
    d:"disc, circle, traingle",
    ans:"ans3"
},{
    question: "Q17: How to insert a background image in HTML?",
    a:'<body background = "img.png">',
    b:'<img background = "img.png">',
    c:'<bg-image = "img.png">',
    d:"none of these",
    ans:"ans1"
},{
    question: "Q18: Which of the following is the container for <tr>, <th>, and <td> ?",
    a:"<data>",
    b:"<table>",
    c:"<group>",
    d:"<div>",
    ans:"ans2"
},{
    question: "Q19: Which of the following is the correct way to send mail in HTML?",
    a:'<a href = "mailto: xy@y">',
    b:'<a href = "xy@y">',
    c:"<mail xy@y</mail>",
    d:"none of these",
    ans:"ans1"
},{
    question: "Q20: Which of the following HTML tag is the special formatting tag?",
    a:"<p>",
    b:"<b>",
    c:"<pre>",
    d:"none of these",
    ans:"ans3"
}

];

const question = document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');             //reference of all input (using class=answer)

const showscore = document.querySelector('#showscore');

let quesCount = 0;
let score = 0;

function loadQuestion() {
    // console.log(quizDB[0].question);

    const questionList = quizDB[quesCount];
    question.innerText=questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

// When user Click On Submit Btn

const getCheckAnswer = () =>{
    let answer; 

    answers.forEach( (curAnsElement) =>{
        if(curAnsElement.checked){
            answer = curAnsElement.id;
        }
    });
    return answer;

};

const deselectall = () => {
    answers.forEach( (curAnsElement) => curAnsElement.checked = false);
}



submit.addEventListener('click' , () => {

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[quesCount].ans){
        score++;
    };
    quesCount++;

    deselectall();

    if(quesCount<quizDB.length){
        loadQuestion();
    }else{
        showscore.innerHTML= `
        <h3 style="font-size:20px;color:blue"> Your Score is <span> &#x270C;</span> ${score}/${quizDB.length} </h3>
        <button class="btnPlayagain" onclick="location.reload()"> Play Again</button>
        `;

        showscore.classList.remove('scoreArea');

    }

});