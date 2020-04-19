import React, { Component } from 'react';
import Clue from './Clue';

class Clues extends React.Component {
  constructor(props) {
    super(props);
    const cluesAcross = [];
    const cluesDown = [];

    for (const key in this.props.clues) {
      const clue = this.props.clues[key];
      clue.id = key;
      if (clue.direction === 'across') {
        cluesAcross.push(clue);
      } else {
        cluesDown.push(clue);
      }
    }

    this.state = {
      across: cluesAcross,
      down: cluesDown,
    };
  }

  render() {
    return (
      <div className='clue-lists'>
        <div className='clue-list-wrapper'>
          <h2>Horizontal</h2>
          <ol className='clue-list'>
            {this.state.across.map((clueData) => (
              <Clue
                key={clueData.id}
                clueID={clueData.id}
                clueText={clueData.clue}
                clueNumber={clueData.number}
                clueBoxes={clueData.boxes}
                setActiveClueBoxes={this.props.setActiveClueBoxes}
                setActiveClue={this.props.setActiveClue}
                isActive={this.props.activeClue.indexOf(clueData.id) > -1}
                setBoxInFocus={this.props.setBoxInFocus}
              />
            ))}
          </ol>
        </div>
        <div className='clue-list-wrapper'>
          <h2>Vertical</h2>
          <ol className='clue-list'>
            {this.state.down.map((clueData) => (
              <Clue
                key={clueData.id}
                clueID={clueData.id}
                clueText={clueData.clue}
                clueNumber={clueData.number}
                clueBoxes={clueData.boxes}
                setActiveClueBoxes={this.props.setActiveClueBoxes}
                setActiveClue={this.props.setActiveClue}
                isActive={this.props.activeClue.indexOf(clueData.id) > -1}
                setBoxInFocus={this.props.setBoxInFocus}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Clues;
