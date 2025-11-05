import { useState, useEffect } from "react";
export default function PersistantCounter() {
  //Initialize the counter from localStorage in a lazy useState initializer (with a safe window check) and 
  // only write stringified values back in a useEffect to ensure the saved value is loaded correctly after refresh.
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") return 0;
    const saved = localStorage.getItem("count");
    return saved !== null ? Number(saved) : 0;
  });
  useEffect(() => {

    localStorage.setItem("count", String(count));

  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-600 text-white gap-4">
      <h2 className="text-3xl font-bold">Persistent Counter</h2>
      <p className="text-xl">Count: {count}</p>
      <div className="flex gap-2">
        <button onClick={() => setCount(count + 1)} className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
          +
        </button>
        <button onClick={() => setCount(count - 1)} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
          -
        </button>
        <button onClick={() => setCount(0)} className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-500">
          Reset
        </button>
      </div>
    </div>
  );
}