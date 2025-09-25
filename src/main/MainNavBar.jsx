import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './style.css';
import PlayerLogin from '../player/PlayerLogin';
import PlayerRegistration from '../player/PlayerRegistration';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';
import NotFound from './NotFound';

export default function MainNavBar() 
{
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome to Quiz Builder</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/playerregistration">Register</Link></li>
          <li className="dropdown">
            <span>Login ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/playerlogin">Player</Link></li>
              <li><Link to="/adminlogin">Admin</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/playerregistration" element={<PlayerRegistration />} exact />
        <Route path="/playerlogin" element={<PlayerLogin />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </div>
  );
}
