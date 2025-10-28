export default function ChildCounter({onIncrement}){
    return (
        <button onClick={onIncrement} className="bg-green-500 text-white px-3 py-2 rounded">
            Increment
        </button>
    )
}