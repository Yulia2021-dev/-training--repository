import { useState } from "react";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions.jsx";
import Statistics from "./components/statistics/Statistics.jsx";

import "./App.css";

const initialRating = 0;

export default function App() {
  const [good, setGood] = useState(initialRating);
  const [neutral, setNeutral] = useState(initialRating);
  const [bad, setBad] = useState(initialRating);

  const incrementOption = (option) => {
    if (option === "good") {
      setGood(good + 1);
    } else if (option === "neutral") {
      setNeutral(neutral + 1);
    } else if (option === "bad") {
      setBad(bad + 1);
    } else {
      console.error("No matched option");
    }
  };

  const total = good + neutral + bad;
  let expr = good / total;
  if (isNaN(expr)) {
    expr = 0;
  }
  const positivePercentage = Math.floor(expr * 100);
  const options = ["good", "neutral", "bad"];
  return (
    <div className="App">
      <FeedbackOptions options={options} onLeaveFeedback={incrementOption} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </div>
  );
}
