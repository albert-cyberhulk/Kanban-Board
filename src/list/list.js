import React, { Component, PropTypes } from 'react';
import Card from '../card/card';

class List extends Component {
  render() {
    let cards = this.props.cards.map(function (card) {
      return <Card
        id={card.id}
        key={card.id}
        title={card.title}
        description={card.description}
        status = {card.status}
        tasks={card.tasks} />
    });
    return (
      <div className="list">
        <h1>
          {this.props.title}
        </h1>
        {cards}
      </div>
    );
  }
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default List;
