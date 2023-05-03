import { useState } from 'react';
import './index.css';
import PageLayout from './Pages/PageLayout';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './Pages/CountryDetails';

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(prev => !prev);
    document.body.classList.toggle("darkmode");
    document.body.classList.toggle("lightmode");
  };

  return (
      <Routes>
        <Route path='/' element={<PageLayout toggleMode={handleToggle} isDark={isDark} />}>
          <Route index element={<Home isDark={isDark} />} />
          <Route path="details/:id" element={<CountryDetails />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
  )
}

export default App
