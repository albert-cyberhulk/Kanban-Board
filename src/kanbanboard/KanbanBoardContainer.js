  import React, {
    Component
  } from 'react';
  import KanbanBoard from './KanbanBoard';
  import 'whatwg-fetch';
  import 'babel-polyfill';
  import throttle from '../utils/throttle';
  import update from 'react-addons-update';

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
        // Only call updateCardStatus when arguments change
      this.updateCardStatus = throttle(this.updateCardStatus.bind(this));
      // Call updateCardPosition at max every 500ms (or when arguments change)
      this.updateCardPosition = throttle(this.updateCardPosition.bind(this), 500);
    }

    findIndex(cardId) {
      return this.state.cards.findIndex((card) => card.id === cardId);
    }

    updateStorage() {
      localStorage.setItem('cards', JSON.stringify(this.state.cards));
    }

    componentDidMount() {
      // for local development purpose we check if localstorage
      // item exists we do not perform additional HTTP request
      if (localStorage.getItem("cards") === null) {
        fetch(API_URL, {
            headers: API_HEADERS
          }).then((response) => response.json())
          .then((responseData) => {
            this.setState({
              cards: responseData
            });
            // for local development using localstorage
            this.updateStorage();
          })
          .catch((error) => {
            console.log('Error fetching and parsing data', error);
          });
      } else {
        this.setState({
          cards: JSON.parse(localStorage.getItem('cards'))
        });
      }

    }

    addCard(card) {
      // Keep a reference to the original state prior to mutations
      // in case we need to revert the optimistic changes in the UI
      let prevState = this.state;
      // Add a temporary ID to the card
      if (card.id === null) {
        let card = Object.assign({}, card, {
          id: Date.now()
        });
      }
      // Create a new object and push the new card to the array of cards
      let nextState = update(this.state.cards, {
        $push: [card]
      });
      // set the component state to the mutated object
      this.setState({
        cards: nextState
      });
      // for local development using localstorage
      this.updateStorage();
    }

    updateCard(card) {
      // Keep a reference to the original state prior to mutations
      // in case we need to revert the optimistic changes in the UI
      let prevState = this.state;
      // Find the index of the card
      let cardIndex = this.findIndex(cardId);
      // Using the $set command, we will change the whole card
      let nextState = update(this.state.cards, {
        [cardIndex]: {
          $set: card
        }
      });
      // set th component state to the mutated object
      this.setState({
        cards: nextState
      });
    }

    addTask(cardId, taskName) {
      // Find the index of the card
      let cardIndex = this.findIndex(cardId);
      // Create a new task with the given name and a temporary ID
      let newTask = {
        id: Math.floor(Math.random() * 1000),
        name: taskName,
        done: false
      };
      // Create a new object and push the new task to the array of tasks
      let nextState = update(this.state.cards, {
        [cardIndex]: {
          tasks: {
            $push: [newTask]
          }
        }
      });
      // set the component state to the mutated object
      this.setState({
        cards: nextState
      });
      // for local development using localstorage
      this.updateStorage();
    }

    deleteTask(cardId, taskId, taskIndex) {
      // Find the index of the card
      let cardIndex = this.findIndex(cardId);
      // Create a new object without the task
      let nextState = update(this.state.cards, {
        [cardIndex]: {
          tasks: {
            $splice: [
              [taskIndex, 1]
            ]
          }
        }
      });
      // set the component state to the mutated object
      this.setState({
        cards: nextState
      });
      // for local development using localstorage
      this.updateStorage();
    }

    toggleTask(cardId, taskId, taskIndex) {
      // Find the index of the card
      let cardIndex = this.findIndex(cardId);
      // Save a reference to the task' done value to its opposite
      let newDoneValue;
      let nextState = update(this.state.cards, {
        [cardIndex]: {
          tasks: {
            [taskIndex]: {
              done: {
                $apply: (done) => {
                  newDoneValue = !done;
                  return newDoneValue;
                }
              }
            }
          }
        }
      });
      // set the component state to the mutated object
      this.setState({
        cards: nextState
      });
      // for local development using localstorage
      this.updateStorage();
    }

    updateCardStatus(cardId, listId) {
      // Find the index of the card
      let cardIndex = this.findIndex(cardId);
      // Get the current card
      let card = this.state.cards[cardIndex];
      // Only proceed if hovering over a different list
      if (card.status !== listId) {
        // set the component state to the mutated object
        this.setState(update(this.state, {
          cards: {
            [cardIndex]: {
              status: {
                $set: listId
              }
            }
          }
        }));
        // for local development using localstorage
        this.updateStorage();
      }
    }

    updateCardPosition(cardId, afterId) {
      // Only proceed if hovering over a different card
      if (cardId !== afterId) {
        // Find the index of the card
        let cardIndex = this.findIndex(cardId);
        // Get the current card
        let card = this.state.cards[cardIndex];
        // Find the index of the card the user is hovering over
        let afterIndex = this.state.cards.findIndex((card) => card.id === afterId);
        // Use splice to remove the card and reinsert it at the new index
        this.setState(update(this.state, {
          cards: {
            $splice: [
              [cardIndex, 1],
              [afterIndex, 0, card]
            ]
          }
        }));
      }
    }

    render() {
      let kanbanBoard = this.props.children && React.cloneElement(this.props.children, {
        cards: this.state.cards,
        taskCallbacks: {
          toggle: this.toggleTask.bind(this),
          delete: this.deleteTask.bind(this),
          add: this.addTask.bind(this)
        },
        cardCallbacks: {
          addCard: this.addCard.bind(this),
          updateCard: this.updateCard.bind(this),
          updateStatus: this.updateCardStatus.bind(this),
          updatePosition: throttle(this.updateCardPosition.bind(this), 500),
        }
      });
      return kanbanBoard;
    }

  }

  export default KanbanBoardContainer;
