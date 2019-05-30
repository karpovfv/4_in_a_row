import React from 'react'

function Header(props) {
    let chooseClass = 'choose';
    if (!props.data.isGameEnd || props.data.winner || props.data.currentPlayer) {
        chooseClass += ' no-display';
    }
    return (
        <div className={props.data.isGameEnd && !props.data.winner ? 'big' : 'small'}>
            <h1>4 в ряд!</h1>
            <button
                className={props.data.isGameEnd && !props.data.winner ? 'no-display' : 'button'}
                onClick={props.newGame}
            >
                Новая игра
            </button>
            <div className={chooseClass}>
                <p>Выберете поле: </p>
                <select
                    name="columns"
                    value={props.columnsField}
                    onChange={props.handleChoose}
                >
                    <option value="7">7x6</option>
                    <option value="8">8x6</option>
                    <option value="9">9x6</option>
                    <option value="10">10x6</option>
                </select>
                <button className="button" onClick={props.startGame}>Играть!</button>
            </div>
        </div>
    )
}

export default Header