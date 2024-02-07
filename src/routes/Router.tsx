import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Contact } from '../pages/contact';
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
