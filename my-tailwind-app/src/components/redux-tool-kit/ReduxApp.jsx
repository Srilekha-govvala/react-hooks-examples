import { useDispatch,useSelector } from "react-redux";
import { increment,decrement } from "./CounterSlice";
export default function Counter(){
    const count = useSelector(state=>state.counter.value);
    const dispatch=useDispatch();
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}