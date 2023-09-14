import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import User from './pages/User/User';
import NoPage from './pages/NoPage/NoPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>

      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="users/:userid" element={<User/>} />

          <Route path="*" element={<NoPage/>} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
