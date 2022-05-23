import React, { useState } from 'react';
import Signup from './SignupForm';
import FormSuccess from './FormSuccess';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    formContainter: {
        display: 'flex',
        flexDirection: 'row',
        padding: '15px 10px',
        columnGap: 15
    }
}))

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const classes = useStyles();

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
            <div className={classes.formContainter}>
                <span className='close-btn'>×</span>
                {!isSubmitted ? (
                    <Signup submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>
        </>
    );
};