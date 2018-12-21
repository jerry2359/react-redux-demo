import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './../../actions';
import Counter from './Counter';

function CounterPanel (props) {
    let {
        addCounter,
        panelName
    } = props;

    let data = props[panelName];
    let hashAll = data.length ? String(data.every(item => item.value !== 0)) : 'null';
    let maxNum = data.length ? data.reduce((maxVal, item) => maxVal > item.value ? maxVal : item.value, 0) : 'null';
    let allCount = data.length ? data.reduce((totalVal, item) => totalVal + item.value, 0) : 'null';

    return (
        <div className="counter-list">
            <button onClick={() => addCounter(panelName)}>添加</button>
            {
                data.map(item => {
                    return (
                        <Counter
                            {...{
                                key: item.id,
                                id: item.id,
                                value: item.value
                            }}
                        />
                    );
                })
            }
            <div className="other">
                <p>HashAll: {hashAll}</p>
                <p>MaxNum: {maxNum}</p>
                <p>AllCount: {allCount}</p>
            </div>
        </div>
    );
}

export default connect(
    state => state.counter,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(CounterPanel);