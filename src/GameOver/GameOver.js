import React from 'react';
import {Redirect} from 'react-router-dom';

class GameOver extends React.Component {
    render() {
        if (!this.props.location.state) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <h1>Игра окончена!</h1>
                <h2>Победу одержал {this.props.location.state.winner} игрок!</h2>
            </div>
        );
    }
}

export default GameOver;