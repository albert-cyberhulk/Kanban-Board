	import React, {
	  Component,
	  PropTypes
	} from 'react';
	import {
	  DragDropContext
	} from 'react-dnd';
	import HTML5Backend from 'react-dnd-html5-backend';
	import List from '../list/list';
	import { Link } from 'react-router';

	class KanbanBoard extends Component {
	  render() {
	    let cardModal = this.props.children && React.cloneElement(this.props.children, {
	      cards: this.props.cards,
	      cardCallbacks: this.props.cardCallbacks
	    });
	    return (
				<div className="app">
					<Link to='/new' className="float-button">+</Link>
  				<List taskCallbacks={ this.props.taskCallbacks } cardCallbacks={ this.props.cardCallbacks } id="todo" title="To Do" cards={ this.props.cards.filter((card)=> card.status === "todo") } />
  				<List taskCallbacks={ this.props.taskCallbacks } cardCallbacks={ this.props.cardCallbacks } id="in-progress" title="In Progress" cards={ this.props.cards.filter((card)=> card.status === "in-progress") } />
  				<List taskCallbacks={ this.props.taskCallbacks } cardCallbacks={ this.props.cardCallbacks } id="done" title="Done" cards={ this.props.cards.filter((card)=> card.status === "done") } />
					{cardModal}
				</div>
	    );
	  }
	}

	KanbanBoard.propTypes = {
	  cards: PropTypes.arrayOf(PropTypes.object),
	  taskCallbacks: PropTypes.object,
	  cardCallbacks: PropTypes.object
	};
	export default DragDropContext(HTML5Backend)(KanbanBoard);
