import {useState} from 'react';
function Count(){
const [count,setCount]=useState(0);
return(
    <div style={{marginTop:"3em"}}>
        <p>Counter: {count}</p><br/>
        <button onClick={()=>setCount(count-1)}>-</button>&nbsp;
        <button onClick={()=>setCount(count + 1)}>+</button>&nbsp;
        <button onClick={()=>setCount(0)}>Reset</button>&nbsp;
    </div>
)
//we need to not only the call the function setCount but need to pass the function to be called
}
export default Count;