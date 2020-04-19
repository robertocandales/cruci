import React, { Component } from 'react';
import Box from './Box';

class Board extends React.Component {
  render() {
    return (
      <div className='crossword-board'>
        {this.props.grid.map((box) => {
          const { id, letter, clues, label } = box;
          return (
            <Box
              key={id}
              id={id}
              letter={letter}
              boxClues={clues}
              label={label}
              allClues={this.props.allClues}
              isHighlighted={this.props.highlightedBoxes.indexOf(id) > -1}
              setActiveClueBoxes={this.props.setActiveClueBoxes}
              setActiveClue={this.props.setActiveClue}
              setBoxInFocus={this.props.setBoxInFocus}
              isInFocus={this.props.boxInFocus == id}
              incorrectInputs={this.props.incorrectInputs}
              onIncorrect={this.props.onIncorrect}
              checkAnswers={this.props.checkAnswers}
              afterCheck={this.props.afterCheck}
              addCorrectInput={this.props.addCorrectInput}
            />
          );
        })}
      </div>
    );
  }
}
export default Board;
