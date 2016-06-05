import React, {Component} from 'react';

class Checklist extends Component {
  render() {
    let tasks = this.props.tasks.map(function (task) {
      return (
        <li className="task" key={task.id}>
          <input type="checkbox" defaultChecked={task.done}/>
          {task.name}
          <a href="#" className="task-remove"/>
        </li>
      )
    });
    return (
      <div className="checklist">
        <ul className="cardChecklist">
          {tasks}
        </ul>
        <input
          type="text"
          className="checklist--add-task"
          placeholder="Type then hit Enter to add a task"></input>
      </div>
  );
  }}

  export default Checklist;
