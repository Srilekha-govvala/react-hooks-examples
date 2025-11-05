export default function CardGrid({ items = [] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map(it => {
                return (
                    <div key={it.id} className="bg-white/10 rounded-lg p-4">
                        <h3 className="fonst-semibold mb-3">{it.title}</h3>
                        <div className="bg-white/5 p-3 rounded">
                            <it.Component />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}