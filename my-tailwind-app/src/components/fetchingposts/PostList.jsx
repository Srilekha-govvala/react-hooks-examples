import { useState, useEffect } from "react";
export default function PostList() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!res.ok) throw new Error("Failed to fetch")
                const data = await res.json();
                setPosts(data.slice(0, 3));
            }
            catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    if (loading) return <p>⏳ Loading...</p>
    if (error) return <p>❌ {error}</p>
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mg-4">📚 Posts</h2>
            <ul className="space-y-2">
                {posts.map((p) => (
                    <li key={p.id} className="bg-indigo-500 p-3 rounded">
                        <strong>{p.company.name}</strong>
                        <p>{p.company.catchPhrase}</p>
                        <em>Contact: {p.phone}</em>
                    </li>
                ))}
            </ul>
        </div>
    )
}