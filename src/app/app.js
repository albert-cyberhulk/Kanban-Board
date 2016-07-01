/**
 * @file app.js
 * main bootstrap file of the project
 * @author Albert Cyberhulk
 */

// Initial json file
// http://www.jsoneditoronline.org/?id=01e50ab7586fd69363abd6866bce63f3

import React, { Component } from '../../node_modules/react';
import {render} from 'react-dom';
import KanbanBoardContainer from '../kanbanboard/kanbanboardcontainer';

render(<KanbanBoardContainer />, document.getElementById('container'));
