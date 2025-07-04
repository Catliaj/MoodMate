import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <svg width="30" height="30" viewBox="0 0 120 120" className="footer-icon">
              <circle cx="60" cy="60" r="54" fill="#6366f1" />
              <rect x="30" y="40" width="60" height="4" rx="2" fill="white" opacity="0.7" />
              <rect x="30" y="52" width="60" height="4" rx="2" fill="white" opacity="0.7" />
              <rect x="30" y="64" width="40" height="4" rx="2" fill="white" opacity="0.7" />
              <circle cx="35" cy="85" r="8" fill="#4ade80" />
              <circle cx="60" cy="85" r="8" fill="#facc15" />
              <circle cx="85" cy="85" r="8" fill="#f87171" />
              <path d="M30,30 Q45,10 60,30 T90,30" stroke="white" strokeWidth="3" fill="none" />
            </svg>
            <span className="footer-title">MoodMate</span>
          </div>
          <div className="footer-text">
            &copy; 2023 MoodMate: A Personal Mood Tracker & Journal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
