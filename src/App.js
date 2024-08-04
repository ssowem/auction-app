// import HomePage from 'pages/HomePage';
import LoginForm from 'pages/LoginPage';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import SignupForm from 'pages/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/join" element={<SignupForm />}/>
      </Routes>
    </Router>

  );
}

export default App;
