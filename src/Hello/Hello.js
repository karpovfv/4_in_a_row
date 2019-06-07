import React from 'react';
import {Link} from 'react-router-dom';

class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            player1: '',
            player2: '',
            columns: 7,
            rows: 6,
        };
        this.onChangePlayer = this.onChangePlayer.bind(this);
        this.handleChoose = this.handleChoose.bind(this);
    };

    onChangePlayer(event) {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    };

    handleChoose(event) {
        let {value} = event.target;
        this.setState({columns: +value});
    };

    render() {
        return (
            <div className="game">
                <div className="big">
                    <h1>4 в ряд!</h1>
                    <div className="choose">
                        <p>Выберете поле: </p>
                        <select
                            name="columns"
                            value={this.state.columns}
                            onChange={this.handleChoose}
                        >
                            <option value="7">7x6</option>
                            <option value="8">8x6</option>
                            <option value="9">9x6</option>
                            <option value="10">10x6</option>
                        </select>
                    </div>
                    <p>Игрок 1: <input type="text" value={this.state.player1} name="player1"
                                       onChange={this.onChangePlayer}/></p>
                    <p>Игрок 2: <input type="text" value={this.state.player2} name="player2"
                                       onChange={this.onChangePlayer}/></p>
                    <button className="button">
                        <Link to={{
                            pathname: '/game',
                            state: {
                                fromStartPage: true,
                                player1: this.state.player1 || 1,
                                player2: this.state.player2 || 2,
                                columns: this.state.columns,
                                rows: this.state.rows,
                                isGameEnd: false,
                            }
                        }}>Начать игру</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Hello;