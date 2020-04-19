import React, { Component } from 'react';

class Box extends React.Component {
  constructor(props) {
    super(props);
    const { id, letter, label } = props;
    this.state = {
      value: null,
      answer: letter,
      id,
      label,
      highlight: props.isHighlighted,
      isInFocus: props.isInFocus,
      checkInput: props.checkAnswers,
      isCorrect: false,
      clearOnCheck: false,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      highlight: newProps.isHighlighted,
      isInFocus: newProps.isInFocus,
      checkInput: newProps.checkAnswers,
    });

    if (!!newProps.checkAnswers && this.state.clearOnCheck) {
      this.clearInput();
      this.props.afterCheck(this.state.id);
    }
  }

  componentDidUpdate(args) {
    if (!this.state.answer) {
      return;
    }

    if (this.state.isInFocus) {
      this.textInput.focus();
    }
  }

  checkInput(event) {
    const input = event.target.value.toUpperCase();
    const isCorrect = input === this.state.answer;

    this.setState({
      value: input,
      clearOnCheck: !isCorrect,
    });

    if (!isCorrect) {
      this.props.onIncorrect(this.state.id);
    } else {
      // call parent function
      this.props.addCorrectInput(this.state.id);
    }
  }

  clearInput() {
    this.setState({
      value: '',
      clearOnCheck: false,
    });
  }

  handleFocus(event) {
    this.props.setActiveClue(this.props.boxClues);

    let boxesToHighlight = [];

    for (const clue of this.props.boxClues) {
      boxesToHighlight = boxesToHighlight.concat(
        this.props.allClues[clue].boxes
      );
    }

    this.props.setActiveClueBoxes(boxesToHighlight);
    this.props.setBoxInFocus(this.state.id);
  }

  render() {
    let visibleLabel;
    let input;

    if (this.state.label) {
      visibleLabel = <span className='box-label'>{this.state.label}</span>;
    }

    if (this.props.letter) {
      input = (
        <input
          type='text'
          value={this.state.value}
          id={this.state.id}
          maxLength='1'
          className={`box-input ${this.state.highlight ? 'highlight' : ''}`}
          onChange={this.checkInput}
          onFocus={this.handleFocus}
          ref={(input) => {
            this.textInput = input;
          }}
        />
      );
    }

    return (
      <div className={`box ${!this.props.letter ? ' blank' : ''}`}>
        {visibleLabel}
        {input}
      </div>
    );
  }
}
export default Box;
