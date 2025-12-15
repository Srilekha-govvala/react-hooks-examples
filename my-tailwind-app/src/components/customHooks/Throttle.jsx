import { useRef } from "react";
export function useThrottle(callback,delay=500){
    const lastRun=useRef(0);
    return (...args)=>{
        const now= Date.now();
        if(now-lastRun.current>=delay){
            lastRun.current=now;
            callback(...args)
        }
    }
};
