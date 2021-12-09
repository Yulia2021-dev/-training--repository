import React from 'react';
import PropTypes from 'prop-types';
import Section from '../section/Section';
import Notification from '../notification/Notification';

import s from './statistics.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Section title="Statistics">
      {!total
        ? <Notification message="No feedback given" />
        : (
          <div className={s.statistics}>
          <ul className="param-list">
            <li className="Statistics__item">
              Good: {good}
            </li>
            <li className="Statistics__item">
              Neutral: {neutral}
            </li>
            <li className="Statistics__item">
              Bad: {bad}
            </li>
            <li className="Statistics__item">
              Total: {total}
            </li>
            <li className="Statistics__item">
              Positive: {positivePercentage}%
            </li>
          </ul>
        </div>
      )
      }
    </Section>
  );
}



Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};


export default Statistics;