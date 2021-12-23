import {FaTimes} from 'react-icons/fa'

const Tasks = ({tasks, onDelete}) => {
  return (
    <div>
      {
        tasks.map((task) => (
          <div>
            <h3 key={task.id}>{task.text} <FaTimes onClick={onDelete(task.id)} style={{color: 'red',  float: 'right', cursor: 'pointer'}}></FaTimes></h3>
            <p>{task.day}</p><br />
          </div>          
        ))
      }
    </div>
  )
}

export default Tasks
