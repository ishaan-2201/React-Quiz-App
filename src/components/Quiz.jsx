import { useCallback, useState } from "react"
import QUESTIONS from "../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
export default function Quiz(){
    const [userAnswers,setUserAnswers]=useState([]);
    const activeQuestionIndex=userAnswers.length;
    const handleSelectAnswer=useCallback(function handleSelectAnswer(answer){
        setUserAnswers((prevUserAnswers)=>{
          return [...prevUserAnswers,answer];
        })
     },[]);

     const handleSkipAnswer=useCallback(()=> handleSelectAnswer(null),[handleSelectAnswer]);

    if(activeQuestionIndex===QUESTIONS.length){
        return <div id="summary">
           <img src={quizCompleteImage} alt="" />
           <h2>Quiz Completed!</h2>
        </div>
    }
    
    return <div id="quiz">
     <Question key={activeQuestionIndex} index={activeQuestionIndex} handleSkipAnswer={handleSkipAnswer} onSelectAnswer={handleSelectAnswer}/>
    </div>
}