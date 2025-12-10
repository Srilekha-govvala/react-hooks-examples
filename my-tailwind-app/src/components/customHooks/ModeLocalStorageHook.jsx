import { useLocalStorage } from "./LocalStorageHook";
export default function ModeLocalStorageHook() {
    const [theme, setTheme] = useLocalStorage("theme", "Light");
    return (
        <>
        <button className="bg-orange-500 hover:bg-red-600 px-4 py-2 rounded text-white" 
        onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
            Switch Theme
        </button>

        <p>Theme now: {theme}</p>
        
        </>
    )
}