import ChildCounter from './ChildCounter';
import ChildProps from './ChildProps';
import { useState } from 'react';
export default function ParentProps(){
    const [count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount(count+1)
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <ChildProps name="Srilekha"/>
            <h2>Counter : {count}</h2>
            <ChildCounter onIncrement={handleIncrement}/>
        </div>
    )
}