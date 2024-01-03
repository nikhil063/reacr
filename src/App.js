import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import Home from './pages/Home';
import BlogId from './pages/BlogId';
import Incre from './pages/Incre';
import BlogNid from './pages/BlogNid';

function App() {
  return (
    
      <><BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Routes>
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Routes>
          <Route path="/blog/:id" element={<BlogId />} />
        </Routes>
        <Routes>
          <Route path="/blog/:id/:nid" element={<BlogNid />} />
        </Routes>
        <Routes>
          <Route path="/incre" element={<Incre />} />
        </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
