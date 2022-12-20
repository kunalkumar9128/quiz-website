const quizDB = [
    {
        question: "Q1: The CSS property used to control the element’s font-size is.....?",
        a: "font-size",
        b: "text-size",
        c: "text-style",
        d:  "None",
        ans: "ans1"
    },
    {
        question: "Q2: The HTML attribute used to define the internal stylesheet is.........?",
        a: "style",
        b: "<style>",
        c: "<link>",
        d: "<script>",
        ans: "ans2"
    },
    {
        question: "Q3: Which of the following CSS property is used to set the background image of an element?",
        a: "background-color",
        b: "background-image",
        c: "background-attachment",
        d:  "None",
        ans: "ans2"
    },
    {
        question: "Q4: Which of the following is the correct syntax to display the hyperlinks without any underline?",
        a: "{decoration : no-underline;}",
        b: "{text-decoration : underline;}",
        c: "a {text-decoration : none;}",
        d:  "None",
        ans: "ans3"
    },
    {
        question: "Q5:  Which of the following property is used as the shorthand property for the padding properties?",
        a: "padding-right",
        b: "padding-left",
        c: "padding",
        d:  "None",
        ans: "ans3"
    }
];

const question = document.querySelector('.question');
const question1 = document.querySelector('#option1');
const question2 = document.querySelector('#option2');
const question3 = document.querySelector('#option3');
const question4 = document.querySelector('#option4');
const question5 = document.querySelector('#option5');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;

let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    option5.innerText = questionList.e;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};
 const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
 }

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} ✌️ </h3>
        <button class = "btn" onclick="location.reload()"> Play Again </button>

        `;

        showScore.classList.remove('scoreArea');
    }

});