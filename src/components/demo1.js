import {createStore} from 'redux';

// 这里的counter就是reducer
function counter(state = 0, action) {
    let {type} = action;

    switch (type) {
        case 'INCREATEMENT':
            return ++state;
        default:
            return state;
    }
}

let store = createStore(counter);

document.addEventListener('click', () => {
    store.dispatch({type: 'INCREATEMENT'});
}, false);

store.subscribe(() => {
    let state = store.getState();
    console.log(state);
});