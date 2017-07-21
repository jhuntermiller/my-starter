import React from 'react'
import styles from './styles.scss'
import List from 'components/List'

class App extends React.Component{

	constructor(props){
		super(props)
		this.state = {inputValue: '', timesClicked:0}

	}

	handleInputChange(ev){
		this.setState({inputValue: ev.target.value})
	}

	render(){
		return(
		<div>
			<List />
		</div>
	)}
}

export default App
