import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class GameOver extends React.Component {
    render() {
        if (!this.props.location.state) {
            return <Redirect to='/'/>
        }
        const winner = this.props.location.state && this.props.location.state.winner;
        return (
            <div className="game">
                <div className="big">
                    <h1>Игра окончена!</h1>
                    <h2 className={winner ? 'winner' : 'no-display'}>Победу одержал {winner} игрок!</h2>
                    <h2 className={winner === 'none' ? 'winner' : 'no-display'}>Ничья!</h2>
                    <button className="button">
                        <Link to={{
                            pathname: '/',
                        }}>Новая игра</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default GameOver;