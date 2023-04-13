import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
       <Counter/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
