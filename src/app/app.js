/**
 * @file app.js
 * main bootstrap file of the project
 * @author Albert Cyberhulk
 */


/**
 * This code is written in JavaScript using the React library and is responsible for rendering the Kanban Board application in a web browser.
 * Here's a breakdown of what's happening:
 * The code imports necessary modules and components from various files, including React, ReactDOM, React Router, and several application-specific components.
 */
 

import React from 'React';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import KanbanBoardContainer from '../kanbanboard/kanbanboardcontainer';
import KanbanBoard from '../kanbanboard/kanbanboard';
import EditCard from '../cardform/editcard';
import NewCard from '../cardform/newcard';

render((
  <Router history={createBrowserHistory()}>
    <Route component={KanbanBoardContainer}>
      <Route path="/" component={KanbanBoard}>
        <Route path="new" component={NewCard} />
        <Route path="edit/:card_id" component={EditCard} />
      </Route>
    </Route>
  </Router>
), document.getElementById('container'));
