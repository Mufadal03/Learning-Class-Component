import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';

function App() {
  return (
    <div className='App'>
      <Counter statement={"This is props"} />
   </div>
  )
}

export default App;
