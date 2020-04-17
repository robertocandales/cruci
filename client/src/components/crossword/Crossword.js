// import React from 'react';
import React, { Component } from 'react';
import './Crossword.css';

const GRID_DATA = [
    //   Row A
      {
        id: 'A1',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'A2',
        letter: 'L',
        clues: ['Ac1'],
        label: 1,
        correct: false
      },
      {
        id: 'A3',
        letter: 'I',
        clues: ['Ac1', 'Dn2'],
        label: 2,
        correct: false
      },
      {
        id: 'A4',
        letter: 'F',
        clues: ['Ac1'],
        label: null,
        correct: false
      },
      {
        id: 'A5',
        letter: 'E',
        clues: ['Ac1'],
        label: null,
        correct: false
      },
      {
        id: 'A6',
        letter: 'C',
        clues: ['Ac1', 'Dn3'],
        label: 3,
        correct: false
      },
      {
        id: 'A7',
        letter: 'Y',
        clues: ['Ac1'],
        label: null,
        correct: false
      },
      {
        id: 'A8',
        letter: 'C',
        clues: ['Ac1'],
        label: null,
        correct: false
      },
      {
        id: 'A9',
        letter: 'L',
        clues: ['Ac1'],
        label: null,
        correct: false
      },
      {
        id: 'A10',
        letter: 'E',
        clues: ['Ac1'],
        label: null,
        correct: false
      },
      {
        id: 'A11',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
    //   Row B
      {
        id: 'B1',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'B2',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'B3',
        letter: 'M',
        clues: ['Dn2'],
        label: null,
        correct: false
      },
      {
        id: 'B4',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'B5',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'B6',
        letter: 'O',
        clues: ['Dn3'],
        label: null,
        correct: false
      },
      {
        id: 'B7',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'B8',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'B9',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'B10',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'B11',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
    //   Row C
      {
        id: 'C1',
        letter: 'C',
        clues: ['Ac4', 'Dn4'],
        label: 4,
        correct: false
      },
      {
        id: 'C2',
        letter: 'O',
        clues: ['Ac4'],
        label: null,
        correct: false
      },
      {
        id: 'C3',
        letter: 'M',
        clues: ['Ac4', 'Dn2'],
        label: null,
        correct: false
      },
      {
        id: 'C4',
        letter: 'P',
        clues: ['Ac4'],
        label: null,
        correct: false
      },
      {
        id: 'C5',
        letter: 'O',
        clues: ['Ac4'],
        label: null,
        correct: false
      },
      {
        id: 'C6',
        letter: 'N',
        clues: ['Ac4', 'Dn3'],
        label: null,
        correct: false
      },
      {
        id: 'C7',
        letter: 'E',
        clues: ['Ac4'],
        label: null,
        correct: false
      },
      {
        id: 'C8',
        letter: 'N',
        clues: ['Ac4'],
        label: null,
        correct: false
      },
      {
        id: 'C9',
        letter: 'T',
        clues: ['Ac4'],
        label: null,
        correct: false
      },
      {
        id: 'C10',
        letter: 'S',
        clues: ['Ac4', 'Dn5'],
        label: 5,
        correct: false
      },
      {
        id: 'C11',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
    // Row D
      {
        id: 'D1',
        letter: 'U',
        clues: ['Dn4'],
        label: null,
        correct: false
      },
      {
        id: 'D2',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'D3',
        letter: 'U',
        clues: ['Dn2'],
        correct: false
      },
      {
        id: 'D4',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'D5',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'D6',
        letter: 'S',
        clues: ['Dn3'],
        label: null,
        correct: false
      },
      {
        id: 'D7',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'D8',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'D9',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'D10',
        letter: 'U',
        clues: ['Dn5'],
        label: null,
        correct: false
      },
      {
        id: 'D11',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
    //   Row E
      {
        id: 'E1',
        letter: 'R',
        clues: ['Dn4'],
        label: null,
        correct: false
      },
      {
        id: 'E2',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'E3',
        letter: 'T',
        clues: ['Dn2'],
        label: null,
        correct: false
      },
      {
        id: 'E4',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'E5',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'E6',
        letter: 'T',
        clues: ['Dn3'],
        label: null,
        correct: false
      },
      {
        id: 'E7',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'E8',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'E9',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'E10',
        letter: 'P',
        clues: ['Dn5'],
        label: null,
        correct: false
      },
      {
        id: 'E11',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
    //   Row F
        {
        id: 'F1',
        letter: 'L',
        clues: ['Dn4'],
        label: null,
        correct: false
      },
      {
        id: 'F2',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'F3',
        letter: 'A',
        clues: ['Dn2'],
        label: null,
        correct: false
      },
      {
        id: 'F4',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'F5',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'F6',
        letter: 'R',
        clues: ['Dn3', 'Ac6'],
        label: 6,
        correct: false
      },
      {
        id: 'F7',
        letter: 'E',
        clues: ['Ac6'],
        label: null,
        correct: false
      },
      {
        id: 'F8',
        letter: 'N',
        clues: ['Ac6'],
        label: null,
        correct: false
      },
      {
        id: 'F9',
        letter: 'D',
        clues: ['Ac6'],
        label: null,
        correct: false
      },
      {
        id: 'F10',
        letter: 'E',
        clues: ['Ac6', 'Dn5'],
        label: null,
        correct: false
      },
      {
        id: 'F11',
        letter: 'R',
        clues: ['Ac6'],
        label: null,
        correct: false
      },
    //   Row G
      {
        id: 'G1',
        letter: 'Y',
        clues: ['Dn4'],
        label: null,
        correct: false
      },
      {
        id: 'G2',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'G3',
        letter: 'B',
        clues: ['Dn2'],
        label: null,
        correct: false
      },
      {
        id: 'G4',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'G5',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'G6',
        letter: 'U',
        clues: ['Dn3'],
        label: null,
        correct: false
      },
      {
        id: 'G7',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'G8',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'G9',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'G10',
        letter: 'R',
        clues: ['Dn5'],
        label: null,
        correct: false
      },
      {
        id: 'G11',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
    //   Row H
      {
        id: 'H1',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'H2',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'H3',
        letter: 'L',
        clues: ['Dn2'],
        label: null,
        correct: false
      },
      {
        id: 'H4',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'H5',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'H6',
        letter: 'C',
        clues: ['Dn3'],
        label: null,
        correct: false
      },
      {
        id: 'H7',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'H8',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'H9',
        letter: 'K',
        clues: ['Dn7'],
        label: 7,
        correct: false
      },
      {
        id: 'H10',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'H11',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
    // Row I
      {
        id: 'I1',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'I2',
        letter: 'S',
        clues: ['Ac8'],
        label: 8,
        correct: false
      },
      {
        id: 'I3',
        letter: 'E',
        clues: ['Ac8', 'Dn2'],
        label: null,
        correct: false
      },
      {
        id: 'I4',
        letter: 'T',
        clues: ['Ac8'],
        label: null,
        correct: false
      },
      {
        id: 'I5',
        letter: 'S',
        clues: ['Ac8'],
        label: null,
        correct: false
      },
      {
        id: 'I6',
        letter: 'T',
        clues: ['Ac8', 'Dn3'],
        label: null,
        correct: false
      },
      {
        id: 'I7',
        letter: 'A',
        clues: ['Ac8'],
        label: null,
        correct: false
      },
      {
        id: 'I8',
        letter: 'T',
        clues: ['Ac8'],
        label: null,
        correct: false
      },
      {
        id: 'I9',
        letter: 'E',
        clues: ['Ac8', 'Dn7'],
        label: null,
        correct: false
      },
      {
        id: 'I10',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'I11',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
    // Row J
      {
        id: 'J1',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'J2',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'J3',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'J4',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'J5',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'J6',
        letter: 'O',
        clues: ['Dn3'],
        label: null,
        correct: false
      },
      {
        id: 'J7',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'J8',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'J9',
        letter: 'Y',
        clues: ['Dn7'],
        label: null,
        correct: false
      },
      {
        id: 'J10',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'J11',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
    // Row K
      {
        id: 'K1',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'K2',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'K3',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'K4',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'K5',
        letter: 'P',
        clues: ['Ac9'],
        label: 9,
        correct: false
      },
      {
        id: 'K6',
        letter: 'R',
        clues: ['Ac9', 'Dn3'],
        label: null,
        correct: false
      },
      {
        id: 'K7',
        letter: 'O',
        clues: ['Ac9'],
        label: null,
        correct: false
      },
      {
        id: 'K8',
        letter: 'P',
        clues: ['Ac9'],
        label: null,
        correct: false
      },
      {
        id: 'K9',
        letter: 'S',
        clues: ['Ac9', 'Dn7'],
        label: null,
        correct: false
      },
      {
        id: 'K10',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
      {
        id: 'K11',
        letter: null,
        clues: null,
        label: null,
        correct: false
      },
    ];
    
    const CLUE_DATA = {
      'Ac1': {
        clue: 'You can call these types of methods when components will be or have been mounted, updated, or unmounted',
        answer: 'lifecycle',
        direction: 'across',
        number: 1,
        boxes: ['A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10']
      },
      'Dn2': {
        clue: 'The unchanging nature of 9 Across',
        answer: 'immutable',
        direction: 'down',
        number: 2,
        boxes: ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3']
      },
      'Dn3': {
        clue: 'The method in which you assign a component\'s initial state',
        answer: 'constructor',
        direction: 'down',
        number: 3,
        boxes: ['A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6', 'I6', 'J6', 'K6']
      },
      'Ac4': {
        clue: 'Independent, reusable pieces that make up your app',
        answer: 'components',
        direction: 'across',
        number: 4,
        boxes: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10']
      },
      'Dn4': {
        clue: 'The type of braces you use to embed JavaScript expressions in JSX',
        answer: 'curly',
        direction: 'down',
        number: 4,
        boxes: ['C1', 'D1', 'E1', 'F1', 'G1']
      },
      'Dn5': {
        clue: 'A method that runs the base constructor class',
        answer: 'super',
        direction: 'down',
        number: 5,
        boxes: ['C10', 'D10', 'E10', 'F10', 'G10']
      },
      'Ac6': {
        clue: 'A method to create and insert a component in the DOM',
        answer: 'render',
        direction: 'across',
        number: 6,
        boxes: ['F6', 'F7', 'F8', 'F9', 'F10', 'F11']
      },
      'Dn7': {
        clue: 'A unique identifier for list items',
        answer: 'keys',
        direction: 'down',
        number: 7,
        boxes: ['H9', 'I9', 'J9', 'K9']
      },
      'Ac8': {
        clue: 'The only method by which you can update a component\'s state',
        answer: 'setstate',
        direction: 'across',
        number: 8,
        boxes: ['I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9']
      },
      'Ac9': {
        clue: 'A read-only object that contains a component\'s attributes passed down to it from its parent',
        answer: 'props',
        direction: 'across',
        number: 9,
        boxes: ['K5', 'K6', 'K7', 'K8', 'K9']
      }
    };
    
    class Crossword extends React.Component {
      constructor(props) {
        super(props);
        let numInputs = 0;
        for (const box of GRID_DATA) {
          if (box.letter) {
            numInputs++;
          }
        }
        this.state = {
          grid: GRID_DATA,
          clues: CLUE_DATA,
          activeClueBoxes: CLUE_DATA['Ac1'].boxes,
          activeClue: ['Ac1'],
          boxInFocus: null,
          shouldCheckAnswers: false,
          incorrectInputs: [],
          message: "",
          totalCorrectInputs: numInputs
        };
        
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
          activeClueBoxes: boxes
        });
      }
      
      setActiveClue(clue) {
        this.setState({
          activeClue: clue
        });
      }
      
      setBoxInFocus(box) {
        this.setState({
          boxInFocus: box
        });
      }
      
      checkAnswers() {
        let correctAnswers = 0;
        for (const box of this.state.grid)
        {
          if (box.letter && box.correct)
            correctAnswers++;
        }
        if (correctAnswers == this.state.totalCorrectInputs)
        {
          this.setState({
            message: "¡Has resuelto el crucigrama!"
          });
        }
        else
        {
          this.setState({
            message: "Incorrecto ¡Sigue intentando!"
          });
        }
        this.setState({
          shouldCheckAnswers: true
        });
      }

      resetCheckAnswers(clearedInput) {
        const unclearedInputs = this.state.incorrectInputs;
        unclearedInputs.splice(unclearedInputs.indexOf(clearedInput), 1);
        
        if (!unclearedInputs.length) {
          this.setState({
            shouldCheckAnswers: false,
            incorrectInputs: []
          });
        }
      }
      
      addIncorrectInput(input) {
        const { incorrectInputs } = this.state;
        incorrectInputs.push(input);
        this.setState({
          incorrectInputs: incorrectInputs
        });
        // Set the box on false
        let id = input;
        this.setState(prevState => ({
          grid: prevState.grid.map(
            el => el.id === id? { ...el, correct: false }: el
          )
        }));
      }

      addCorrectInput(input) {
        let id = input;
        this.setState(prevState => ({
          grid: prevState.grid.map(
            el => el.id === id? { ...el, correct: true }: el
          )
        }));
      }
      
      render() {
        return (
          <main className="crossword">
            <Clues clues={ this.state.clues } setActiveClueBoxes={ this.setActiveClueBoxes } activeClue={ this.state.activeClue } setActiveClue={ this.setActiveClue } setBoxInFocus={ this.setBoxInFocus } />
            <Board grid={ this.state.grid } allClues={ this.state.clues } clues={ this.state.clues } setActiveClueBoxes={ this.setActiveClueBoxes } highlightedBoxes={ this.state.activeClueBoxes } setActiveClue = { this.setActiveClue } setBoxInFocus={ this.setBoxInFocus } boxInFocus={ this.state.boxInFocus } incorrectInputs = { this.state.incorrectInputs } onIncorrect={ this.addIncorrectInput } checkAnswers={ this.state.shouldCheckAnswers } afterCheck={ this.resetCheckAnswers } addCorrectInput={ this.addCorrectInput }/>
            <div className="crossword-actions">
              <CrosswordAction action="Verificar respuestas" handleClick={ this.checkAnswers } message={ this.state.message }/>
            </div>
          </main>
        );
      }
    }
    
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
          }
          else {
            cluesDown.push(clue);
          }
        }
        
        this.state = {
          across: cluesAcross,
          down: cluesDown
        };
      }
      
      render() {
        return (
          <div className="clue-lists">
            <div className="clue-list-wrapper">
              <h2>Horizontal</h2>
              <ol className="clue-list">
                { this.state.across.map((clueData) => <Clue key={ clueData.id } clueID={ clueData.id } clueText={ clueData.clue } clueNumber={ clueData.number } clueBoxes={ clueData.boxes } setActiveClueBoxes={ this.props.setActiveClueBoxes } setActiveClue={ this.props.setActiveClue } isActive={ this.props.activeClue.indexOf(clueData.id) > -1 } setBoxInFocus={ this.props.setBoxInFocus }/>) }
              </ol>
            </div>
            <div className="clue-list-wrapper">
              <h2>Vertical</h2>
              <ol className="clue-list">
                { this.state.down.map((clueData) => <Clue key={ clueData.id } clueID={ clueData.id } clueText={ clueData.clue } clueNumber={ clueData.number } clueBoxes={ clueData.boxes } setActiveClueBoxes={ this.props.setActiveClueBoxes } setActiveClue={ this.props.setActiveClue } isActive={ this.props.activeClue.indexOf(clueData.id) > -1 } setBoxInFocus={ this.props.setBoxInFocus }/>)
                }
              </ol>
            </div>
          </div>
        );
      }
    }
    
    class Clue extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          active: props.isActive
        };
        
        this.handleClick = this.handleClick.bind(this);
      }
      
      componentWillReceiveProps(newProps) {
        this.setState({
          active: newProps.isActive
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
          <li className={`clue ${ this.state.active ? 'active' : ''}`}>
            <button className="clue-button" onClick={ this.handleClick }>
              <span className="clue-number">{ this.props.clueNumber }.</span>
              <span className="clue-text">{ this.props.clueText }</span>
            </button>
          </li>
        );
      }
    }
    
    class Board extends React.Component {
      render() {
        return (
          <div className="crossword-board">
            { this.props.grid.map((box) => {
              const { id, letter, clues, label } = box;
              return <Box key={ id } id={ id } letter={ letter } boxClues = { clues } label={ label } allClues={ this.props.allClues } isHighlighted={ this.props.highlightedBoxes.indexOf(id) > -1 } setActiveClueBoxes={ this.props.setActiveClueBoxes } setActiveClue={ this.props.setActiveClue } setBoxInFocus={ this.props.setBoxInFocus } isInFocus={ this.props.boxInFocus == id } incorrectInputs = { this.props.incorrectInputs } onIncorrect={ this.props.onIncorrect } checkAnswers={ this.props.checkAnswers } afterCheck={ this.props.afterCheck } addCorrectInput={ this.props.addCorrectInput }/>
              })
            }
          </div>
        );
      }
    }
    
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
          clearOnCheck: false
        };
     
        this.handleFocus = this.handleFocus.bind(this);
        this.checkInput = this.checkInput.bind(this);
        this.clearInput = this.clearInput.bind(this);
      }
      
      componentWillReceiveProps(newProps) {
        this.setState({
          highlight: newProps.isHighlighted,
          isInFocus: newProps.isInFocus,
          checkInput: newProps.checkAnswers
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
          clearOnCheck: !isCorrect
        });
        
        if (!isCorrect) {
          this.props.onIncorrect(this.state.id);
        }
        else
        {
          // call parent function
          this.props.addCorrectInput(this.state.id);
        }
      }
      
      clearInput() {
        this.setState({
          value: '',
          clearOnCheck: false
        });
      }
      
      handleFocus(event) {
        this.props.setActiveClue(this.props.boxClues);
        
        let boxesToHighlight = [];
        
        for (const clue of this.props.boxClues) {
          boxesToHighlight = boxesToHighlight.concat(this.props.allClues[clue].boxes);
        }
        
        this.props.setActiveClueBoxes(boxesToHighlight);
        this.props.setBoxInFocus(this.state.id);
      }
      
      render() {
        let visibleLabel;
        let input;
        
        if (this.state.label) {
          visibleLabel = <span className="box-label">{ this.state.label }</span>
        }
        
        if (this.props.letter) {  
          input = <input type="text" value={ this.state.value } id={ this.state.id } maxLength="1" className={ `box-input ${this.state.highlight ? 'highlight' : ''}` } onChange={ this.checkInput } onFocus={ this.handleFocus } ref={(input) => { this.textInput = input }} />
        }
        
       return (
        <div className={ `box ${!this.props.letter ? ' blank' : ''}` }>
           { visibleLabel }
           { input }
        </div>
       );    
      }
    }
    
    class CrosswordAction extends React.Component {
      render() {
        return (
            // <div style={{ flexbasis: "100%"}}></div>
          
          <div className="btnMsg" style={{ color: '#e83c7b'}} >
            
              <button style={{ color: '#ffffff', backgroundColor:'#e83c7b', height: '60px', fontSize:'15px', fontWeight: 'bold'}} onClick={ this.props.handleClick }>{ this.props.action }</button>
              {/* <h2 style={{ color: '#e83c7b' }}>Resultados:</h2> */}
              <br></br>
              <p>{ this.props.message }</p>
            
          </div> 
        );
      }
    }
    
    // ReactDOM.render(<Crossword />, document.getElementById('Crossword'));
    export default Crossword;