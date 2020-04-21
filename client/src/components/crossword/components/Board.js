import React from 'react';
import Box from './Box';
import Timer from './Timer';

class Board extends React.Component {
  render() {
    return (
      <div className='container'>
        <div clasName='mb-2'>
          <Timer />
        </div>

        <div className='crossword-board mt-4'>
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
                isInFocus={this.props.boxInFocus === id}
                incorrectInputs={this.props.incorrectInputs}
                onIncorrect={this.props.onIncorrect}
                checkAnswers={this.props.checkAnswers}
                afterCheck={this.props.afterCheck}
                addCorrectInput={this.props.addCorrectInput}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Board;
