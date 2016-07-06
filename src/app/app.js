/**
 * @file app.js
 * main bootstrap file of the project
 * @author Albert Cyberhulk
 */


import React, { Component } from '../../node_modules/react';
import {render} from 'react-dom';
import KanbanBoardContainer from '../kanbanboard/kanbanboardcontainer';

render(<KanbanBoardContainer />, document.getElementById('container'));
