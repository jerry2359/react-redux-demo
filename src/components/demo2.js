import {createStore} from 'redux';

// reducer
// 注意：每次返回的state都必须是一个新的数据（对象）
function counter(state = {value: 0}, action) {
    let {type, value} = action;

    switch (type) {
        case 'INCREATEMENT':
            return Object.assign({}, state, {
                value: state.value + value
            });
        default:
            return state;
    }
}

let store = createStore(counter);

let cur = store.getState();

document.addEventListener('click', () => {
    store.dispatch({type: 'INCREATEMENT', value: 5});
}, false);

store.subscribe(() => {
    let pre = cur;
    cur = store.getState();
    console.log(pre, cur);
});