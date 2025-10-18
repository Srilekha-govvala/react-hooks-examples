import { useState } from 'react';
const ToDoList = () => {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])
    function addTask() {
        if (task.trim() === "") return;
        setTasks(prev=>[...prev, task])
        setTask("")
    }
    function deleteTask(taskId) {
        console.log(taskId)
        let newTasks = tasks.filter((_, i) => ( i !== taskId ))// if we have return then we will use {} else ()
        setTasks(newTasks)
    }
    return (
        <>
            <div style={{ textAlign: "center"}}>
                <h2>To Do List 📝</h2>
                <input type='text' value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Enter a task'/>
                <button onClick={addTask}>Add Task</button>
                <ul style={{listStyle:"none",padding:0}}>
                    {tasks.map((item,index)=>(
                        <li key={index} style={{margin:"8px 0"}}>{item}{" "}
                        <button onClick={()=>deleteTask(index)}>❌</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default ToDoList