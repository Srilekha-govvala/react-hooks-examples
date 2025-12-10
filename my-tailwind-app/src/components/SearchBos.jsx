import { useState } from "react";
import useDebounce from "./customHooks/DebounceCustomHook";

export default function SearchBos(){
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);

    return (
        <div className="p-4">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="mt-4 text-lg font-semibold text-gray-700">
                With Debounce: <span className="text-gray-600">{debouncedSearch}</span>
            </p>
            <p className="mt-2 text-lg font-semibold text-gray-700">
                Without Debounce: <span className="text-red-600">{search}</span>
            </p>
        </div>
    );
}
