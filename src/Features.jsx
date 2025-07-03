import './Features.css';


function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Why Choose MoodMate?</h2>

        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card bg-indigo-100">
            <div className="feature-icon"  style={{backgroundColor : 'lightpink'}}>
              <svg width="150" height="150" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="#e0e7ff" />
                <path d="M30,60 Q45,30 60,60 T90,60" stroke="#6366f1" strokeWidth="4" fill="none" />
                <circle cx="30" cy="60" r="5" fill="#6366f1" />
                <circle cx="60" cy="60" r="5" fill="#6366f1" />
                <circle cx="90" cy="60" r="5" fill="#6366f1" />
              </svg>
            </div>

            <div className="feature-text">
              <h3 className="feature-heading">Track Your Moods</h3>
              <p className="feature-description">
                Easily log your daily emotions and see patterns emerge over time with beautiful visualizations.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-card bg-purple-100">
            <div className="feature-icon" style={{backgroundColor : 'lightblue'}}>
              <svg width="150" height="150" viewBox="0 0 120 120">
                <rect x="25" y="30" width="70" height="60" rx="4" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
                <line x1="35" y1="45" x2="85" y2="45" stroke="#6366f1" strokeWidth="2" />
                <line x1="35" y1="55" x2="85" y2="55" stroke="#6366f1" strokeWidth="2" />
                <line x1="35" y1="65" x2="65" y2="65" stroke="#6366f1" strokeWidth="2" />
                <line x1="35" y1="75" x2="75" y2="75" stroke="#6366f1" strokeWidth="2" />
              </svg>
            </div>
            <div className="feature-text">
              <h3 className="feature-heading">Journal Your Thoughts</h3>
              <p className="feature-description">
                Express yourself freely in a private digital journal that helps you process emotions and gain insights.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-card bg-blue-100">
            <div className="feature-icon"  style={{backgroundColor : 'lightyellow'}}>
              <svg width="150" height="150" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="40" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
                <path d="M40,70 C45,80 75,80 80,70" stroke="#6366f1" strokeWidth="3" fill="none" />
                <circle cx="45" cy="50" r="5" fill="#6366f1" />
                <circle cx="75" cy="50" r="5" fill="#6366f1" />
              </svg>
            </div>
            <div className="feature-text">
              <h3 className="feature-heading">Improve Well-being</h3>
              <p className="feature-description">
                Gain self-awareness and develop healthy coping strategies through regular reflection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
