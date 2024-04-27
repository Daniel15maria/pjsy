import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components/home/home_page';
import { NavBar } from './components/resuable/nav';
import { AboutUsPage } from './components/about/aboutus_page';
import { Donate } from './components/donate/donate';

import { ProgamsPage } from './components/programs/ProgamsPage';
import HerosPage from './components/heros/HerosPage';
import GalleryPage from './components/gallery/galler_page';
import SainumaPage from './components/heros/SainumaPage';
import MagisPage from './components/programs/MagisPage';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/programs' element={<ProgamsPage />} />
        <Route path='/heros' element={<HerosPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/sainuma' element={<SainumaPage />} ></Route>
        <Route path='/magis' element={<MagisPage />} ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;