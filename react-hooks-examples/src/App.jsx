import Count from './components/Count';
import StudentSearchApp from './components/Debounce_Memorization';
import TodoListReactMemo from './components/ReactMemo';
import ToDoList from './components/ToDoList';
import TwoCOunter from './components/TwoCounter';
import ReactVersion from './components/VanillaJs/ReactVersion';
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100vw' }}>
      <h1>React Hook Examples Day 1</h1>
      <Count />
      <h2>The Two counter</h2>
      <TwoCOunter/>
      <h1>Day 2 - ToDo List</h1>
      <ToDoList/>
      <h1>-----------------------</h1>
      <TodoListReactMemo/>
      <h1>Debounce_Memorization</h1>
      <StudentSearchApp/>
      <h1>The DOM</h1>
      <ReactVersion/>
    </div>
  );
}

export default App
