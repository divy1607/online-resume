import fbPic from "../assets/facebook.png"
import gitPic from "../assets/github-mark.png"
import linkedPic from "../assets/icons8-linkedin-50.png"
import { Badge } from "@mui/material"

function Footer() {
    return <div style={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
        bottom: "0",
    }}>
        <div style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <Facebook />
                </Badge>
            </div>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <Git />
                </Badge>
            </div>
            <Badge color="secondary">
                <LinkedIn />
            </Badge>
        </div>


    </div>
}

function Facebook() {
    return <a href="https://www.facebook.com/profile.php?id=100018304062168"><img src={fbPic} alt="instagram" style={{
        width: '30px', height: 'auto'
    }} /></a>
}

function Git() {
    return <a href="https://github.com/divy1607"><img src={gitPic} alt="instagram" style={{
        width: '30px', height: 'auto'
    }} /></a>
}

function LinkedIn() {
    return <a href="https://www.linkedin.com/in/divyansh-tripathi-7a1141242/"><img src={linkedPic} alt="instagram" style={{
        width: '30px', height: 'auto'
    }} /></a>
}
export default Footer