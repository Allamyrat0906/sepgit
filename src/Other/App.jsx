
import React from 'react';
//import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './pages/About';
import Events from './pages/Events';
import AnnualReport from './pages/AnnualReport';
import Teams from './pages/Teams';
import Blogs from './pages/Blogs';
import SignUp from './pages/SignUp';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </Router>
  );
}
  
export default App;