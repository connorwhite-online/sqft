import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import Store from './pages/Store';

function App() {
  return (
    <div className='app'>
      <Menu />
      <Home />
      <Store />
    </div>
  );
}

export default App;
