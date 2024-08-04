// import HomePage from 'pages/HomePage';
import LoginForm from 'pages/LoginPage';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        {/* <Route path="/login" element={<LoginForm />}/> */}

      </Routes>
    </Router>

  );
}

export default App;
