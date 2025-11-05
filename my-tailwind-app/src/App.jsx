import './App.css'
import Counter from './components/Counter';
import ParentProps from './components/props/ParentProps';
import PersistanceCounter from './components/useffectCode/PersistanceCounter';
import Accordion from './Accordion';
import CardGrid from './CardGrid';
import PostList from './components/fetchingposts/PostList';
import { useState } from 'react';

const items = [
  { id: 'counter', title: 'Counter', Component: Counter },
  { id: 'props', title: 'Parent -> Child Props', Component: ParentProps },
  { id: 'useeffect', title: 'UseEffect Persistence Counter', Component: PersistanceCounter },
  { id: 'fetch', title: 'Fetching data using fetch', Component: PostList }
]

function App() {
  const [mode, setMode] = useState('accordion')
  return (
    <div className=" flex flex-col items-center justify-start bg-gradient-to-br from-purple-500 to-indigo-600 text-white py-12 px-4">
      <div className="w-full max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold mb-2">Welcome to Tailwind App — Mini Projects</h1>
          <p className="text-white/90">Choose a layout to explore each mini project.</p>
        </header>

        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            onClick={() => setMode('accordion')}
            className={`px-4 py-2 rounded-md font-medium transition 
              ${mode === 'accordion' ? 'bg-white text-indigo-600' : 'bg-white/20 hover:bg-white/30'
              }`}
          >
            Accordion
          </button>
          <button
            onClick={() => setMode('cards')}
            className={`px-4 py-2 rounded-md font-medium transition 
              ${mode === 'cards' ? 'bg-white text-indigo-600' : 'bg-white/20 hover:bg-white/30'
              }`}
          >
            Cards
          </button>
        </div>

        <main>
          {mode === 'accordion' ? <Accordion items={items} /> : <CardGrid items={items} />}
        </main>
      </div>
    </div>

  );
}

export default App;
