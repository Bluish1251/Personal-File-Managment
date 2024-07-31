import logo from './2e6e3499bbaf9e2ddeb0501f400de36a.jpg';
import './App.css';

// main page

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Log in to Access Files!
        </p>

        {/* Log In info in the Header class for now just cuz space is being annoying */}
        <div className="Login-Wrapper">

          <form action="">
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className='bx bx-user'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className='bx bx-lock-alt'></i>
            </div>

            <button type="submit" className="btn">Login</button>
            <i className='bx bx-log-in'></i>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
