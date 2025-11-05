import { useState, useRef, useEffect } from "react";
export default function Accordion({ items = [] }) {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([])//holds refs to each content panel
    //Ensure refs array matches items length
    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, items.length)
    }, [items.length])
    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx)
    }
    return (
        <div className="space-y-3">
            {items.map((it, idx) => {
                const isOpen = openIndex === idx
                const Icon = () => (
                    <svg
                        className={`w-5 h-5 transform transistion-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                )
                return (
                    <div key={it.id} className="bg-white/10 rounded-md overflow-hidden">
                        <button
                            onClick={() => toggle(idx)}
                            aria-expanded={isOpen}
                            aria-controls={`panel-${it.is}`}
                            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/5">
                            <span className="font-medium">{it.title}</span>
                            <Icon />
                        </button>
                        <div
                            id={`panel-${it.id}`}
                            ref={(el) => (contentRefs.current[idx] = el)}
                            className="px-4 pb-4 pt-0 bg-white/5 overflow-hidden transition-[max-height] duration-300 ease"
                            style={{
                                maxHeight: isOpen && contentRefs.current[idx] ? `${contentRefs.current[idx].scrollHeight}px` : '0px',
                            }}
                        >
                            <div className="p-4 bg-white/5 rounded mt-2">
                                <it.Component />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}