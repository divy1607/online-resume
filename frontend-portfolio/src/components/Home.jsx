import divyPhoto from '../assets/c977b6ac-e9c2-40f6-835c-1ce07dc571ac.jpg';
import React from 'react';
import Typewriter from "typewriter-effect";

function Home() {
    return (<>
    
        <div style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            flexDirection: "column",
            alignContent: "center",
            width: 200
        }}>
            <h1 style = {{
                display: "flex",
                fontSize: "4rem",
                fontFamily: "Georgia, serif",
                fontWeight: "bold"
            }}>Hi, I'm <span style = {{color:"#00ffee", marginLeft: 20}}> Divyansh </span></h1>
            <h1 style = {{
                display:"flex",
                fontFamily: "Monaco, monospace",
                color: "00ffee"
            }}> <Typewriter
            options={{loop: true}}
            onInit={(typewriter)=>{
                typewriter.typeString("A dreamer").pauseFor(1000).deleteAll().typeString("A developer").pauseFor(1000).deleteAll().typeString("Entrepreneurship Enthusiast").pauseFor(1000).deleteAll().typeString("A batman :P").start();
            }} 
            /></h1>
            <h3 style = {{
                display: "flex",
                fontFamily: "Georgia, serif",
                fontWeight: "bold"
            }}>A tech head, exploring the realms of science and technology Welcome to my portfolio! I like working on simple solutions to complex problems. You will most probably find me sleeping, watching cool physics stuff online, watching american sitcoms or programming.</h3>
        </div>
        <div style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"

        }}>
            <img src={divyPhoto} alt="" style={{
                width: 300,
                height:"auto",
                borderRadius: "50%",
                boxShadow: " rgba(0, 0, 0, 0.5)",
                transition: "box-shadow 0.3 ease"
            }}/>
        </div>
    </>

    )
}

export default Home;