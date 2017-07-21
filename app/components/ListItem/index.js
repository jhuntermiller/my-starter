import React from 'react'
import styles from './styles.scss'

class ListItem extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
		<div>
			{props.value}
		</div>)
	}
}

export default ListItem