import { Routes, Route, Link } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import ViewPlayers from './ViewPlayers'; // Players view
import AdminLogin from './AdminLogin';
import { useAuth } from '../contextapi/AuthContext';
import WriteQuiz from './WriteQuiz'; // Updated component

export default function AdminNavBar() {
  const { setIsAdminLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Admin</div>
        <ul className="nav-links">
          <li><Link to="/adminhome">Home</Link></li>
          <li><Link to="/viewallplayers">View All Players</Link></li>

          <li className="dropdown">
            <span>Quiz▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/writequiz">Write Quiz</Link></li>
            </ul>
          </li>

          <li><Link to="/adminlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/viewallplayers" element={<ViewPlayers />} exact />
        <Route path="/writequiz" element={<WriteQuiz />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
      </Routes>
    </div>
  );
}
