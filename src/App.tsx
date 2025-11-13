import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ContactPage } from './pages/Contact';

export default function App() {
  console.log("App component: Rendering with HashRouter");
  
  // Using HashRouter for GitHub Pages compatibility
  // HashRouter works better with GitHub Pages subdirectories
  // Routes will be: /#/ and /#/contact
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  );
}
