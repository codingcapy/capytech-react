
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { VidPlayer } from './pages/VidPlayer';
import video1 from "./videos/video-2021-12-03-22-53.mp4"
import video2 from "./videos/video-2021-12-03-23-13.mp4"
import video3 from "./videos/video-2021-12-04-23-28-1.mp4"
import video4 from "./videos/video-2021-12-04-23-28.mp4"
import video5 from "./videos/video-2021-12-04-23-50-1.mp4"
import { streamArray } from './pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/capytech-react" element={<Home />} />
          <Route path="/video-1" element={<VidPlayer src={video1} path={streamArray.vid1.path} title={streamArray.vid1.title} appUser={streamArray.vid1.appUser} uploadDate={streamArray.vid1.uploadDate} />} />
          <Route path="/video-2" element={<VidPlayer src={video2} path={streamArray.vid2.path} title={streamArray.vid2.title} appUser={streamArray.vid2.appUser} uploadDate={streamArray.vid2.uploadDate} />} />
          <Route path="/video-3" element={<VidPlayer src={video3} path={streamArray.vid3.path} title={streamArray.vid3.title} appUser={streamArray.vid3.appUser} uploadDate={streamArray.vid3.uploadDate} />} />
          <Route path="/video-4" element={<VidPlayer src={video4} path={streamArray.vid4.path} title={streamArray.vid4.title} appUser={streamArray.vid4.appUser} uploadDate={streamArray.vid4.uploadDate} />} />
          <Route path="/video-5" element={<VidPlayer src={video5} path={streamArray.vid5.path} title={streamArray.vid5.title} appUser={streamArray.vid5.appUser} uploadDate={streamArray.vid5.uploadDate} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
