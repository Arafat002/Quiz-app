const quizData = [
  {
      question: "What is Arafat's Middle Name?",
      a: "Elizabeth",
      b: "Abiola",
      c: "Sunmi",
      d: "Oluwadamilola",
      correct: "d",
  },
  {
      question: "What is Arafat's favourite thing to do ?",
      a: "Listening to music",
      b: "Sleeping",
      c: "reading a book",
      d: "surfing social media",
      correct: "b",
  },
  {
      question: "How old is Arafat?",
      a: "20",
      b: "18",
      c: "30",
      d: "25",
      correct: "a",
  },
  {
      question: "who is Arafat's Best Friend?",
      a: "Rihana",
      b: "Ayo",
      c: "Idan",
      d: "none of the above",
      correct: "b",
  },
  {
    question: "How many does siblings Arafat have?",
    a: "6",
    b: "4",
    c: "1",
    d: "2",
    correct: "b",
 }, 
 {
  question: "what is Arafat's favourite social media App?",
  a: "Twitter",
  b: "Facebook",
  c: "Instagram",
  d: "Tiktok",
  correct: "a",
 },
 {
  question: "what brand of phone is Arafat using?",
  a: "Iphone",
  b: "Samsung",
  c: "Itel",
  d: "Oppo",
  correct: "b",
 },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }
     currentQuiz++
     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>
         <button onclick="location.reload()">Reload</button>
         `
     }
  }
})