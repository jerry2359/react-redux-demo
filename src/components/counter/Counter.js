import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './../../actions';

function Counter(props) {
    let {
        id,
        value,
        addIfOdd,
        asyncAdd,
        decrement,
        increment
    } = props;

    return (
        <div className="counter">
            <button
                onClick={() => decrement(id, value)}
            >-</button>
            <span>{value}</span>
            <button
                onClick={() => increment(id)}
            >+</button>
            <button
                onClick={() => addIfOdd(id, value)}
            >addIfOdd</button>
            <button
                onClick={() => asyncAdd(id)}
            >addAsync</button>
        </div>
    );
}

export default connect(
    state => state.counter,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);