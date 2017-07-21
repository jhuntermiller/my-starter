import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'reducers'
import {updateList,clearList} from 'actions'
import App from 'components/App'

let store = createStore(reducer)

render(
	<Provider store={store}>
		<App />
	</Provider>,
document.getElementById('app'))
