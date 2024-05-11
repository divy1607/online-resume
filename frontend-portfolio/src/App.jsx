import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Suggestion from "./components/Suggestion.jsx";
import Divy from "./components/Divy.jsx"
import Footer from "./components/Footer.jsx"
import { useRef } from 'react';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import divyPhoto from './assets/c977b6ac-e9c2-40f6-835c-1ce07dc571ac.jpg';



function App() {

  const suggRef = useRef(null);
  const abRef = useRef(null);
  const divRef = useRef(null);
  const homeRef = useRef(null);

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
        backgroundColor: "rgba(255, 99, 71, 0.2)",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        justifyContent: "space-between",
        zIndex: 3
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

              <h1 style={{
                textAlign: "center"
              }}>
                THE WAY I AM
              </h1>
            </Grid>
            <Grid item lg={4} md={4} sm={12}>
              <div style={{
                display: "flex",
                justifyContent: "right",
              }}>
                <div style={{ justifyContent: "right", marginRight: 10, display: "flex" }}>
                  <div style={{ marginRight: 10 }}>
                    <Button
                      onClick={() => scrollToComponent(homeRef)}
                      variant={"text"}
                    > <h4>Home</h4></Button>
                  </div>
                  <div style={{ marginRight: 10 }}>
                    <Button
                      onClick={() => scrollToComponent(abRef)}
                      variant={"text"}
                    > <h4>Projects</h4></Button>
                  </div>
                  <div style={{ marginRight: 10 }}>
                    <Button
                      onClick={() => scrollToComponent(divRef)}
                      variant={"text"}
                    > <h4>Education</h4></Button>
                  </div>

                  <Button
                    variant={"text"}
                    onClick={() => scrollToComponent(suggRef)}
                  > <h4>Contact me </h4></Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </nav>
      </div>
      <br /><br />
      <div ref={homeRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffb0",
          backgroundImage: "linear-gradient(to bottom right, red, yellow)",
          zIndex: -1
        }}>
        <Home></Home>
      </div>

      <div ref={abRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "linear-gradient(to bottom right,#ceff1f, #2cf8ef)"
        }}>
        <About></About>
      </div>

      <div ref={divRef}
        style={{
          backgroundImage: "linear-gradient(to bottom right,#ffffa9,#ee82ee)",
        }}>
        <Divy></Divy>
      </div>
      <div ref={suggRef}
        style={{
          backgroundColor: "yellow",
          height: 600
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
