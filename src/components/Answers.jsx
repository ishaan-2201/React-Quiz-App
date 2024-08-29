import { useRef } from "react";

export default function Answers({selectedAnswer,answerState,possibleAnswers,handleSelectAnswer}){
    const shuffledAnswers=useRef();
    if(!shuffledAnswers.current){
    shuffledAnswers.current=[...possibleAnswers];
    shuffledAnswers.current.sort(()=> Math.random() -0.5);}
    return  <ul id="answers">
    {shuffledAnswers.current.map((possibleAnswer)=> {
        let cssClass="";
        const isSelected=selectedAnswer===possibleAnswer;
        if(answerState==="answered" && isSelected)
        cssClass="selected";
    if((answerState==="correct" || answerState==="wrong") && isSelected)
       cssClass=answerState;
       
    return <li key={possibleAnswer} className="answer">
              <button onClick={()=> handleSelectAnswer(possibleAnswer)} className={cssClass} disabled={answerState!==""}>{possibleAnswer}</button>
    </li>})}
</ul>
}