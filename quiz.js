const quizData = [
    {
        question: "When Ramadan starts?",
        a: "When the moon is full",
        b: "At 9th month of muslim's calendar",
        c: "6 months after Christmas",
        d: "When summer solstice happen",
        correct: "b",
    },
    {
        question: "What's Sahur?",
        a: "The traditional dress worn by Muslims during this holiday",
        b: "The weapon symbolically brandished at the start of the celebration",
        c: "The pre-dawn meal, when Muslims rise for prayer",
        d: "The meal after muslims break their fasting",
        correct: "c",
    },
    {
        question: "What is the name of the holiday that celebrates the end of Ramadan?",
        a: "Aid el-Fitr",
        b: "Pâques",
        c: "Aid el-Adha",
        d: "Achoura",
        correct: "a",
    },
    {
        question: "What is the purpose of ramadan?",
        a: "Reuniting with family",
        b: "Eating more food",
        c: "Losing some weight",
        d: "Getting close to Allah",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2 id="result">You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
