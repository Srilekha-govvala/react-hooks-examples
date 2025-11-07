import { useState } from "react";
function Counter(){
    //step1: react manages the state
    const [count,setCount]=useState(0)
    //step2: JSX describes the UI(HTML-like)
    return(
        <>
        <div >
            <h3>Counter : {count}</h3>
            <button onClick={()=>{setCount(count+1)}}>+</button>&nbsp;
            <button onClick={()=>{setCount(count-1)}}>-</button>
        </div>
        </>
    )
}
export default Counter;
/*⚙️ What’s happening:

You don’t touch the DOM manually.

React automatically re-renders the UI whenever count changes.

The HTML-like syntax (<h1>, <button>) is JSX, compiled by Babel into JavaScript.

✅ Pros:

React handles DOM updates efficiently.

Cleaner and more readable for UI building.

Scales easily with components and state.

❌ Cons:

Slightly heavier (needs setup with Vite, React, Babel).

Overkill for very small apps. */