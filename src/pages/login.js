import { React, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import CheckboxWithLabel from './CheckboxWithLabel';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function Login() {
    const navigate = useNavigate();
    const classes = useStyles();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async () => {
        axios.post('http://localhost:3001/users/login', {
            username,
            password
        })
            .then(function (response) {
                if (response.status === 200) {
                    localStorage.setItem('isLogined', 'Y');
                    localStorage.setItem('username', response.data.username);
                    localStorage.setItem('password', response.data.password);
                    localStorage.setItem('token', response.data.token);
                    navigate("/");
                }
            })
            .catch(function (error) {
                if (error.response.data !== undefined)
                    alert(error.response.data);
                else
                    alert(error.message)
            });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Please Sign In
                </Typography>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Username"
                    label="Username"
                    name="Username"
                    autoComplete="Username"
                    autoFocus
                    onChange={e => setUserName(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    // autoComplete="current-password"
                    onChange={e => setPassword(e.target.value)}
                />
                <FormControlLabel
                    control={<CheckboxWithLabel value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSubmit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2" onClick={() => { navigate("/signup") }}>
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}
export default Login;

