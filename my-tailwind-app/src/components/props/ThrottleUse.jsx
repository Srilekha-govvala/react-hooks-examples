import { useEffect } from "react";
import { useThrottle } from "../customHooks/Throttle";
export default function ThrottleUse(){
    const handleScroll=useThrottle(()=>{
        console.log("Scroll Y:", window.scrollY);
    },500);
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[handleScroll])
    return (
        <div style={{height:"200vh", padding:"20px"}}>
            Scroll down to see throttled logs
        </div>
    )
}