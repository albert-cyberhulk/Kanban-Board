import React, {Component} from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';

const API_URL = "https://private-07a0d-kanbanboard.apiary-mock.com/cards";
const API_HEADERS = {
  'Content-Type': 'application/json',
};

class KanbanBoardContainer extends Component {

  constructor() {
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    fetch(API_URL, {headers: API_HEADERS}).then((response) =>response.json())
      .then((responseData) => {
        this.setState({
          cards: responseData
        });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      })
  }

  addTask(cardId, taskName) {

  }

  deleteTask(cardId, taskId, taskIndex) {

  }

  toggleTask(cardId, taskId, taskIndex) {

  }

  render() {
    return <KanbanBoard cards={this.state.cards}
    taskCallbacks={{
      toggle: this.toggleTask.bind(this),
      delete: this.deleteTask.bind(this),
      add: this.addTask.bind(this)
    }}/>
  }

}

export default KanbanBoardContainer;
