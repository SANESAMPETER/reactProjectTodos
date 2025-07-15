// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MyComponents from './components/MyComponents';
import Header from './components/Header';
import ChildComponents from './components/ChildComponents';
// import Todos from './components/Todos';

import Navbar from './components/Navbar'; // make sure this exists

// Pages
import Home from './pages/Home';
import Shopping from './pages/Shopping';
import Nav3 from './pages/Nav3';
import Nav4 from './pages/Nav4';
import About from './pages/About';

function App() {
  const myName = 'John Doe';
  const myAge = 30;
  const isDisplay = { display: 'none' };

  const myHobbies = ['Reading', 'Traveling', 'Cooking'];
  const users = [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'John' }
  ];

  const handleMessage = (inputValue) => {
    alert("Hi from Parent: " + inputValue);
  };

  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/nav3" element={<Nav3 />} />
          <Route path="/nav4" element={<Nav4 />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <div className='react_JSX_Props' style={isDisplay}>
          <b>Name: {myName}</b>
          <p>Age: {myAge}</p>

          <ul>
            {myHobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>

          {users.map(user => (
            <p key={user.id}>{user.name}</p>
          ))}

          <Header userName={myName} />
          <MyComponents userName={myName} />
          <ChildComponents sendMessage={handleMessage} />
        </div>

        {/* <Todos /> */}
      </div>
    </Router>
  );
}

export default App;
