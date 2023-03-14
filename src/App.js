import { Readme } from './pages/Readme';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';




const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/:projectname' element={<Readme />}/>
          <Route  path='/contact' element={<Contact />} />
        </Routes>
      </div>

    </Router>
  
    
    

  )
}

export default App;
