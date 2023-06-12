import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Search from './components/Search';
import Footer from './components/Footer';
import { useState } from 'react';


const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Task 1',
      done: false,
    },
    {
      id: 2,
      text: 'Task 2',
      done: false,
    }
  ])

  const deleteTask = (id) => {
    
      setTasks(old => old.filter((task) => task.id !== id))
  }
  const addTask = (task) => {

    setTasks([...tasks,task])
}


  return (

    <div className="App">
    <header>
        <h1>
        "Todo List !"
        </h1>
    </header>    
    <AddTask onClick = {addTask} />
      <Search />
      <Tasks tasksList={tasks} onDelete={deleteTask} />
      <Footer />
    </div>
  );
}

export default App;
