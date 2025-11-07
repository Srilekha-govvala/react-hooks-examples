import Count from './components/Count';
import StudentSearchApp from './components/Debounce_Memorization';
import TodoListReactMemo from './components/ReactMemo';
import ToDoList from './components/ToDoList';
import TwoCOunter from './components/TwoCounter';
import PersistantCounter from './components/useffectCode/PersistanceCounter';
import UseRefEx from './components/UseRef/UseRefEx';
import ReactVersion from './components/VanillaJs/ReactVersion';
function App() {
  return (
    <div>
      <h1>React Hook Examples Day 1</h1>
      <Count />
      <h1>The Two counter</h1>
      <TwoCOunter/>
      <h1>Day 2 - ToDo List</h1>
      <ToDoList/>
      <TodoListReactMemo/>
      <h1>Debounce_Memorization</h1>
      <StudentSearchApp/>
      <h1>The DOM</h1>
      <ReactVersion/>
      <h1>UseEffect Counter</h1>
      <PersistantCounter/>
      <h1>UseRef : for mutable non- rendaring values like DOM elements</h1>
      <UseRefEx/>
    </div>
  );
}

export default App
