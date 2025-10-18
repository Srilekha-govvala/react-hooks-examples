import Count from './components/Count';
import ToDoList from './components/ToDoList';
import TwoCOunter from './components/TwoCounter';
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100vw' }}>
      <h1>React Hook Examples Day 1</h1>
      <Count />
      <h2>The Two counter</h2>
      <TwoCOunter/>
      <h1>Day 2 - ToDo List</h1>
      <ToDoList/>
    </div>
  );
}

export default App
