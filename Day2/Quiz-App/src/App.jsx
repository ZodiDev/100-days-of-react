import { useEffect, useState } from 'react'
import './index.css'
import Question from './Question.jsx'

function App() {

  let question = ["What is the capital of France?", "Which planet is known as the 'Red Planet'?", "Which of the following is NOT a mammal?", "What is the primary gas in Earth's atmosphere?", "Which element has the chemical symbol 'Au'?", "What is the largest ocean on Earth?", "Which instrument is used to measure atmospheric pressure?", "Which of the following is not a primary color?", "Which bird is known for its beautiful tail feathers and courtship dance?", "What is the smallest planet in our solar system?"]

  let answer = {
    answer1: 'D',
    answer2: 'B',
    answer3: 'C',
    answer4: 'D',
    answer5: 'D',
    answer6: 'D',
    answer7: 'A',
    answer8: 'B',
    answer9: 'D',
    answer10: 'C'
    }

  const fourQuestions = [["Madrid", "Berlin", "Rome", "Paris"], ["Venus", "Mars", "Jupiter", "Mercury"], ["Whale", "Dolphin", "Shark", "Bat"], ["Oxygen", "Argon", "Hydrogen", "Nitrogen"], ["Silver", "Argon", "Aluminum", "Gold"], ["Atlantic", "Indian", "Arctic", "Pacific"], ["Barometer", "Thermometer", "Hygrometer", "Anemometer"], ["Red", "Green", "Blue", "Yellow"], ["Sparrow", "Penguin", "Ostrich", "Peacock"], ["Jupiter", "Earth", "Mercury", "Neptune"]]

  const [currentQuestion, setCurrentQuestion] = useState("")
  const [currentAnswer, setCurrentAnswer] = useState("")
  const [currentFourQuestions, setCurrentFourQuestions] = useState(1)

  function newQuestion() {
    let randomQuestion = Math.floor(Math.random() * question.length)

    while(question[randomQuestion] == currentQuestion){
      randomQuestion = Math.floor(Math.random() * question.length)
    }

    if(question[randomQuestion] != currentQuestion){
      setCurrentFourQuestions(Number(randomQuestion))
      setCurrentQuestion(question[randomQuestion])
      setCurrentAnswer(answer[`answer`+ (randomQuestion + 1)])
    }

    
  }


  useEffect(() =>{

    newQuestion()
    
  },[])

  return (
    <>
      <Question q={currentQuestion} a1={fourQuestions[currentFourQuestions][0]} a2={fourQuestions[currentFourQuestions][1]} a3={fourQuestions[currentFourQuestions][2]} a4={fourQuestions[currentFourQuestions][3]} selecta={() =>{
      let tempAnswer = "A"
      currentAnswer == tempAnswer ? alert("You got the answer right! :)") : alert("Wrong answer unfortunately :(")
      newQuestion()
    }}
    selectb={() =>{
      let tempAnswer = "B"
      currentAnswer == tempAnswer ? alert("You got the answer right! :)") : alert("Wrong answer unfortunately :(")
      newQuestion()
    }}
    selectc={() =>{
      let tempAnswer = "C"
      currentAnswer == tempAnswer ? alert("You got the answer right! :)") : alert("Wrong answer unfortunately :(")
      newQuestion()
    }}
    selectd={() =>{
      let tempAnswer = "D"
      currentAnswer == tempAnswer ? alert("You got the answer right! :)") : alert("Wrong answer unfortunately :(")
      newQuestion()
    }}
    
    />
    </>
  )
}

export default App
