import {UPDATE_LIST,CLEAR_LIST} from 'constants/'

export const updateList = (list) => {
	return {
		type: UPDATE_LIST,
		list: list
	}
}

export const clearList = () => {
	return {
		type: CLEAR_LIST
	}
}