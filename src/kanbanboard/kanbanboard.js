import React, { Component, PropTypes } from 'react';
import List from '../list/list';

class KanbanBoard extends Component {
	render () {
		return (
			<div className="app">
				<List taskCallbacks={this.props.taskCallbacks}
					cardCallbacks={this.props.cardCallbacks}
					id="todo"
					title="To Do"
					cards={this.props.cards.filter((card) => card.status === "todo")} />
				<List taskCallbacks={this.props.taskCallbacks}
					cardCallbacks={this.props.cardCallbacks}
					id="in-progress"
					title="In Progress"
					cards={ this.props.cards.filter((card) => card.status === "in-progress")} />
				<List taskCallbacks={this.props.taskCallbacks}
					cardCallbacks={this.props.cardCallbacks}
					id="done"
					title="Done"
					cards={this.props.cards.filter((card) => card.status === "done")} />
			</div>
	 );
	}
}

KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object,
	cardCallbacks: PropTypes.object
};
export default KanbanBoard;
