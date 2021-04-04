const quizdb = [{
    question: "Q1. In what year was the first iPhone released?",
    a:"2005",
    b: "2008",
    c: "2001",
    d: "2007",
    ans: "ans4" 
},
{
    question: "Q2.  The tallest building in the world is located in which city?",
    a: "taj mahal",
    b: " lal kila",
    c: "burj khalifa",
    d:"big ben",
    ans: "ans3" 
},
{
    question: "Q3. What does GIF stand for?",
    a: " girl In first",
    b: "grid in fund",
    c: "group is fat",
    d: "Graphics Interchange Format",
    ans: "ans4" 
},
{
    question: "Q4. How many hearts does an octopus have?",
    a:"three",
    b:"two",
    c:"eight",
    d:"nine",
    ans: "ans1" 
},
{
    question: "Q5. In HTML, which attribute is used to specify that an input field must be filled out?",
    a:"placeholder" ,
    b:"validate",
    c:"required" ,  
    d:"formvalidate",
    ans: "ans3" 
}
];

const question = document.querySelector('#question');
const opt1 = document.querySelector('#option1');
const opt2 = document.querySelector('#option2');
const opt3 = document.querySelector('#option3');
const opt4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let questioncount = 0;
let score = 0;
 const loadquestion = () =>
 {
    const questionlist = quizdb[questioncount]
    question.innerText = questionlist.question;
    opt1.innerText =  questionlist.a;
    opt2.innerText =  questionlist.b;
    opt3.innerText =  questionlist.c;
    opt4.innerText =  questionlist.d;
 }
 loadquestion();

 const getCheckedAnswer = () =>
 {
    let answer;
    answers.forEach((curansele) => {
        if(curansele.checked){
            answer = curansele.id;
            // console.log(answer);
        }
        
    });
    return answer;
 }

 const deselectAll = () =>
 {
    answers.forEach((currentans) => {
      currentans.checked = false;
    });
 }
 submit.addEventListener('click' , () =>
 {
    const checkedanswer = getCheckedAnswer();
    

    if(checkedanswer == quizdb[questioncount].ans)
    {
        score++;
    }
    questioncount++;

    deselectAll();

    if(questioncount < quizdb.length)
    {
        loadquestion();

    }
    else{
        showscore.innerHTML = ` <h3 class="result">You Scored ${score}/${quizdb.length} </h3>

        <button class="btn" onclick="location.reload()"> Play Again </button> `;
        showscore.classList.remove('score');
    }

 });


