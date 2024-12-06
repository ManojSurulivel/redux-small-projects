import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions, nextQuestion, saveAnswer } from "../../../../redux/slices/quizSlice";
import Question from "./Question";
import Result from "./Result";

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, status, error, userAnswers } = useSelector(
    (state) => state.quiz
  );

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  if (currentQuestionIndex >= questions.length) {
    return <Result userAnswers={userAnswers} questions={questions} />;
  }

  return (
    <div>
      {questions.length > 0 && (
        <Question
          question={questions[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          saveAnswer={(answer) => dispatch(saveAnswer({ questionIndex: currentQuestionIndex, answer }))}
          next={() => dispatch(nextQuestion())}
        />
      )}
    </div>
  );
};

export default Quiz;
