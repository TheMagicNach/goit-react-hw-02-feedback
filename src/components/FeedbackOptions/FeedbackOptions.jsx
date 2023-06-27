import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


export class FeedbackOptions extends Component {
  
  render() {
    const { options , onFeedBackbtn } = this.props;

    return (
      <div className={css.feedback}>
        {options.map(option => (
          <button
            key={option}
            className={css.button}
            onClick={() => onFeedBackbtn(option)}
          >
            {option}
          </button>
      ))}
    </div>)

  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFeedBackbtn: PropTypes.func.isRequired,
};
