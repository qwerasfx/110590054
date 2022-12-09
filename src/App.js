import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import MySidebar from './components/sidebar';
import Main from './components/main';
import React from 'react';
/*
function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO *//*}
      </button>
    );
  }
}
/*
class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status *//*}/*</div>
          <ol>{/* TODO *//*}/*</ol>
        </div>
      </div>
    );
  }
}*/
import Board from './Board';
import Info from "./Info";
  
// Importing the useState hook
import { useState } from 'react';
  
function App() {
  
    // Creating a reset state, which indicates whether 
    // the game should be reset or not
    const [reset, setReset] = useState(false);
  
    // Creating a winner state, which indicates
    // the current winner
    const [winner, setWinner] = useState('');
  
    // Sets the reset property to true
    // which starts the chain 
    // reaction of resetting the board
    const resetBoard = () => {
        setReset(true);
    }
  
    return (
        <div className="App">
            {/* Shrinks the popup when there is no winner */}
            <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                {/* Display the current winner */}
                <div className='winner-text'>{winner}</div>
                {/* Button used to reset the board */}
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div>
            {/* Custom made board component comprising of 
            the tic-tac-toe board  */}
            <Board reset={reset} setReset={setReset} winner={winner} 
                setWinner={setWinner} />
            <Info />
        </div>
    );
}

export default App;