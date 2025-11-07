import { useRef } from "react";
export default function UseRefEx(){
    const inputRef=useRef(null)
    const handleTouch=()=>inputRef.current.focus();
    return(
        <div>
            <input ref={inputRef} placeholder="Type here ..."/>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleTouch}>Focus Input</button>
        </div>
    )
}