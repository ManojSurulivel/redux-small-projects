import React from "react";
import { useDispatch } from "react-redux";
import { resetQuiz } from "../../../../redux/slices/quizSlice";

const Result = ({ userAnswers, questions }) => {
  const dispatch = useDispatch();
  const score = userAnswers.filter(
    (answer, index) => answer === questions[index].correct_answer
  ).length;

  return (
    <div>
      <h2>Quiz Complete!</h2>
      <p>
        You scored {score} out of {questions.length}.
      </p>
      <button onClick={() => dispatch(resetQuiz())}>Restart Quiz</button>
    </div>
  );
};

export default Result;
