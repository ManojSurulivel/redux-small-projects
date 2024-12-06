import React, { useState } from "react";

const Question = ({ question, questionIndex, saveAnswer, next }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSubmit = () => {
    saveAnswer(selectedAnswer);
    next();
  };

  return (
    <div>
      <h2>Question {questionIndex + 1}</h2>
      <p>{question.question}</p>
      <ul>
        {[...question.incorrect_answers, question.correct_answer]
          .sort()
          .map((answer, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={() => setSelectedAnswer(answer)}
                />
                {answer}
              </label>
            </li>
          ))}
      </ul>
      <button onClick={handleSubmit} disabled={!selectedAnswer}>
        Next
      </button>
    </div>
  );
};

export default Question;
