import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Hero from './components/Hero/Hero.jsx';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Header menu={props.headerMenu} />
      <Hero />
      <About />
    </div>
  );
}

export default App;
