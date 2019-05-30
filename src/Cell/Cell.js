import React from 'react';

class Cell extends React.Component {
    render() {
        let color = 'white';
        if (this.props.value === 1) {
            color = 'yellow';
        } else if (this.props.value === 2) {
            color = 'red';
        }
        return (
            <div
                className="cell"
                onClick={() => this.props.onPress(this.props.index)}
            >
                <div className={color}>{this.props.value}</div>
            </div>
        )
    }
}

export default Cell;