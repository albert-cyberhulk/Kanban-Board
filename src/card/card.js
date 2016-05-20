import React, { Component } from 'react';
import Checklist from './checklist';

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
  render () {
    var isHidden = this.state.showDetails ? "card__details slide-down" : "card__details slide-up";
    return (
      <div className="card">
        <i className="fa fa-folder card_title" aria-hidden="true" onClick={this.toggleDetails.bind(this)}>
          {this.props.title}
        </i>
        <div className={isHidden}>
          {this.props.description}
          <Checklist cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      </div>
    );
  }
}

export default Card;


