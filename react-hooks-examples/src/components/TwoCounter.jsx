import { useState } from 'react';
function TwoCOunter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(15);
    return (
        <div style={{justifyContent:"center", alignItems:"center"}}>
            <p>Increase counter: {count1}</p>
            <button onClick={() => setCount1(count1 + 1)}>+</button>
            <button onClick={() => setCount1(0)}>Reset</button>
            <p>Decrease counter: {count2}</p>
            <button onClick={() => setCount2(count2 - 1)}>-</button>
            <button onClick={() => setCount2(15)}>Reset</button>
        </div>
    )
}
export default TwoCOunter;