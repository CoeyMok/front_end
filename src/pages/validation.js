export default function validation(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = 'Need to enter Username';
    }

    if (!values.email) {
        errors.email = 'Need to enter Email Address';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Need to enter Password';
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    if (!values.password2) {
        errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
    }
    return errors;
}