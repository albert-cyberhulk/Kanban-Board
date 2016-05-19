import React, { Component } from 'react';
import Checklist from './checklist';

class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: true
    }
  }
  render () {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      ); 
    };
    return (
      <div className="card">
        <div className="card__title">{this.props.title}</div>
        {cardDetails}
      </div>
    );
  }
}

export default Card;
