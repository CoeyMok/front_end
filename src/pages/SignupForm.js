import React from 'react';
import validate from './validation';
import useForm from './useForm';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 15
    },
    input: {
        fontSize: 22,
        marginTop: 10,
        width: '100%'
    },
    label: {
        fontSize: 16,
        margin: 5
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
}))

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );
    const classes = useStyles();
    const navigate = useNavigate();

    const login = () => {
        navigate("/login");
    }

    return (
        <div className={classes.formContainer}>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Sign Up New Account
                </h1>
                <div className={classes.inputContainer}>
                    <label className={classes.label}>Username</label>
                    <input
                        className={classes.input}
                        type='text'
                        name='username'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className={classes.inputContainer}>
                    <label className={classes.label}>Email</label>
                    <input
                        className={classes.input}
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className={classes.inputContainer}>
                    <label className={classes.label}>Password</label>
                    <input
                        className={classes.input}
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className={classes.inputContainer}>
                    <label className={classes.label}>Confirm Password</label>
                    <input
                        className={classes.input}
                        type='password'
                        name='password2'
                        placeholder='Confirm your password'
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSubmit}
                >
                    Sign Up
                </Button>
                <Grid container>
                    <Grid item>
                        Already have an account? Login <a href='#' onClick={() => { navigate("/login") }}>here</a>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default FormSignup;