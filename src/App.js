
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { VidPlayer } from './pages/VidPlayer';
import video1 from "./videos/video-2021-12-03-22-53.mp4"
import video2 from "./videos/video-2021-12-03-23-13.mp4"


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/capytech-react" element={<Home />} />
          <Route path="/video-1" element={<VidPlayer src={video1} />} />
          <Route path="/video-2" element={<VidPlayer src={video2} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
