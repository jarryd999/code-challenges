import { ACTIVATE, SET_FILTER, REQUEST_FILTERS, RECEIVE_FILTERS, REQUEST_ITEMS, RECEIVE_ITEMS } from '../actionTypes';

export function activate(item) {
    return {
        type: ACTIVATE,
        data: item
    };
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        data: filter
    };
}

export function requestFilters(){
	return {
		type: REQUEST_FILTERS
	}
}

export function receiveFilters(filters){
	return {
		type: RECEIVE_FILTERS,
		filters: filters
	}
}

export function fetchFilters(){
	return dispatch => {
		dispatch(requestFilters());
		return fetch('http://www.kiddom.co/content/types.json')
			.then(response => response.json())
			.then(json => {
				let filters = Object.keys(json);
				dispatch(receiveFilters(filters));
				let defaultFilter = filters[0];
				dispatch(fetchItems(defaultFilter));
		})
	}
}

export function requestItems(){
	return {
		type: REQUEST_ITEMS
	}
}

export function receiveItems(items){
	return {
		type: RECEIVE_ITEMS,
		items: items.results
	}
}

export function fetchItems(source){
	return dispatch => {
		dispatch(requestItems());
		let url = 'http://www.kiddom.co/content.json?source=' + source;
		return fetch(url)
			.then(response => response.json())
			.then(json => dispatch(receiveItems(json)))
	}
}