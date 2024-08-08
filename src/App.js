// import Home from 'pages/Home';
import Login from 'pages/Login';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Signup from 'pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/join" element={<Signup />}/>
      </Routes>
    </Router>

  );
}

export default App;
