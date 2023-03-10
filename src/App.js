// import logo from './logo.svg';
import './App.css';
import Add from "./components/Add";
import List from "./components/List";

import { useState } from 'react';


function App() {
  const [Tasks, setTasks] = useState([]);
  const [Finished, setFinish] = useState([]);

  const addTask = (taskmessage) => {
    let taskID = 1;
    if(Tasks.length > 0) {
      taskID = Tasks[0].taskID + 1
    }
    let task = {taskID: taskID, taskmessage: taskmessage, finished: false}
    let newtask = [task, ...Tasks]
    console.log(newtask)
    setTasks(newtask)
  };

  const removeTask = (taskID) => {
    let newTasks = [...Tasks].filter((task) => task.taskID !== taskID);
    setTasks(newTasks);
  }

  const finishTask = (taskID) => {
    let newTasks = Tasks.map((task) => {
      if(task.taskID === taskID){
        task.finished = !task.finished
        setFinish(task)
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <h1>To Do App</h1>
      <h2>Wilbert Wirawan Ichwan - L4AC - 2501963186</h2>
      <Add addTask = {addTask}> </Add>
      {Tasks.map((task) => {
        return(
          <List task = {task} key = {task.taskID} removeTask = {removeTask} finishTask = {finishTask}/>
        )
      })}
    </div>
  );
}

export default App;
