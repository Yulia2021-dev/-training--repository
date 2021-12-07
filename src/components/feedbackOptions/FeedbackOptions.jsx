
import React from 'react';
import PropTypes from 'prop-types';
import Section from '../section/Section'

import s from './feedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback" className="title">
      <div className={s.buttons}>
        {
          options.map((option, i) => (
            <button key={i}
              className={s.button}
              type="button"
              onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>)
          )
        }
      </div>
    </Section>
  )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;