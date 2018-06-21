import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  checkAnswer = (answer) => {
    answer === this.props.quiz_question.answer ?
      this.props.nextQuestion() :
      alert('Wrong! Try again!');
  };

  render() {
      return (
        <main>
          <section>
            <p>{this.props.quiz_question.instruction_text}</p>
          </section>
          <section className="buttons">
            <ul>
              {
                this.props.quiz_question.answer_options.map((answer_option, index) => {
                  return <QuizQuestionButton key={index} button_text={answer_option}
                                             checkAnswer={this.checkAnswer} />
                }) 
              }
            </ul>
          </section>
        </main> 
      )
  };
}

export default QuizQuestion;
