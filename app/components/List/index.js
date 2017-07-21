import React from 'react'
import styles from './styles.scss'
import {updateList, clearList} from 'actions'
import {connect} from 'react-redux'
import ListItem from 'components/ListItem'

class List extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			valueToAdd: ''
		}
	}

	handleInputChange(ev){
		this.setState({valueToAdd: ev.target.value})
	}

	handleAdd(){
		let newList = [this.state.valueToAdd, ...this.props.items]
		this.props.update(newList)
		this.setState({valueToAdd: ''},() => {
			this.refs['theinput'].value = ''
			this.refs['theinput'].focus()
		})
	}

	render(){
		return(
		<div>
			<div className={styles.form}>
				<div>Add To List!</div>
				<input ref='theinput' onChange={ev => this.handleInputChange(ev)} />
				<div className={styles.button} onClick={() => this.handleAdd()}>Add</div>
			</div>
			<div className={styles.listContainer}>{this.props.items.length > 0
				?<div>{this.props.items.map((str,i) => 
					<ListItem value={str} key={i}/>
				)}</div>
				:<div className={styles.noItems}>No items to show!</div>}
			</div>
		</div>)
	}
}

let mapStateToProps = (state) => {
	return{
		items: state.listState
	}
}

let mapDispatchToProps = (dispatch) => {
	return{
		update: list => dispatch(updateList(list))
	}
}

List = connect(mapStateToProps,mapDispatchToProps)(List)

export default List