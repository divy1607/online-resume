import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import { Input } from '@mui/material';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0eydyth', 'template_lnd2aoq', form.current, {
                publicKey: 'wtRwDST0ZepAbm-GZ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
        alert("thank you for contacting me!");
    };
    return (
        <Card varint={"outlined"} style={{ width: 400, padding: 20, marginTop: 30, height: "100%", marginRight: 30 }}>
            <h2>Contact me here, I will reply for sure</h2>
            <Typography> <p>Fill out the form:</p></Typography>
            <form ref={form} onSubmit={sendEmail}>
                <InputLabel>Name</InputLabel>
                <Input type="name" name="name"></Input>
                <br />
                <InputLabel>Email</InputLabel>
                <Input type="email" name="email"></Input>
                <br />
                <InputLabel>Message</InputLabel>
                <TextField id="standard-multiline-flexible" name="message" multiline rows={4} variant="standard" style={{ width: 400, }} />
                <br />
                <br />

                <Typography>How would you rate my website?</Typography>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Rating"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
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
                    type="submit"
                >
                    SUBMIT

                </Button>
            </form>
        </Card>



    );
}

export default ContactForm;