
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Readme } from './pages/Readme';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/:projectname' element={<Readme/>}/>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

    </Router>
  
    
    

  )
}

export default App;
