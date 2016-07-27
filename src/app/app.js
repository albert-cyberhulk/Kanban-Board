/**
 * @file app.js
 * main bootstrap file of the project
 * @author Albert Cyberhulk
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
