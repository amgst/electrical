import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ContactPage } from './pages/Contact';

export default function App() {
  // Get the base path from Vite's import.meta.env.BASE_URL
  // This automatically matches the base path configured in vite.config.ts
  // Remove trailing slash if present (BrowserRouter expects it without trailing slash)
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
