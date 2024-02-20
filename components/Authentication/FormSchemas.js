import * as yup from 'yup';

const loginSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .max(20, 'Name cannot be more than 15 characters.')
        .required('Name is required.'),
    password: yup
        .string()
        .trim()
        .max(20, 'Password cannot be more than 15 characters.')
        .required('Password is required.'),
});

const registerSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'Name must be at least 2 characters.')
        .max(15, 'Name cannot be more than 15 characters.')
        .matches(/^[A-Za-z0-9_]+$/, 'Invalid name. Use upper or lower case letters, 0 to 9, or underscore only.')
        .required('Name is required.'),
    password: yup
        .string()
        .trim()
        .min(6, 'Password must be at least 6 characters.')
        .max(15, 'Password cannot be more than 15 characters.')
        .required('Password is required.'),
})

export { loginSchema, registerSchema };