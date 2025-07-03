import './Hero.css';

function Hero() {
  return (
    <section className="hero-gradient text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Track Your Emotions, Transform Your Life
            </h2>
            <p className="text-lg mb-8 opacity-90">
              MoodMate helps you understand your emotional patterns and improve your mental wellbeing through daily journaling and mood tracking.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="get-started-btn">Get Started</a>
              <a href="#" className="learn-more-btn">Learn More</a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-lg">
              <defs>
                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#f0f0f0" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <circle cx="150" cy="150" r="140" fill="url(#circleGradient)" stroke="#ffffff" strokeWidth="2" />
              
              {/* Journal lines */}
              <rect x="70" y="90" width="160" height="6" rx="3" fill="#6366f1" opacity="0.7" />
              <rect x="70" y="120" width="160" height="6" rx="3" fill="#6366f1" opacity="0.7" />
              <rect x="70" y="150" width="120" height="6" rx="3" fill="#6366f1" opacity="0.7" />
              
              {/* Mood icons */}
              <circle cx="90" cy="200" r="20" fill="#4ade80" />
              <circle cx="150" cy="200" r="20" fill="#facc15" />
              <circle cx="210" cy="200" r="20" fill="#f87171" />

              {/* Faces */}
              <path d="M80,195 C85,190 95,190 100,195" stroke="#333" strokeWidth="3" fill="none" />
              <circle cx="85" cy="185" r="3" fill="#333" />
              <circle cx="95" cy="185" r="3" fill="#333" />

              <path d="M140,200 C145,200 155,200 160,200" stroke="#333" strokeWidth="3" fill="none" />
              <circle cx="145" cy="185" r="3" fill="#333" />
              <circle cx="155" cy="185" r="3" fill="#333" />

              <path d="M200,205 C205,210 215,210 220,205" stroke="#333" strokeWidth="3" fill="none" transform="rotate(180 210 205)" />
              <circle cx="205" cy="185" r="3" fill="#333" />
              <circle cx="215" cy="185" r="3" fill="#333" />

              {/* Heart pulse line */}
              <path d="M70,60 Q105,20 150,60 T230,60" stroke="#6366f1" strokeWidth="5" fill="none" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
