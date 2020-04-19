import React, { Component } from 'react';

class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.isActive,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      active: newProps.isActive,
    });
  }

  handleClick() {
    const activeClue = [];
    activeClue.push(this.props.clueID);
    this.props.setActiveClueBoxes(this.props.clueBoxes);
    this.props.setActiveClue(activeClue);
    this.props.setBoxInFocus(this.props.clueBoxes[0]);
  }

  render() {
    return (
      <li className={`clue ${this.state.active ? 'active' : ''}`}>
        <button className='clue-button' onClick={this.handleClick}>
          <span className='clue-number'>{this.props.clueNumber}.</span>
          <span className='clue-text'>{this.props.clueText}</span>
        </button>
      </li>
    );
  }
}
export default Clue;
