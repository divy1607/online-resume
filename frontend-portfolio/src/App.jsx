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
import { useRef } from 'react';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import divyPhoto from './assets/c977b6ac-e9c2-40f6-835c-1ce07dc571ac.jpg';



function App() {

  const suggRef = useRef(null);
  const abRef = useRef(null);

  const scrollToComponent = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#e5ff9e",
      top: 0,
      left: 0,
      right: 0
    }}
    >
      <div style={{
        backgroundColor: "rgba(255, 99, 71, 0.7)",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        justifyContent: "space-between"
      }}>
        <nav>
          <Grid container>
            <Grid item lg={4} md={4} sm={12}>

              <div style={{ marginLeft: 10 }} >
                <Button
                  variant={"text"}
                > <Avatar alt="Divy"
                  src={divyPhoto}
                  sx={{ width: 56, height: 56 }} /> </Button>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={12}>
              <div style={{
                display: "flex",
                justifyContent: "center"
              }}>
                <h2>
                  THE WAY I AM
                </h2>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={12}>
              <div style={{
                display: "flex",
                justifyContent: "right",
              }}>
                <div style={{ justifyContent: "right", marginRight: 10, display: "flex" }}>
                  <div style={{ marginRight: 10 }}>
                    <Button
                      variant={"text"}
                    > <h4>Home</h4></Button>
                  </div>
                  <div style={{ marginRight: 10 }}>
                    <Button
                      onClick={() => scrollToComponent(abRef)}
                      variant={"text"}
                    > <h4>About</h4></Button>
                  </div>
                  <Button
                    variant={"text"}
                    onClick={() => scrollToComponent(suggRef)}
                  > <h4>Suggestion</h4></Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </nav>
      </div>
      <br /><br />
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffb0",
        backgroundImage: "linear-gradient(to bottom right, red, yellow)",
        zIndex:-1
      }}>
        <Home></Home>
      </div>

      <div ref={abRef}
        style={{
          backgroundColor: "green"
        }}>
        <About></About>
      </div>

      <div style={{
        backgroundColor: "purple"
      }}>
        <Divy></Divy>
      </div>
      <div ref={suggRef}
        style={{
          backgroundColor: "yellow",
          height: 1000
        }}
      >
        <Suggestion></Suggestion>
      </div>
      <div>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default App
