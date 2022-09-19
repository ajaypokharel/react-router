
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Green from './pages/Green';
import Purple from './pages/Purple';
import Red from './pages/Red';
import Orange from './pages/Orange'; 


function App() {
  return (
    <div>
      <h1>Welcome to color router app</h1>


      <nav className="navbar navbar-default navbar-static-top">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <Link className="nav-link" to="/">Orange</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="red">Red</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="green">Green</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="purple">Purple</Link>
          </li>
          
        </ul>
      </nav>

      <div className='routes-wrapper'>
        <Routes>
          <Route path="/" element={<Orange />} />
          <Route path="green" element={<Green />} />
          <Route path="red" element={<Red />} />
          <Route path="purple" element={<Purple />} />
        </Routes>
      </div>
        
    </div>
  );
}

export default App;
