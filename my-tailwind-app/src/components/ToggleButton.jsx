import { useToggle } from "./customHooks/ToggleCustomHook";
export default function ToggleButton() {
    const { value: isOpen, toggle } = useToggle();
    return (
        <>
            <button className="bg-blue-500 hover:bg-red-600 px-4 py-2 rounded text-white" onClick={toggle}>Toggle</button>
            {isOpen && <p>Panel is Opened using custom hook!!</p>}
        </>
    )
}