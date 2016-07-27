import React, {Component, PropTypes} from 'react';

class Checklist extends Component {
  checkInputKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
      evt.target.value = '';
    }
  }
  render() {
    let tasks = this.props.tasks.map(function(task, taskIndex)  {
      var curId = "task" + task.id;
      return (
        <li className="task" key={task.id}>
          <input
            id={curId}
            type="checkbox"
            defaultChecked={task.done}
            onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)}/>
          <label htmlFor={curId} className={task.done? 'task done': 'task'}>
            {task.name}
          </label>
          <a href="#"
             className="task-remove"
             onClick={this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)}>
            <i className="fa fa-trash"></i>
          </a>
        </li>
      )
    }.bind(this));
    return (
      <div className="checklist">
        <ul className="cardChecklist">
          {tasks}
        </ul>
        <form className="form-inline add-task">
          <div className="form-group">
            <label className="sr-only" htmlFor="exampleInputAmount">
              Amount (in dollars)</label>
            <div className="input-group ">
              <div className="input-group-addon">
                <i className="fa fa-plus"></i>
              </div>
              <input type="text"
                     className="form-control add-task-input input-lg checklist-input"
                     id="exampleInputAmount"
                     placeholder="Type then hit Enter to add a task"
                     onKeyPress={this.checkInputKeyPress.bind(this)}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
Checklist.propTypes = {
  cardId: PropTypes.number,
  tasks: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object
};
export default Checklist;
