import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <img src="logo.png" className="logo" alt="MoodMate Logo" />
      <br />
      <h1>MoodMate: A Personal Mood Tracker & Journal</h1>
      <nav>
        <ul className="Navigation">
          <li className="LinkHead"><Link to="/">Home</Link></li>
          <li className="LinkHead"><a href="#">About</a></li>
          <li className="LinkHead"><a href="#">Contacts</a></li>
          <li>
            {/* ✅ Link instead of button */}
            <Link to="/login" className="login-btn">Login</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/signup" className="signup-btn">SignUp</Link>
          </li>
        </ul>
      </nav>
      <br />
      <hr />
    </header>
  );
}

export default Header;
