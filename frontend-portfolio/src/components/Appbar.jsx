import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";

function Appbar() {
    const navigate = useNavigate();

    return <div style={{
        backgroundColor: "#F9E79F",
       
        padding: 4,
        zIndex: 1
    }}>
        <Grid container>
        <Grid item lg={4} md={12} sm={12}>
                
                    <div style={{ marginLeft: 10 }} >
                        <Typography variant={"h6"}>DIVY</Typography>

                    </div>
                
            </Grid>

            <Grid item lg={6} md={12} sm={12}>
            <div>
                <h1>
                    THE WAY I AM
                </h1>
            </div>
            </Grid>

            <Grid item lg={2} md={12} sm={12}>
            <div style={{ 
         display: "flex",
         justifyContent: "space-between", }}>
                <div style={{ justifyContent: "right", marginRight: 10, display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                        <Button
                            onClick={() => {
                                navigate("/home")
                            }}
                        >Home</Button>
                    </div>

                    <div style={{ marginRight: 10 }}>
                        <Button
                            onClick={() => {
                                navigate("/about")
                            }}
                        >About</Button>
                    </div>

                    <Button
                        onClick={() => {
                            navigate("/contact")
                        }}
                        variant={"contained"}

                    >Contact</Button>
                </div>
            </div>
            </Grid>
        </Grid>
    </div>
}

export default Appbar;