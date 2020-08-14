import React, { Component } from "react";
import Board from "./Board";
import calculateWinner from "./calculateWinner";
import "./index.css";
import Swal from "sweetalert2";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  componentDidMount() {
    this.playerNamePopup();
  }

  playerNamePopup() {
    (async () => {
      const { value: name1 } = await Swal.fire({
        title: "Please enter Player1's name",
        input: "text",
        allowOutsideClick: false,
      });
      localStorage.setItem("player1", name1);
      this.playerNamePopup2();
    })();
  }

  playerNamePopup2() {
    (async () => {
      const { value: name2 } = await Swal.fire({
        title: "Please enter Player2's name",
        input: "text",
        allowOutsideClick: false,
      });
      localStorage.setItem("player2", name2);
    })();
  }

  popupAlert() {
    let player1 = localStorage.getItem("player1");
    let player2 = localStorage.getItem("player2");
    let winner = this.state.xIsNext ? player1 : player2;

    const { value: name } = Swal.fire({
      title: `${"Congratulation, "}` + `${winner}` + "!",
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      if (calculateWinner(squares)) {
        this.popupAlert();
      } else {
        return;
      }
    } else {
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares,
          },
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      //set xIsNext to true only at even number (除數後的餘數)
    });
  }

  desk(move) {
    // let player1 = localStorage.getItem("player1");
    // let player2 = localStorage.getItem("player2");

    // if (move !== 0) {
    //   if (move % 2 === 0) {
    //     return player2 + "'s" + " " + `${move}` + " " + "move";
    //   } else {
    //     return player1 + "'s" + " " + `${move}` + " " + "move";
    //   }
    // } else if (move == 0) {
    //   return "Click here to start again!";
    // } else {
    //   return "something went wrong!";
    // }

    if (move == 9) {
      return "draw!";
    } else if (move == 0) {
      return "Click here to start again!";
    } else if (move !== 0) {
      return "Click here to go back to " + `${move}` + " move";
    } else {
      return "something went wrong!";
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // map(currentValue, index)
    const moves = history.map((step, move) => {
      // const desc = move ? "Go to move #" + move : "Go to game start";

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{this.desk(move)}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <ul>{moves}</ul>
        </div>
      </div>
    );
  }
}

export default Game;
