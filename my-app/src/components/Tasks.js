
const Tasks = ({tasksList, onDelete, onDoneClick}) => {
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
                    <td> {task.text} </td> <td> {task.done ? 'Yes' :'No' } </td> 
                    <td><button onClick={()=> {onDoneClick(task.id)}}>{ task.done ? 'Undone' : 'Done'}</button></td> 
                    <td><button onClick={()=> {onDelete(task.id)} }>Delete</button></td>
                </tr>))}
                    
            </table>

        </div>

    )

}
export default Tasks