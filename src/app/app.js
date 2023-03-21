/**
@file app.js
main bootstrap file of the project
@author Albert Cyberhulk
*/


/**
This code is written in JavaScript using the React library and is responsible for rendering the Kanban Board application in a web browser.
Here's a breakdown of what's happening:
The code imports necessary modules and components from various files, including React, ReactDOM, React Router, and several application-specific components.
*/
 

import React from 'React';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import KanbanBoardContainer from '../kanbanboard/kanbanboardcontainer';
import KanbanBoard from '../kanbanboard/kanbanboard';
import EditCard from '../cardform/editcard';
import NewCard from '../cardform/newcard';

/*
The code is written in JSX and uses React Router to define the routes and components for a Kanban board application. The render() function is used to mount the application onto the HTML document by specifying the root container element as the second argument.

The Router component is imported from the React Router library, and is instantiated with a browser history object created using the createBrowserHistory() function. This allows the application to use HTML5 pushState-based navigation.

The Route components are used to define the routes and components for the Kanban board application. The KanbanBoardContainer component is specified as the top-level component for the application, and is rendered for all routes.

The KanbanBoard component is rendered for the root path ("/") route, and contains two child routes, "new" and "edit/:card_id". These child routes specify the components that should be rendered when the corresponding URLs are accessed.

The NewCard component is rendered when the "new" route is accessed, and the EditCard component is rendered when the "edit/:card_id" route is accessed. The :card_id parameter in the "edit" route is a dynamic parameter that can be accessed in the EditCard component using the this.props.params object.

Overall, this code sets up the routing and components for a Kanban board application using React and React Router, and mounts it onto the HTML document.
*/

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
