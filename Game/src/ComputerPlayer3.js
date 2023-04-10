import React from 'react';
import ComputerPlayer from './ComputerPlayer3';

class ComputerPlayer3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDifficulty: this.props.difficultyLevel
    };
    this.computerPlayer = new ComputerPlayer(this.props.difficultyLevel);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.difficultyLevel !== this.props.difficultyLevel) {
      this.setState({ currentDifficulty: this.props.difficultyLevel });
      this.computerPlayer = new ComputerPlayer(this.props.difficultyLevel);
    }
  }

  getMoveEasy(squares) {
    const emptySquares = squares.reduce((acc, value, index) => {
      if (value === null) {
        acc.push(index);
      }
      return acc;
    }, []);
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    return emptySquares[randomIndex];
  }

  getMove = (squares) => {
    const { difficultyLevel } = this.props;
    let move;

    if (difficultyLevel === 'medium') {
      move = this.computerPlayer.getMoveMedium(squares);
    } else if (difficultyLevel === 'hard') {
      move = this.computerPlayer.getMoveHard(squares);
    } else {
      move = this.getMoveEasy(squares);
    }
    return move;
  };

  render() {
    return <h2>{this.state.currentDifficulty}</h2>;
  }
}

export default ComputerPlayer3;
