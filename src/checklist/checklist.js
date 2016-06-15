import React, {Component, PropTypes} from 'react';

class Checklist extends Component {
  render() {
    let tasks = this.props.tasks.map((task, taskIndex) => {
      return (
        <li className="task" key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)}/>
          <label htmlFor={task.id}>{task.name}</label>
          <a href="#" className="task-remove">
            <i className="fa fa-trash"></i>
          </a>
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
              <input type="text"
                     className="form-control add-task-input input-lg"
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
