import { useState } from "react"

const Add = ({onClick}) => {

    const [task,setTask] = useState('');
    
    const submit = (e)=>{
        e.preventDefault();
        if(!task)
        {
            alert("Please enter a task")
        }
        else {
        const newTask = {id: new Date().getTime(), text: task, done: false};
        onClick(newTask);
        setTask('')
        }

    }
    return (
        <form onSubmit={submit}>
        <div className="Add">
            <input type="text" placeholder="Add Todo" value={task}
            onChange={e=>setTask(e.target.value)}>
            </input>
            
            <button type="submit" >
                Add
            </button>
            
        </div>
        </form>
    )
}

export default Add