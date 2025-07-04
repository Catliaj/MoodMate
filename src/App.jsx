import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Features from './Features.jsx';
import CallToAction from './CallToAction.jsx';
import Footer from './Footer.jsx';
import LoginForm from './LoginForm.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <CallToAction />
            <Footer />
          </>
        } />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
