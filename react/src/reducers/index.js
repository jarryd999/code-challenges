import { ACTIVATE, SET_FILTER, REQUEST_FILTERS, RECEIVE_FILTERS, REQUEST_ITEMS, RECEIVE_ITEMS } from '../actionTypes';

const INITIAL_FILTERS = {
    isFetching: false,
    activeFilter: null,
    filters: []
}
const INITIAL_ITEMS = {
    isFetching: false,
    items: []
};



export function filterState(state = INITIAL_FILTERS, action) {
    switch (action.type) {
        case SET_FILTER:
            return Object.assign({}, state, { activeFilter: action.data });
        case REQUEST_FILTERS:
            return Object.assign({}, state, {isFetching : true});

        case RECEIVE_FILTERS:
            return Object.assign({}, state,{
                isFetching : false,
                filters: action.filters
            })
        default:
            return state
    }
}

export function itemState(state = INITIAL_ITEMS, action) {
    switch (action.type) {
        case ACTIVATE:
            let item = action.data;
            let updatedItems = state.itemState.items.map(i => {
                i.active = (i.id == item.id);
                return i;
            });
            return Object.assign({}, state, {items: updatedItems});
        case REQUEST_ITEMS:
            return Object.assign({}, state, {isFetching: true});
        case RECEIVE_ITEMS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items
            });
        default:
            return state
    }
}

