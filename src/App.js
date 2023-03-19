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
        <Header/> {/* header contains the Navbar */}
        <Routes>
          <Route path='/' element={<Home />}/> {/*Home contains personal statement and links to contact and projects*/}
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/:projectname' element={<Readme />}/> {/*Readme page is rendered depending on the user selection(when the reader click read more)*/}
          <Route  path='/contact' element={<Contact />} /> {/*contact page*/}
        </Routes>
        <Footer/>
      </div>

    </Router>
  
    
    

  )
}

export default App;
