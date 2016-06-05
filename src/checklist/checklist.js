import React, {Component} from 'react';

class Checklist extends Component {
  render() {
    let tasks = this.props.tasks.map(function (task) {
      var curId = "task" + task.id;
      return (
        <li className="task" key={task.id}>
          <input type="checkbox" defaultChecked={task.done} id={curId}/>
          <label htmlFor={curId}>{task.name}</label>
          <a href="#" className="task-remove"/>
        </li>
      )
    });
    return (
      <div className="checklist">
        <ul className="cardChecklist">
          {tasks}
        </ul>
        <form className="form-inline add-task">
          <div className="form-group">
            <label className="sr-only" for="exampleInputAmount">
              Amount (in dollars)</label>
            <div className="input-group">
              <div className="input-group-addon">
                <i className="fa fa-plus"></i>
              </div>
              <input type="text" className="form-control add-task-input"
                     id="exampleInputAmount" placeholder="Type then hit Enter to add a task" />
            </div>
          </div>
        </form>
      </div>
  );
  }}

  export default Checklist;
