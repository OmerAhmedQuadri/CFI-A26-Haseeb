const questions = [
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Data Oriented Model"],
        answer: "Document Object Model"
    },
    {
        question: "Which method is used to select an element by its ID in JavaScript?",
        options: [ "getElementsByClassName()","getElementById()", "querySelector()", "getElementsByTagName()"],
        answer: "getElementById()"
    },
    {
        question: "What happens when you don't use 'var', 'let', or 'const' to declare a variable in JavaScript?",
        options: ["The variable is not created", "The variable is local to the function", "An error is thrown","The variable becomes global"],
        answer: "The variable becomes global"
    }
]

let currentQuestionIndex = 0
let score = 0
let thisChoice = 0

//QuestionContainer

let QuestionContainer = document.getElementById('question-container')
let QuestionText = document.getElementById('question-text')
let ChoiceList = document.getElementById('choice-list')
let NextBtn = document.getElementById('next-btn')

//Resultcontainer

let Resultcontainer = document.getElementById('result-container')
let ScoreDisplay = document.getElementById('score')
let RestartBtn = document.getElementById('restart-btn')

//home
let StartBtn = document.getElementById('start-btn')

StartBtn.addEventListener('click', startQuiz)
RestartBtn.addEventListener('click', restartQuiz)
NextBtn.addEventListener('click', nextQuestion)


function restartQuiz() {
    currentQuestionIndex = 0
    score = 0
    Resultcontainer.classList.add('hidden')
    RestartBtn.classList.add('hidden')
    startQuiz()


}

function startQuiz() {
    StartBtn.classList.add('hidden')
    Resultcontainer.classList.add('hidden')
    QuestionContainer.classList.remove('hidden')
    showQuestion()


}

function showQuestion() {
    QuestionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].options.forEach(opt => {
        const li = document.createElement('li')
        li.textContent = opt
        li.addEventListener('click', (event) => selectAnswer(event))
        ChoiceList.append(li)
    })
}

function nextQuestion() {
    ChoiceList.textContent = ''
    if(thisChoice == questions[currentQuestionIndex].answer) score++
    currentQuestionIndex++
    if(questions.length == currentQuestionIndex) return showResult()
    showQuestion()
}

function selectAnswer(event) {    
    clearSelection() 
    event.target.classList.add('selected')
    NextBtn.classList.remove('hidden')
    thisChoice = event.target.textContent
}

function clearSelection() {
    const list = document.querySelectorAll('li')
    list.forEach(item => item.classList.remove('selected'))
}

function showResult() {
    QuestionContainer.classList.add('hidden')
    NextBtn.classList.add('hidden')
    Resultcontainer.classList.remove('hidden')
    RestartBtn.classList.remove('hidden')
    ScoreDisplay.textContent = `${score}/${questions.length}`
}