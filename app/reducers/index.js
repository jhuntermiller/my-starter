import {combineReducers} from 'redux'
import {UPDATE_LIST, CLEAR_LIST} from 'constants'

const listState = (state = [], action) => {
	switch(action.type){
		case UPDATE_LIST:{
			return action.list
		}

		case CLEAR_LIST:{
			return []
		}

		default: {
			return state
		}
	}
}

let reducer = combineReducers({listState})

export default reducer
