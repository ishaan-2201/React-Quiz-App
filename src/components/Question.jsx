import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import QUESTIONS from "../questions.js";
export default function Question({index,handleSkipAnswer,onSelectAnswer}){
    const [answer,setAnswer]=useState({
        selectedAnswer:"",
        isCorrect:null
    })
    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer:answer,
            isCorrect:null
        })
        setTimeout(() => {
            setAnswer({
                selectedAnswer:answer,
                isCorrect:QUESTIONS[index].answers[0]===answer
            })

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }
    let answerState="";
    if(answer.selectedAnswer && answer.isCorrect!==null){
        answerState=answer.isCorrect?"correct":"wrong";
    }
    else if(answer.selectedAnswer){
        answerState="answered";
    }
    return <div id="question">
    <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer}/>
    <h2>{QUESTIONS[index].text} </h2>
     <Answers selectedAnswer={answer.selectedAnswer} answerState={answerState} possibleAnswers={QUESTIONS[index].answers} handleSelectAnswer={handleSelectAnswer}/>
    </div>
}