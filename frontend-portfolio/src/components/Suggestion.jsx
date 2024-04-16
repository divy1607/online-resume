import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Typography } from "@mui/material";

function Suggestion() {
    return <div style={{
        display: "flex",
        justifyContent: "center"
    }}>
        <Card varint={"outlined"} style={{ width: 400, padding: 20, marginTop: 30, height: "100%" }}>
            <TextField id="standard-basic" label="Any suggestions, about my website, or me in general ;)" variant="standard" style={{ width: 400, height: "100px" }} />

            <Typography>How would you rate my website?</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Rating"
                >
                    <MenuItem value={0}>1</MenuItem>
                    <MenuItem value={1}>2</MenuItem>
                    <MenuItem value={2}>3</MenuItem>
                    <MenuItem value={3}>4</MenuItem>
                    <MenuItem value={4}>5</MenuItem>
                    <MenuItem value={5}>6</MenuItem>
                    <MenuItem value={6}>7</MenuItem>
                    <MenuItem value={7}>8</MenuItem>
                    <MenuItem value={8}>9</MenuItem>
                    <MenuItem value={9}>10</MenuItem>
                </Select>
            </FormControl>
            <br />
            <br />
            <br />

            <Button
                variant={"contained"}
                onClick={() => {
                    alert("thanks for feedback")
                }}>
                    SUBMIT
                
            </Button>


        </Card>
    </div>
}

export default Suggestion