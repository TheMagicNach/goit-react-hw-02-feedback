import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Title.module.css';


export class Title extends Component{
  render() {
    const { title, children } = this.props;
    
      return (
      <div >
        <h2 className={css.title}>{title}</h2>
        {children}
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};