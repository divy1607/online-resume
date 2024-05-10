import { Card } from "@mui/material";

function About() {

    return <div style={{
        justifyContent: "center",
        alignItems: "baseline",
        flexDirection: "row",
        alignContent: "center",
    }}>
        <div style={{ alignContent: "center", marginLeft: "250px" }}>
            <h1 style={{ fontSize: "4em" }}>
                My Projects
            </h1>
        </div>

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
                    width: 300, height: 300
                }}>hi</Card>
                <Card style={{
                    width: 300, height: 300
                }}>hi</Card>
                <Card style={{
                    width: 300, height: 300
                }}>hi</Card>
            </div>
            <div style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                alignContent: "center",
                marginLeft: "163px"
            }}>
                <Card style={{
                    width: 300, height: 300
                }}>hi</Card>
                <Card style={{
                    width: 300, height: 300
                }}>hi</Card>
                <Card style={{
                    width: 300, height: 300
                }}>hi</Card>
            </div>
        </div>
    </div>
}

export default About