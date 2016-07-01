import React, {Component} from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';
import 'babel-polyfill';
import update from 'react-addons-update';
import store from 'store';

const API_URL = "store.json";
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
      });
  }

  addTask(cardId, taskName) {
    // Find the index of the card
    let cardIndex = this.state.cards.findIndex((card) => {
      return card.id === cardId;
    });
    // Create a new task with the given name and a temporary ID
    let newTask = {id: Math.floor(Math.random() * 1000), name: taskName, done: false};
    // Create a new object and push the new task to the array of tasks
    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {$push: [newTask]}
      }
    });
    // set the component state to the mutated object
    this.setState({cards: nextState});
    // Call the API to add the task on the server
    /*fetch(`${API_URL}/cards/${cardId}/tasks`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(newTask)
    })
      .then((response) => response.json())
      .then((responseData) => {
        // When the server returns the definitive ID
        // used for the new Task on the server, update it on React
        newTask.id=responseData.id;
        this.setState({cards:nextState});
      });*/
  }

  deleteTask(cardId, taskId, taskIndex) {
    // Find the index of the card
    let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);
    // Create a new object without the task
    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {$splice: [[taskIndex, 1]]}
      }
    });
    // set the component state to the mutated object
    this.setState({cards: nextState});
    // Call the API to remove the task on the server
    /*fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: 'delete',
      headers: API_HEADERS
    });*/
  }

  toggleTask(cardId, taskId, taskIndex) {
    // Find the index of the card
    let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);
    // Save a reference to the task' done value to its opposite
    let newDoneValue;
    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks:  {
          [taskIndex]: {
            done: {$apply: (done) => {
              newDoneValue = !done;
              return newDoneValue;
            }}
          }
        }
      }
    });
    // set the component state to the mutated object
    this.setState({cards: nextState});
    // Call the API to toggle the task on the server
    /*fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify({done:newDoneValue})
    });*/
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
