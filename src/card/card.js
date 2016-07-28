import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Checklist from '../checklist/checklist';
import marked from 'marked';
import {DragSource, DropTarget} from 'react-dnd';
import constants from '../app/constants';
import {Link} from 'react-router';

let titlePropType = function(props, propName, componentName) {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value !== 'string' || value.length > 80) {
      return new Error(
        `${propName} in ${componentName}  is longer than 80 characters`
      );
    }
  }
};

const cardDragSpec = {
  beginDrag(props) {
    return {
      id: props.id
    }
  }
}

const cardDropSpec = {
  hover(props, monitor) {
    const draggedId = monitor.getItem().id;
    props.cardCallbacks.updatePosition(draggedId, props.id);
  }
}

let collectDrag = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  }
}

let collectDrop = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class Card extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false
    };
  }

  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  }

  render() {
    // DND DragSource
    const {connectDragSource, connectDropTarget} = this.props;
    // Implementing card side colour
    var curCardClass = "";
    switch (this.props.status) {
      case 'todo':
        curCardClass = 'card card-to-do';
        break;
      case 'in-progress':
        curCardClass = 'card card-in-progress';
        break;
      default:
        curCardClass = 'card card-done';
    }
    // Implementing the card details
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card-details">
          <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}}></span>
          <Checklist
            cardId={this.props.id}
            tasks={this.props.tasks}
            taskCallbacks={this.props.taskCallbacks}/>
        </div>
      );
    }
    return connectDropTarget(connectDragSource(
      <div className={curCardClass}>
        <div className="card_edit">
          <Link to={'/edit/'+this.props.id}>&#9998;</Link>
        </div>
        <div onClick={this.toggleDetails.bind(this)} className={this.state.showDetails ? "card_title folder-open" : "card_title folder-closed"}>
          {this.props.title}
        </div>
        <ReactCSSTransitionGroup transitionName="toggle"
                                transitionEnterTimeout={250}
                                transitionLeaveTimeout={250}>
          {cardDetails}
        </ReactCSSTransitionGroup>
      </div>
    ));
  }

}

Card.propTypes = {
  id: PropTypes.number,
  title: titlePropType,
  description: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  status: PropTypes.string,
  taskCallbacks: PropTypes.object,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

const dragHighOrderCard = DragSource(constants.CARD, cardDragSpec, collectDrag)(Card);
const dragDropHighOrderCard = DropTarget(constants.CARD, cardDropSpec, collectDrop)(dragHighOrderCard);

export default dragDropHighOrderCard;
