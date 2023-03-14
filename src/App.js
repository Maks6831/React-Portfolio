import { Readme } from './pages/Readme';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';




const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/:projectname' element={<Readme />}/>
          <Route  path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </div>

    </Router>
  
    
    

  )
}

export default App;
