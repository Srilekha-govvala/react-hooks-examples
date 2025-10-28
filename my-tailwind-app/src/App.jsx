import './App.css'
import Counter from './components/Counter';
import ParentProps from './components/props/ParentProps';

function App() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
    //   <h1 className="text-4xl font-bold mb-3">Hello, Tailwind + React 🎨</h1>
    //   <p className="text-lg text-white/90">If this text is styled, Tailwind is active ✅</p>
    // </div>
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white'>
      <h1 className='text-3xl font-bold mb-6'>Tailwind Counter</h1>
      <Counter/>
      <h1>Parent Child Props concept</h1>
      <ParentProps/>
    </div>
  );
}

export default App;
