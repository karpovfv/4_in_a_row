import React, {Component} from 'react';
import Welcome from "../Welcome/Welcome";
import {Redirect} from 'react-router-dom';
import Row from "../Row/Row";

class Game extends Component {
    constructor() {
        super();
        this.state = {
            field: [],
            columns: 7,
            rows: 6,
            playerOne: 1,
            playerTwo: 2,
            currentPlayer: null,
            winner: null,
            isGameEnd: true,
        };

        // this.makeMove = this.makeMove.bind(this);
        this.startGame = this.startGame.bind(this);
        this.newGame = this.newGame.bind(this);
        this.handleChoose = this.handleChoose.bind(this);
    };

    makeMove = (column) => {
        if (!this.state.isGameEnd) {
            const newField = [...this.state.field];
            const newPlayer = this.state.currentPlayer === 1 ? 2 : 1;
            for (let row = 5; row >= 0; row--) {
                if (!newField[row][column]) {
                    newField[row][column] = this.state.currentPlayer;
                    break;
                }
            }

            let currentState = this.checkField(newField);
            switch (currentState) {
                case this.state.playerOne:
                    this.setState({
                        field: newField,
                        isGameEnd: true,
                        winner: this.state.playerOne,
                    });
                    break;
                case this.state.playerTwo:
                    this.setState({
                        field: newField,
                        isGameEnd: true,
                        winner: this.state.playerTwo,
                    });
                    break;
                case true:
                    this.setState({
                        field: newField,
                        isGameEnd: true,
                    });
                    break;
                default:
                    this.setState({
                        field: newField,
                        currentPlayer: newPlayer,
                    })
            }
        } else {
            console.log('bla');
        }
    };

    startGame() {
        let field = [];

        for (let row = 0; row < this.state.rows; row++) {
            let row = [];
            for (let col = 0; col < this.state.columns; col++) {
                row.push(null);
            }
            field.push(row);
        }

        this.setState({
            field,
            currentPlayer: this.state.playerOne,
            isGameEnd: false,
        })
    };

    newGame() {
        this.setState({
            field: [],
            columns: 7,
            rows: 6,
            playerOne: 1,
            playerTwo: 2,
            currentPlayer: null,
            winner: null,
            isGameEnd: true,
        })
    };

    handleChoose(event) {
        let {value} = event.target;
        this.setState({columns: +value});
    };

    checkX(field) {
        for (let row = 0; row < this.state.rows; row++) {
            for (let col = 0; col < this.state.columns - 3; col++) {
                if (field[row][col]) {
                    if (field[row][col] === field[row][col + 1] && field[row][col] === field[row][col + 2] && field[row][col] === field[row][col + 3]) {
                        return field[row][col];
                    }
                }
            }
        }
    };

    checkY(field) {
        for (let row = 0; row < this.state.rows - 3; row++) {
            for (let col = 0; col < this.state.columns; col++) {
                if (field[row][col]) {
                    if (field[row][col] === field[row + 1][col] && field[row][col] === field[row + 2][col] && field[row][col] === field[row + 3][col]) {
                        return field[row][col];
                    }
                }
            }
        }
    };

    checkXY(field) {
        for (let row = 3; row < this.state.rows; row++) {
            for (let col = 0; col < this.state.columns - 3; col++) {
                if (field[row][col]) {
                    if (field[row][col] === field[row - 1][col + 1] && field[row][col] === field[row - 2][col + 2] && field[row][col] === field[row - 3][col + 3]) {
                        return field[row][col];
                    }
                }
            }
        }
    };

    checkYX(field) {
        for (let row = 3; row < this.state.rows; row++) {
            for (let col = 3; col < this.state.columns; col++) {
                if (field[row][col]) {
                    if (field[row][col] === field[row - 1][col - 1] && field[row][col] === field[row - 2][col - 2] && field[row][col] === field[row - 3][col - 3]) {
                        return field[row][col];
                    }
                }
            }
        }
    };

    checkMakingCircle(field) {
        for (let row = 0; row < this.state.rows; row++) {
            for (let col = 0; col < this.state.columns; col++) {
                if (field[row][col] === null) {
                    return null;
                }
            }
        }
        return true;
    };

    checkField(field) {
        return this.checkX(field) || this.checkY(field) || this.checkXY(field) || this.checkYX(field) || this.checkMakingCircle(field);
    };

    render() {
        const fromSTP = this.props.location.state && this.props.location.state.fromStartPage;
        if (this.state.isGameEnd && this.state.winner) {
            return <Redirect to={{
                pathname: '/game_over',
                state: {
                    winner: this.state.winner,
                }
            }}/>
        }
        return (
            <div className="game">
                { !fromSTP && <Redirect to='/'/> }
                <Welcome
                    data={this.state}
                    startGame={this.startGame}
                    newGame={this.newGame}
                    handleChoose={this.handleChoose}
                />
                <div className="table">
                    <div>
                        {this.state.field.map((el, idx) => {
                            return <Row values={el} index={idx} key={idx} onPress={this.makeMove}/>
                        })}
                    </div>
                </div>
                <p
                    className={this.state.winner ? 'winner' : 'no-display'}
                >
                    Игрок {this.state.winner}({this.state.winner === 1 ? 'жёлтый' : 'красный'}) побеждает!
                </p>
                <p
                    className={!this.state.isGameEnd && this.state.currentPlayer ? 'step' : 'no-display'}
                >
                    Ходит {this.state.currentPlayer} игрок
                </p>
            </div>
        )
    }
}

export default Game;
