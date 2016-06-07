import React, {Component, PropTypes} from 'react';
import Checklist from '../checklist/checklist';
import marked from 'marked';

class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    };
  }

  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  }

  render() {
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
    return (
      <div className={curCardClass}>
        <div onClick={this.toggleDetails.bind(this)} className={this.state.showDetails ? "card_title folder-open" : "card_title folder-closed"}>
          {this.props.title}
        </div>
        <div className={this.state.showDetails ? "card__details slide-down" : "card__details slide-up"}>
          <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}}></span>
          <Checklist cardId={this.props.id} tasks={this.props.tasks}/>
        </div>
      </div>
    );
  }

}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  status: PropTypes.string
};

export default Card;


