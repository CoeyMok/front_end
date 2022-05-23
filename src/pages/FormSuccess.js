import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    successContainer: {
        textAlign: 'center'
    },
    text: {
        color: 'pink',
        fontSize: 22
    },
}))

const FormSuccess = () => {
    const classes = useStyles();
    return (
        <div className={classes.successContainer}>
            <h1 className={classes.text}>Your account will be created as soon as possible</h1>
        </div>
    );
};

export default FormSuccess;