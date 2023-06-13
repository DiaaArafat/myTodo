import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Search from './components/Search';
import Footer from './components/Footer';
import { useState } from 'react';


const App = () => {
  
  const [showTasks,setShowTasks]=useState(true)
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
const showOrHide = () => {
  
  setShowTasks(!showTasks)
}
const dpneUnDone = (id) => {
const newState = tasks.map(obj => {

    if (obj.id === id) {
      if(obj.done)
      return {...obj, done: false}
      else
      return {...obj, done: true}
    }
    return obj
  }
    
    )
    setTasks(newState)
}


  return (

    <div className="App">
    <header>
        <h1>
        "Todo List !"
        </h1>
    </header>    
    <AddTask onClick = {addTask} />
      <Search onclick={showOrHide}/>
      {showTasks && <Tasks tasksList={tasks} onDelete={deleteTask} onDoneClick={dpneUnDone} />}
      <Footer />
    </div>
  );
}

export default App;
