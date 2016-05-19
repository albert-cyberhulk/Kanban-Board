import React, {Component} from 'react';

class Checklist extends Component {
  render() {
    let tasks = this.props.tasks.map(function(task) {
      return (
        <li className="task" key={task.id}>
          <input type="checkbox" defaultChecked={task.done} />
          {task.name}
          <a href="#" className="task-remove" />
        </li>
      )
    });
    return (
      <ul className="cardChecklist">
        {tasks}
      </ul>
    );
  }
}

export default Checklist;
