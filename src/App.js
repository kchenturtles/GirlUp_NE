import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import { HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Board from './pages/Board';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <div className = "h-24">
        <Nav />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </HashRouter>
  );
}

export default App;
