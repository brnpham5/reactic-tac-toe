import React from 'react';
import './Board.css';

import Board from "./Board"

export default class TicTacGame extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        dimension: 3,
        tempDimension: 3,
        history: [{
          squares: []
        }],
        stepNumber: 0,
        xIsNext: true,
        lines: [],
      }
  
      this.state.history.squares = Array(this.state.dimension * this.state.dimension).fill(null);
  
      let newLines = [];
      let currentLines = this.calculateRows();
      currentLines.forEach(line => {
        newLines.push(line);
      });
      currentLines = this.calculateCols();
      currentLines.forEach(line => {
        newLines.push(line);
      });
      currentLines = this.calculateDiags();
      currentLines.forEach(line => {
        newLines.push(line);
      });
      this.state.lines = newLines;
  
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = this.calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      let status;
      if(winner){
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game">
            <header>
                <h1>Reactic Tac Toe</h1>
                <section className="setting dimension">
                    <span className="description">
                        Size (3- 10)
                    </span>
                    <input className="board-size-input" type="number" min="3" max="10" onChange={event => this.handleDimensionChange(event)}></input>
                    <button onClick={() => this.handleSubmit()}>Change</button>
                </section>
            </header>
            <br></br>
            <main className="game-area">
                <Board 
                squares={current.squares}
                dimension={this.state.dimension}
                onClick={(i) => this.clickSquare(i)}
                />
            </main>
            <section className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </section>
        </div>
      );
    }
  
    clickSquare(i){
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if(this.calculateWinner(squares) || squares[i]){
        return;
      }
      squares[i] = this.state.xIsNext ? "X": "O";
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step){
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }
  
    calculateWinner(squares) {
      /* Example 3x3 victory lines
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      */
  
      for (let i = 0; i < this.state.lines.length; i++) {
        const line = this.state.lines[i];
        
        if(this.compareLine(squares, line) === true){
          return squares[line[0]];
        }
      }
      
      return null;
    }
  
    compareLine(squares, line){
      const a = squares[line[0]];
      let allMatch = true;
      for(let i = 1; i < line.length; i++){
        if(a === undefined || squares[line[i]] === undefined || a !== squares[line[i]]){
          allMatch = false;
        }
      }
  
      return allMatch;
    }

    calculateWinConditions(){
      let newLines = [];
      let currentLines = this.calculateRows();
      currentLines.forEach(line => {
        newLines.push(line);
      });
      currentLines = this.calculateCols();
      currentLines.forEach(line => {
        newLines.push(line);
      });
      currentLines = this.calculateDiags();
      currentLines.forEach(line => {
        newLines.push(line);
      });
      this.setState({
        lines: newLines
      });
    }
  
    calculateRows(){
      let lines = [];
      const dimension = this.state.dimension;
  
      for(let i = 0; i < dimension; i++){
        let row = [];
        for(let j = 0; j < dimension; j++){
          row.push((i * dimension) + j);
        }
        
        lines.push(row);
      }
  
      return lines;
    }
  
    calculateCols(){
      let lines = [];
      const dimension = this.state.dimension;
  
      for(let i = 0; i < dimension; i++){
        let col = [];
        for(let j = 0; j < dimension; j++){
          col.push(i + (j * dimension));
        }
  
        lines.push(col);
  
      }
  
      return lines;
    }
  
    calculateDiags(){
      let lines = [];
      //top left - bottom right
      let diag_tl_br = [];
  
      //top right - bottom left
      let diag_tr_bl = [];
      const dimension = this.state.dimension;
  
      for(let i = 0; i < dimension; i++){
        diag_tl_br.push((i * dimension) + i);
        diag_tr_bl.push(((i + 1) * dimension) - (i + 1));
      }
  
      lines.push(diag_tl_br);
      lines.push(diag_tr_bl);
  
      return lines;
     
    }

    handleSubmit(event){
      this.setState({ dimension: this.state.tempDimension }, function () {
        this.calculateWinConditions();
        this.jumpTo(0);
      });
      

    }

    handleDimensionChange(event){
      let val = 3;
      if(event.target.value > 3 && event.target.value <= 10){
        val = event.target.value;
      } else if(event.target.value > 10){
        val = 10;
      }
      this.setState({
        tempDimension: val
      });
        
    }
  }
  