import "./styles.css";
import { useState } from "react";

export default function App() {
  const [questionNo, setQuestionNo] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const quiz = [
    {
      question: "Which of the following is the capital of India?",
      options: ["Delhi", "Agra", " Bombay", "Kolkata"],
      answer: 1
    },
    {
      question: "Who is the Prime Minister of India?",
      options: ["Faisal", "Narendra Modi", "Kallu", "kaliya"],
      answer: 2
    },
    {
      question: "Where is tajmahal situated?",
      options: ["Delhi", "Chennai", "Agra", "Siwan"],
      answer: 3
    },
    {
      question: "In which year India got it's Independence",
      options: ["1945", "1936", "1951", "1947"],
      answer: 4
    }
  ];

  function optionA() {
    if (quiz[questionNo].answer === 1) {
      alert("correct Answer");
      setQuestionNo(questionNo + 1);
      if (questionNo === 3) {
        alert("Test Completed");
        setQuestionNo(0);
        setCorrect(0);
        setIncorrect(0);
      }
      setCorrect(correct + 1);
    } else {
      setQuestionNo(questionNo + 1);
      if (questionNo === 3) {
        alert("Test Completed");
        setQuestionNo(0);
        setCorrect(0);
        setIncorrect(0);
      }
      setIncorrect(incorrect + 1);
      alert("Incorrect Option");
    }
  }

  function optionB() {
    if (quiz[questionNo].answer === 2) {
      alert("correct Answer");
      setQuestionNo(questionNo + 1);
      if (questionNo === 3) {
        alert("Test Completed");
        setQuestionNo(0);
        setCorrect(0);
        setIncorrect(0);
      }
      setCorrect(correct + 1);
    } else {
      setQuestionNo(questionNo + 1);
      if (questionNo === 3) {
        alert("Test Completed");
        setQuestionNo(0);
        setCorrect(0);
        setIncorrect(0);
      }
      setIncorrect(incorrect + 1);
      alert("Incorrect Option");
    }
  }

  function optionC() {
    if (quiz[questionNo].answer === 3) {
      alert("correct Answer");
      setQuestionNo(questionNo + 1);
      if (questionNo === 3) {
        alert("Test Completed");
        setQuestionNo(0);
        setCorrect(0);
        setIncorrect(0);
      }
      setCorrect(correct + 1);
    } else {
      setQuestionNo(questionNo + 1);
      if (questionNo === 3) {
        alert("Test Completed");
        setQuestionNo(0);
        setCorrect(0);
        setIncorrect(0);
      }
      setIncorrect(incorrect + 1);
      alert("Incorrect Option");
    }
  }

  function optionD() {
    if (quiz[questionNo].answer === 4) {
      alert("correct Answer");
      setQuestionNo(questionNo + 1);
      if (questionNo === 3) {
        alert("Test Completed");
        setQuestionNo(0);
        setCorrect(0);
        setIncorrect(0);
      }
      setCorrect(correct + 1);
    } else {
      setQuestionNo(questionNo + 1);
      if (questionNo === 3) {
        alert("Test Completed");
        setQuestionNo(0);
        setCorrect(0);
        setIncorrect(0);
      }
      setIncorrect(incorrect + 1);
      alert("Incorrect Option");
    }
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <p>{quiz[questionNo].question}</p>
      <br />
      <h4>OPTIONS</h4>
      <br />
      <button classname="abc" onClick={optionA}>
        {quiz[questionNo].options[0]}
      </button>{" "}
      &nbsp;
      <button classname="abc" onClick={optionB}>
        {quiz[questionNo].options[1]}
      </button>{" "}
      &nbsp;
      <button classname="abc" onClick={optionC}>
        {quiz[questionNo].options[2]}
      </button>{" "}
      &nbsp;
      <button classname="abc" onClick={optionD}>
        {quiz[questionNo].options[3]}
      </button>{" "}
      &nbsp; <br />
      <br />
      <p>Correct Answer : {correct}</p>
      <p>Incorrct Ansewer : {incorrect}</p>
    </div>
  );
}
