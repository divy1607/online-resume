import { Card, CardMedia } from "@mui/material";
import testVid from "../assets/divy.mp4";
import { useState } from "react";
import reactPic from "../assets/react.png";
import recoilPic from "../assets/recoil.png";
import nodePic from "../assets/nodejs.png";
import nextPic from "../assets/next.png";
import expressPic from "../assets/express.png";
import mongoPic from "../assets/mongo.png";
import { Badge } from "@mui/material"

function Projects() {
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
                    <h1 style={{
                        textAlign: "center"
                    }}>Todo Application</h1>
                </Card>
                <Card style={{
                    width: 500, height: 300, marginBottom: 40
                }}>
                    <h1 style={{
                        textAlign: "center"
                    }}>E Commerce Dashboard</h1>
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
                    <h1 style={{
                        textAlign: "center"
                    }}>Course Selling Application</h1>
                </Card>
                <Card
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        width: 500, height: 300, marginBottom: 40
                    }}>
                    <h1 style={{
                        textAlign: "center"
                    }}>Calculator App</h1>
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
        <h1 style={{
            textAlign: "center"
        }}>Tech Stack</h1>
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <Mongo />
                </Badge>
            </div>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <Express />
                </Badge>
            </div>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <React />
                </Badge>
            </div>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <Node />
                </Badge>
            </div>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <Next />
                </Badge>
            </div>
            <div>
                <Badge color="secondary">
                    <Recoil />
                </Badge>
            </div>
        </div>
    </div>
}

function Mongo() {
    return <img src={mongoPic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

function Express() {
    return <img src={expressPic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

function React() {
    return <img src={reactPic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

function Node() {
    return <img src={nodePic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

function Next() {
    return <img src={nextPic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

function Recoil() {
    return <img src={recoilPic} alt="instagram" style={{
        width: '50px', height: 'auto'
    }} />
}

export default Projects