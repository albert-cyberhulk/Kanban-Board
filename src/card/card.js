import React, {Component} from 'react';
import Checklist from './checklist';
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

    return (
      <div className="card">
        <div onClick={this.toggleDetails.bind(this)} className={this.state.showDetails ? "card_title folder-open" : "card_title folder-closed"}>
          {this.props.title}
        </div>
        <div className={this.state.showDetails ? "card__details slide-down" : "card__details slide-up"}>
          <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
          <Checklist cardId={this.props.id} tasks={this.props.tasks}/>
        </div>
      </div>
    );
  }

}

export default Card;


