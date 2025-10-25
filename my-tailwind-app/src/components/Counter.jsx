import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    return(
        <div className="flex flex-col items-center gap-3 bg-white/10 p-6 rounded-xl shadow lg">
        <h2 className="text-2xl font-bold">Count:{count}</h2>
        <div className="flex gap-2">
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white" onClick={()=>setCount(count+1)}>+</button>
            <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white" onClick={()=>setCount(count-1)}>-</button>
            <button className="bg-gray-400 hover:bg-gray-500 px-4 py-2 rounded text-white"onClick={()=>setCount(0)}>Reset</button>
        </div>
        </div>
    );

}