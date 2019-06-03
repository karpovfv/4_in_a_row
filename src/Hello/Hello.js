import React from 'react';
import {Link} from 'react-router-dom';

class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            player1: 'Max',
            player2: 'Alex',
        };
        this.onChangePlayer = this.onChangePlayer.bind(this);
    };

    onChangePlayer(event) {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    };
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <p>Игрок 1: <input type="text" value={this.state.player1} name="player1" onChange={this.onChangePlayer}/></p>
                <p>Игрок 2: <input type="text" value={this.state.player2} name="player2" onChange={this.onChangePlayer}/></p>
                <Link to={{
                    pathname: '/game',
                    state: {
                        //проброс данных
                        fromStartPage: true
                    }
                }}>Начать игру</Link>
            </div>
        );
    }
}

export default Hello;