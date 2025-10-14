import Count from './components/Count';
import TwoCOunter from './components/TwoCounter';
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100vw' }}>
      <h1>React Hook Examples</h1>
      <Count />
      <h2>The Two counter</h2>
      <TwoCOunter/>
    </div>
  );
}

export default App
