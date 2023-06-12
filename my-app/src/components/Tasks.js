
const Tasks = ({tasksList, onDelete}) => {
    return (

        <div className="Tasks">

            <table>
                <tr>
                    <th>Task</th>
                    <th>Done</th>
                    <th></th>
                    <th></th>
                </tr>

                {tasksList.map((task) => (<tr key={task.id}>
                    <td> {task.text} </td> <td> {task.done } </td> 
                    <td><button>Done</button></td> 
                    <td><button onClick={()=> {onDelete(task.id)} }>Delete</button></td>
                </tr>))}
                    
            </table>

        </div>

    )

}
export default Tasks