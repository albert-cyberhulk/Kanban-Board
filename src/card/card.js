import React, { Component } from 'react';
import Checklist from './checklist';

class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    }
  }
  render () {
    let cardDetails;
    var isHidden = this.state.showDetails ? "card__details slide-down" : "card__details slide-up";
    return (
      <div className="card">
        <i className="fa fa-folder card_title" aria-hidden="true" onClick={()=>this.setState({showDetails: !this.state.showDetails})}>{this.props.title}</i>
        <div className={isHidden}>
          {this.props.description}
          <Checklist cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      </div>
    );
  }
}

class Test extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return (
      <h1>Hel</h1>
    );
  }
}

export default Card;


