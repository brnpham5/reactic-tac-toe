import React from 'react';
import '../index.css';

/**
 * Board Component
 */
export default class Board extends React.Component {
  render() {
    return (
      <div>
          {this.renderBoard()}
      </div>
    );
  }


  renderSquare(i) {
      return (
      <Square 
      key={i}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      />
      );
  }

  renderRow(row){
      let rows = [];
      for (let i = 0; i < this.props.dimension; i++) {
          rows.push(this.renderSquare(i + (row * this.props.dimension)));
      }

      return (
      <div key={"board-row-" + row}className="board-row">
          {rows}
      </div>
      )
  }

  renderBoard(){
      let board = [];
      for(let i = 0; i < this.props.dimension; i++){
        board.push(this.renderRow(i));
      }

      return (
        <div className="game-board">
          {board}
        </div>
      )
  }
}

/**
 * Square component (replaced by Square function)
 */
export class SquareComponent extends React.Component {
    render() {
      return (
        <button 
          className="square" 
          onClick={() => this.clickSquare()}
        >
          {this.props.value}
        </button>
      );
    }
  
    clickSquare(){
      this.props.onClick();
    }
  }

/**
 * Returns a square element
 * @param {*} props 
 */
export function Square(props){
    return(
        <button className="square" onClick={props.onClick}>
          <div className="content">
            {props.value}
          </div>
        </button>
    )
}