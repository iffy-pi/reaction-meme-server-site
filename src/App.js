import logo from './logo.svg';
import iffy from './pictures/Iffy.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={iffy} className="App-logo" alt="logo" />
        <p>
          Welcome to my meme server
        </p>
        <a
          className="App-link"
          href="https://theeverly.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stalk me
        </a>
      </header>
    </div>
  );
}

export default App;
