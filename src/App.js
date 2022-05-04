import { React } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import Story from './pages/Story/Story';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import {Route, Routes, useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/our-story' element={<Story />}/>
      <Route path='/faq' element={<FAQ />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </>
  );
}

export default App;
