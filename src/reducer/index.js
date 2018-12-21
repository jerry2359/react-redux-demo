import {combineReducers} from 'redux';

// 第一个reducer
let initState = {
    A: [],
    B: [],
    lastHold: ''
};
let counter = (state = initState, action) => {
    let {type, id, panelName} = action;

    switch (type) {
        case 'ADD_COUNTER':
            if (panelName === 'A') {
                return Object.assign({}, state, {
                    A: [
                        ...state.A,
                        {
                            id: new Date().getTime(),
                            value: 0
                        }
                    ]
                })
            } else if (panelName === 'B') {
                return Object.assign({}, state, {
                    B: [
                        ...state.B,
                        {
                            id: new Date().getTime(),
                            value: 0
                        }
                    ]
                })
            }
        case 'INCREMENT':
            return Object.assign({}, {
                A: state.A.map(item => {
                    if (item.id === id) {
                        item.value ++;
                    }
                    return item;
                }),
                B: state.B.map(item => {
                    if (item.id === id) {
                        item.value ++;
                    }
                    return item;
                })
            });
        case 'DECREMENT':
            return Object.assign({}, {
                A: state.A.map(item => {
                    if (item.id === id) {
                        item.value --;
                    }
                    return item;
                }),
                B: state.B.map(item => {
                    if (item.id === id) {
                        item.value --;
                    }
                    return item;
                })
            });
        default:
            return state;
    };
}

// 这里可以定义第二个reducer
//...

// 这里将所有的reducer合并成一个
// 注意这里的key值，返回的state格式会是这样 {counter}
let reducer = combineReducers({
    counter
});

export default reducer;