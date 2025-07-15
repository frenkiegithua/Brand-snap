import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UploadForm from './components/UploadForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
        <Link to="/" className="navbar-brand fw-bold">🖼️ ImageTool</Link>
        <div className="ms-auto d-flex align-items-center">
          <Link to="/privacy" className="nav-link">Privacy</Link>
          <Link to="/contact" className="nav-link ms-3">Contact</Link>
          <Link to="/about" className='nav-link ms-3'>About</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="container py-4">
              <UploadForm />
            </div>
          }
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
