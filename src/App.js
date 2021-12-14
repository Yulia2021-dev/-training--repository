import React, { Component } from "react";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions.jsx";
import Statistics from "./components/statistics/Statistics.jsx";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    this.incrementOption = this.incrementOption.bind(this);
  }

  incrementOption(option) {
    this.setState((state) => {
      return {
        [option]: state[option] + 1,
      };
    });
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = Object.values(this.state).reduce((a, b) => a + b);
    let expr = this.state.good / total;
    if (isNaN(expr)) {
      expr = 0;
    }
    const positivePercentage = Math.floor(expr * 100);
    return (
      <div className="App">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.incrementOption}
        />
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
}

export default App;
