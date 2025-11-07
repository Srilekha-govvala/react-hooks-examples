/* eslint-disable no-unused-vars */
/*🌍 Real-life Example — Live Search with Debounce + Memoization

Imagine you’re building a Student Search App that filters students as you type.
You want it to be fast and efficient — not re-filter on every keystroke or re-render the whole list unnecessarily.*/
import React from "react";
import { useState, useMemo, useCallback } from "react";
// ✅ Child component - only re-renders when props change
const StudentList = React.memo(({ students }) => {
    console.log("Students list rendered : ", students);
    return (
        <ul>
            {students.map((s) => (
                <li key={s.i}>{s.name}</li>
            ))}
        </ul>
    )
})
function StudentSearchApp() {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const students = [
        { id: 1, name: "Srilu" },
        { id: 2, name: "Abhiram" },
        { id: 3, name: "Chandra" },
        { id: 4, name: "Greesh" },
        { id: 5, name: "Sai" }
    ];
    // ⏱️ Debounce: Wait 500ms after typing stops
    const handleSearchChange = useCallback((e) => {
        const value = e.target.value;
        setSearch(value);
        clearTimeout(window._timer);//clears previous timer;
        window._timer = setTimeout(() => setQuery(value), 500);

    }, [])
    // 🧠 useMemo: Recalculate filtered list only when 'query' changes
    const filterStudents = useMemo(() => {
        console.log("filtering students....");
        return students.filter((s) => (s.name.toLowerCase().includes(query.toLowerCase())))
    }, [query])
    return(
        <div >
            <h2>🎓 Student Search</h2>
            <input type="text" placeholder="Type Name..." value={search} onChange={handleSearchChange}/>
            <StudentList students={filterStudents}/>
        </div>
    )
}
export default StudentSearchApp;