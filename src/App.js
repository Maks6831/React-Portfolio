import { Readme } from './pages/Readme';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';




const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='React_Portfolio/' element={<Home />}/>
          <Route exact path='/projects' element={<Projects/>} />
          <Route exact path='/projects/:projectname' element={<Readme />}/>
          <Route exact  path='/contact' element={<Contact />} />
        </Routes>
      </div>

    </Router>
  
    
    

  )
}

export default App;
