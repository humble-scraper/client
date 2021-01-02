import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const ping = async () => {
    let url = "http://localhost:9999/"
    let got = await axios.get(url).catch(err => console.log(err));
    console.log(got);
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button"
                onClick={ping}>
            Ping
        </button>
      </header>
    </div>
  );
}

export default App;
