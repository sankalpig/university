import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Path from './components/Path';

function App() {
  return (
    <div className="App">
      <NavBar className />
      <Carousel />
      <Path />
    </div>
  );
}

export default App;
