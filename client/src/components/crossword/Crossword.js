// import React from 'react';
import React from 'react';

import './Crossword.css';
import { GRID_DATA } from './components/GridData';
import { CLUE_DATA } from './components/CuleData';
import Clues from './components/Clues';
import Board from './components/Board';
import CrosswordAction from './components/CrosswordAction';
//import CrosswordGenerator from './components/CrosswordGenerator';

class Crossword extends React.Component {
  constructor(props) {
    super(props);
    let numInputs = 0;

    this.state = {
      grid: GRID_DATA,
      clues: CLUE_DATA,
      activeClueBoxes: CLUE_DATA['Ac1'].boxes,
      activeClue: ['Ac1'],
      boxInFocus: null,
      shouldCheckAnswers: false,
      incorrectInputs: [],
      message: '',
      totalCorrectInputs: numInputs,
    };
    for (const box of GRID_DATA) {
      if (box.letter) {
        numInputs++;
      }
    }

    this.setActiveClueBoxes = this.setActiveClueBoxes.bind(this);
    this.setActiveClue = this.setActiveClue.bind(this);
    this.setBoxInFocus = this.setBoxInFocus.bind(this);
    this.checkAnswers = this.checkAnswers.bind(this);
    this.addIncorrectInput = this.addIncorrectInput.bind(this);
    this.addCorrectInput = this.addCorrectInput.bind(this);
    this.resetCheckAnswers = this.resetCheckAnswers.bind(this);
  }

  setActiveClueBoxes(boxes) {
    this.setState({
      activeClueBoxes: boxes,
    });
  }

  setActiveClue(clue) {
    this.setState({
      activeClue: clue,
    });
  }

  setBoxInFocus(box) {
    this.setState({
      boxInFocus: box,
    });
  }

  checkAnswers() {
    let correctAnswers = 0;
    for (const box of this.state.grid) {
      if (box.letter && box.correct) correctAnswers++;
    }
    if (correctAnswers === this.state.totalCorrectInputs) {
      this.setState({
        message: '¡Has resuelto el crucigrama!',
      });
    } else {
      this.setState({
        message: 'Incorrecto ¡Sigue intentando!',
      });
    }
    this.setState({
      shouldCheckAnswers: true,
    });
  }

  resetCheckAnswers(clearedInput) {
    const unclearedInputs = this.state.incorrectInputs;
    unclearedInputs.splice(unclearedInputs.indexOf(clearedInput), 1);

    if (!unclearedInputs.length) {
      this.setState({
        shouldCheckAnswers: false,
        incorrectInputs: [],
      });
    }
  }

  addIncorrectInput(input) {
    const { incorrectInputs } = this.state;
    incorrectInputs.push(input);
    this.setState({
      incorrectInputs: incorrectInputs,
    });
    // Set the box on false
    let id = input;
    this.setState((prevState) => ({
      grid: prevState.grid.map((el) =>
        el.id === id ? { ...el, correct: false } : el
      ),
    }));
  }

  addCorrectInput(input) {
    let id = input;
    this.setState((prevState) => ({
      grid: prevState.grid.map((el) =>
        el.id === id ? { ...el, correct: true } : el
      ),
    }));
  }

  render() {
    return (
      <div className='crossword'>
        <div>
          <div>
            <Clues
              clues={this.state.clues}
              setActiveClueBoxes={this.setActiveClueBoxes}
              activeClue={this.state.activeClue}
              setActiveClue={this.setActiveClue}
              setBoxInFocus={this.setBoxInFocus}
            />
          </div>
          <div classnames='container'>
            <Board
              grid={this.state.grid}
              allClues={this.state.clues}
              clues={this.state.clues}
              setActiveClueBoxes={this.setActiveClueBoxes}
              highlightedBoxes={this.state.activeClueBoxes}
              setActiveClue={this.setActiveClue}
              setBoxInFocus={this.setBoxInFocus}
              boxInFocus={this.state.boxInFocus}
              incorrectInputs={this.state.incorrectInputs}
              onIncorrect={this.addIncorrectInput}
              checkAnswers={this.state.shouldCheckAnswers}
              afterCheck={this.resetCheckAnswers}
              addCorrectInput={this.addCorrectInput}
            />
          </div>

          <div className='crossword-actions mt-4 '>
            <CrosswordAction
              action='Verificar respuestas'
              handleClick={this.checkAnswers}
              message={this.state.message}
            />
          </div>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<Crossword />, document.getElementById('Crossword'));
export default Crossword;
