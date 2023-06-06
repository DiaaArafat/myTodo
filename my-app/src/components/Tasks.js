
const API = [
    {
        id: 1,
        text: 'Task 1',
        done: "false",


    },
    {
        id: 2,
        text: 'Task 2',
        done: "false",


    }

]
const Tasks = () => {

    return (

        <div className="Tasks">

            <table>
                <tr>
                    <th>Task</th>
                    <th>Done</th>
                    <th></th>
                    <th></th>
                </tr>

                {API.map((task) => (<tr key={task.id}>
                    <td> {task.text} </td> <td> {task.done} </td> 
                    <td><button>Done</button></td> 
                    <td><button>Delete</button></td>
                </tr>))}
                    
            </table>

        </div>

    )

}
export default Tasks