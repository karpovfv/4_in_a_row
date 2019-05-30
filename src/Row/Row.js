import React from 'react';
import Cell from "../Cell/Cell";

class Row extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.values.map((el, idx) => {
                    return <Cell value={el} index={idx} key={idx} onPress={this.props.onPress}/>
                })}
            </div>
        )
    }
}

export default Row;