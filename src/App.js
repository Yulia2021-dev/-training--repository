import React, { Component } from "react";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions.jsx";
import Statistics from "./components/statistics/Statistics.jsx";

import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementOption(option) {
    this.setState((state) => {
      return {
        [option]: state[option] + 1,
      };
    });
  }

  render() {
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
          onLeaveFeedback={this.incrementOption.bind(this)}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
        {/* <Clock /> */}
      </div>
    );
  }
}

export default App;
