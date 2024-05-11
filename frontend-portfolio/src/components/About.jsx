import { Card, CardMedia } from "@mui/material";
import testVid from "../assets/divy.mp4";
import { useState } from "react";

function About() {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = (e) => {
        setIsHovered(true);
    };

    const handleMouseLeave = (e) => {
        setIsHovered(false);
    };

    return <div style={{
        justifyContent: "center",
        alignItems: "baseline",
        flexDirection: "row",
        alignContent: "center",
    }}>
       
            <h1 style={{ 
                fontSize: "4em",
                textAlign: "center"
                }}>
                My Projects
            </h1>

        <div style={{
            display: "flex"
        }}>
            <div style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                alignContent: "center",
                marginRight: "163px"
            }}>
                <Card style={{
                    width: 500, height: 300, marginBottom: 20, justifyContent: "center"
                }}>
                    <h1>Todo Application</h1>
                </Card>
                <Card style={{
                    width: 500, height: 300, marginBottom: 40
                }}>
                    <h1>E Commerce Dashboard</h1>
                </Card>
            </div>
            <div style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                alignContent: "center",
                marginLeft: "163px"
            }}>
                <Card 
                style={{
                    width: 500, height: 300, marginBottom: 20, backgroundImage: "linear-gradient(to bottom right,rgba(255, 32, 255, 0.5), rgba(255, 32, 255, 0.5))"
                }}>
                    <h1>Course Selling Application</h1>
                </Card>
                <Card
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave} 
                style={{
                    width: 500, height: 300, marginBottom: 40
                }}>
                    <h1>Calculator App</h1>
                    <CardMedia
                        component="video"
                        autoPlay={isHovered}
                        loop
                        muted
                        src={testVid}
                        controls={isHovered}
                        style={{ display: isHovered ? 'block' : 'none' }}
                    />
                </Card>
            </div>
        </div>
    </div>
}

export default About