import React from 'react'
// import Navbar from './components/Navbar'
// import Banner from './components/Banner'
// import Footer from './components/Footer'
// import Freebok from './components/Freebok'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './courses/Courses';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
const App = () => {
  return (
 <>
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/course" element={<Courses />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
 </>
  )
}

export default App