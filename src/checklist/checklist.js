import React, {Component, PropTypes} from 'react';

class Checklist extends Component {
  checkClick(evt) {
    alert('clicked');
  }
  render() {
    let tasks = this.props.tasks.map(function(task, taskIndex)  {
      var curId = "task" + task.id;
      return (
        <li className="task" key={task.id}>
          <input
            id={curId}
            type="checkbox"
            checked={task.done}
            onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)}/>
          <label htmlFor={curId}>{task.name}</label>
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
            <label className="sr-only" for="exampleInputAmount">
              Amount (in dollars)</label>
            <div className="input-group ">
              <div className="input-group-addon">
                <i className="fa fa-plus"></i>
              </div>
              <input type="text"
                     className="form-control add-task-input input-lg checklist-input"
                     id="exampleInputAmount"
                     placeholder="Type then hit Enter to add a task"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
Checklist.propTypes = {
  cardId: PropTypes.number,
  tasks: PropTypes.arrayOf(PropTypes.object)
};
export default Checklist;
