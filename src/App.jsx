// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
