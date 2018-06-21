import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  handleClick = () => {
    this.props.checkAnswer(this.props.button_text);
  };

  render() {
    return (
      <li>
        <button onClick={this.handleClick}>
          {this.props.button_text}
        </button>
      </li>
    )
  }
}

export default QuizQuestionButton;
