import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import Banner from "./components/UI/Banner/Banner";

function App() {
  // State variables to control the start, attempt, question, card, and result of the Quiz
  const [start, setStart] = useState(true);
  const [attempt, setAttempt] = useState(0);
  const [qsnAttempt, setQsnAttempt] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // Event handler to start the Quiz
  const handleStart = () => {
    setStart(false);
    setShowCard(true);
    setAttempt(0);
    setQsnAttempt(0);
    setShowBanner(false);
  };

  // Options for the quiz
  const options = {
    option1: "Blue",
    option2: "Red",
    option3: "Yellow",
    option4: "Green",
  };

  // Array of questions
  const questions = [
    { question: "What color are the leaves?", answer: "Green" },
    { question: "What color is the sky?", answer: "Blue" },
    { question: "What color is a banana?", answer: "Yellow" },
    { question: "What color is a strawberry?", answer: "Red" },
    { question: "What color is a watermelon?", answer: "Green" },
  ];

  // Event handler to show the result of the Quiz
  const handleResult = () => {
    setStart(true);
    setShowBanner(true);
    setShowCard(false);
    setShowResult(false);
  };

  return (
    <div className="flex justify-center mt-4">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <div>
          <h1 className="text-3xl">Quizz App</h1>
          <h1 style={{ textAlign: "center" }}>learn react</h1>
        </div>
        {showBanner && <Banner score={attempt} />}
        {showCard && (
          <div>
            {questions.map((q, index) => (
              <Card
                key={index}
                question={q.question}
                setAttempt={setAttempt}
                attempt={attempt}
                options={options}
                answer={q.answer}
                setQsnAttempt={setQsnAttempt}
                qsn={qsnAttempt}
                setShowCard={setShowCard}
                setShowResult={setShowResult}
                qsnAttempt={qsnAttempt}
              />
            ))}
          </div>
        )}
        {showResult && (
          <Button onClick={handleResult} style={"bg-orange-300 px-10 py-2 rounded hover:bg-orange-400 mt-3"}>
            Show Results
          </Button>
        )}
        {start && <Button onClick={handleStart} style={"bg-orange-300 px-10 py-2 rounded hover:bg-orange-400"}>Start Quiz</Button>}
      </div>
    </div>
  );
}

export default App;