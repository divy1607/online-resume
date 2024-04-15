import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Appbar from "./components/Appbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#eeeeee"
    }}
    >

      <Router>
        <Appbar></Appbar>
        <Routes>
          <Route path={"/home"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/contact"} element={<Contact />}></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
