import React, { Component, PropTypes } from 'react';
import Card from '../card/card';

class List extends Component {
  render() {
    let cards = this.props.cards.map((card)=> {
      return (
        <Card
          id={card.id}
          key={card.id}
          title={card.title}
          description={card.description}
          status={card.status}
          tasks={card.tasks}
          taskCallbacks={this.props.taskCallbacks}/>
      )
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
  cards: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object
};

export default List;
