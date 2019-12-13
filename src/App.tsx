import React from 'react';
import './App.css';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { TaskList } from './TaskList';
import {Task} from './Task'
import { AddTask } from './AddTask';

const App: React.FC = () => {

  const [tasks, setTasks] = React.useState<Array<Task>>([]);

  const addTask = (task : Task) : void =>  {
    setTasks([...tasks, task]);
  }

  return (
    <div className="App">
      <ThemeProvider withToastContainer>
        <TaskList tasks = {tasks}/>
        <AddTask addTask = {addTask}/>
      </ThemeProvider>
    </div>
  ); 
}

export default App;
