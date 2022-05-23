import {React, useState} from 'react';
import { Button, Paper } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Add() {
    
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [breeds, setBreeds] = useState('');
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        navigate("/");
    };

    const submit = () => {
        axios.post('http://localhost:3001/dogs/', {
                name,
                age,
                breeds,
                weight,
                height
            }, {
                headers: {
                  'token': localStorage.getItem('token')
                }
              })
            .then(res=>{
                if(res.status === 200){
                    setOpen(true);
                }
            })
            .catch(err => alert(err.response.data))
    }

    return (
        <form>
            <h2>create dog listing</h2>
            <TextField
                required
                label="name"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                onChange={e => setName(e.target.value)}
            />
            <TextField
                required
                label="age"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                defaultValue={0}
                onChange={e => setAge(e.target.value)}
            />
            <TextField
                required
                label="breeds"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                onChange={e => setBreeds(e.target.value)}
            />
            <TextField
                required
                label="weight"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    endAdornment: <InputAdornment position="start">kg</InputAdornment>,
                }}
                defaultValue={0}
                onChange={e => setWeight(e.target.value)}
            />
            <TextField
                required
                label="height"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    endAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}
                defaultValue={0}
                onChange={e => setHeight(e.target.value)}
            />
            <Button onClick={submit}> submit </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    create success!!
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    OK
                </Button>
                </DialogActions>
            </Dialog>
        </form>
    )
}

export default Add;