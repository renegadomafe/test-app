import './App.css';
import { Home } from './components/home/Home';
import { Header } from './components/header/Header'


function App() {
  return (
    <div className="App">
      <Header />           
      <h2>Test App</h2>    
      <Home />
    </div>
  );
}

export default App;
