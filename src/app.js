import React, { Component } from '../node_modules/react';
import {render} from 'react-dom';
import KanbanBoard from './kanbanboard/kanbanboard';

let cardList = [
  {
    "id": 1,
    "title": "Card one title",
    "description": "Contribute to the Kanban board on Github, fork from [github](https://github.com/albert-cyberhulk/Kanban-Board)",
    "status": "todo",
    "tasks": [
      {
        "id": 1,
        "name": "Task one",
        "done": true
      },
      {
        "id": 2,
        "name": "Task two",
        "done": false
      },
      {
        "id": 3,
        "name": "Task three",
        "done": false
      }
    ]
  },
  {
    "id": 2,
    "title": "Card Two title",
    "description": "Card detailed description",
    "status": "in-progress",
    "tasks": []
  },
  {
    "id": 3,
    "title": "Card Three title",
    "description": "Card detailed description",
    "status": "done",
    "tasks": []
  }
];


render(<KanbanBoard cards={cardList} />, document.getElementById('container'));
