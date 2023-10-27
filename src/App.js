import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Path from './components/Path';
import Help from './components/Help';
import Partner from './components/Partner';
import Story from './components/Story';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Path />
      <Help />
      <Partner />
      <Story />
      <About />
      <Footer />
    </div>
  );
}

export default App;
