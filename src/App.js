import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
  const db = [
      {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      }
    ];
  const [task, setTasks] = useState(db);

  const deleteTask = (id) => {
    console.log("delete", id)
  }

  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={task} onDelete={deleteTask}></Tasks>
    </div>
  );
}

export default App;
