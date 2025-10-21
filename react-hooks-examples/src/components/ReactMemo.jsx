/* eslint-disable no-unused-vars */
import React, { useState } from "react";
const TaskItem = React.memo(({ task }) => {
    console.log("Rendered : ", task);
    return <li>{task}</li>
})
function TodoListReactMemo(){
    const [task,setTask]=useState(["Study","Code"]);
    const [count,setCount]=useState(0);
    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <ul>
                {task.map((t,i)=>(
                    <TaskItem task={t} key={i}/>
                ))}
            </ul>
        </div>
    )
}
export default TodoListReactMemo;