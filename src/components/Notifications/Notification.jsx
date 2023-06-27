import PropTypes from 'prop-types';
import css from './Notification.module.css';
import { Component } from 'react';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <p  className={css.title}>{message}</p>
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};