import './App.css';
import { MyTasks } from './MyTasks';
import { useState, useEffect } from 'react';
import { getAllTasks, addTask, updateTask, deleteTask } from './FetchTasks';

function App() {

  const[myTask, setTask] = useState([]);
  const[title, setTitle] = useState("");
  const[editing, setEditing] = useState(false);
  const[taskId, setTaskId] = useState("");

  useEffect(() => {
    getAllTasks(setTask);
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setTaskId(_id)
  }

  return (

    <div className="App">

      <h1>Party Preparation - List of Tasks</h1>

      <div className="inputDesign">
        <input
          type = "text"
          placeholder= "Add a task..."
          value = { title }
          onChange = {(e) => setTitle((e.target.value))}
        />

        <button
          disabled = { !title }
          onClick = { editing ? () => updateTask(taskId, title, setTitle, setTask, setEditing) : () => addTask(title, setTitle, setTask) }
        >
          {editing ? "EDIT" : "ADD"}
        </button>
      </div>

      <div>
          {
            myTask.length === 0 ? 
              <div>
                <p>Loading... Please wait.</p>
                <p className="loader"></p>
              </div>
            : null
          }
      </div>

      {myTask.map((task) => 
        <MyTasks
          text={task.title}
          key={task._id}
          updatingInInput={() => updatingInInput(task._id, task.title)}
          deleteTask={() => deleteTask(task._id, setTask)} 
        />
      )}

      <div className='box'>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
      </div>

    </div>
  );
}

export default App;
