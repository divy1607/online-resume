import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Appbar from "./components/Appbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Suggestion from "./components/Suggestion.jsx";
import Divy from "./components/Divy.jsx"
import Footer from "./components/Footer.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#e5ff9e"
    }}
    >

      <Router>
        <Appbar></Appbar>
        <Routes>
          <Route path={"/home"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/suggestion"} element={<Suggestion />}></Route>
          <Route path={"/"} element={<Divy />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>

    </div>
  )
}

export default App
