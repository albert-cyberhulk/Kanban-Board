import React, { Component } from 'react';
import Checklist from './checklist';

class Card extends Component {
  render () {
    return (
      <div className="card">
        <i className="fa fa-folder card_title" aria-hidden="true">{this.props.title}</i>
        <div className="card__details">
          {this.props.description}
          <Checklist cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      </div>
    );
  }
}

export default Card;
