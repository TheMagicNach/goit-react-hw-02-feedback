import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';


export class Statistic extends Component {
  
  render() {
    const { good, neutral, bad, total, positivePercentage  } = this.props;

    return (
      <div className={css.statistic}>
        <p className={css.item}>Good: {good}</p>
        <p className={css.item}>Neutral: {neutral}</p>
        <p className={css.item}>Bad: {bad}</p>
        <p className={css.item}>Total: {total}</p>
        <p className={css.item}>Positive Feedback: {positivePercentage}%</p>
      </div>
    )
  }
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};