import { useState } from "react";
import Button from "../Button/Button";
const Card = ({ question, correctAnswerMarkUpdate, attempt, options, answer ,
setQsns,qsn ,setCard,qsnAttempt}) => {
// Creating an array of options
const optionsArray = [options.option1, options.option2, options.option3, options.option4];
// State variable to track the marked status of the button
const [marked, setMarked] = useState(false);
// Event handler to handle the click event on the options
const click = (clicked) => {
// Increase the question attempted
setQsns(qsn+1)
// Mark the button as clicked
setMarked(true)
if (qsnAttempt === 4) {
// Show the result if all question are attempted
setCard(true)
}
if (clicked === answer)
// Increase the score if the answer is correct
correctAnswerMarkUpdate(attempt + 1)
}
// Styles for the button
const norm = "bg-red-300 px-2 py-1 rounded hover:bg-orange-400"
const disable = "bg-orange-300 px-2 py-1 rounded disabled:opacity-50"
return (
<div style={{backgroundColor:'#d5bf86', margin:20, padding:20,borderRadius:10}} >
<h4 className="pt-3 pb-1">{question}</h4>
<div  className="flex space-x-2">
{optionsArray.map((option, index) =>
<Button key={index} marked={marked} onClick={() => click(option)} style={!marked ? norm : disable} >{ option }</Button>
)}
</div>
</div>
)
}
export default Card;