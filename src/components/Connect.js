import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        firstName: Yup.string()
            .min(2, "C'mon, your name is longer than that")
            .required('First name is required.'),
        lastName: Yup.string()
            .min(2, "C'mon, your name is longer than that")
            .required('Last name is required.'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required!'),
    }),

    mapPropsToValues: ({ user }) => ({
        ...user,
    }),
    handleSubmit: (payload, { setSubmitting }) => {
        alert(payload.email);
        setSubmitting(false);
    },
    displayName: 'MyForm',
});

const InputFeedback = ({ error }) =>
    error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
    return (
        <label className="label" {...props}>
            {children}
        </label>
    );
};

const TextInput = ({ type, id, label, error, value, onChange, className, ...props }) => {
    const classes = classnames(
        'input-group',
        {
            'animated shake error': !!error,
        },
        className
    );
    return (
        <div className={classes}>
            <Label htmlFor={id} error={error}>
                {label}
            </Label>
            <input
                id={id}
                className="text-input"
                type={type}
                value={value}
                onChange={onChange}
                {...props}
            />
            <InputFeedback error={error} />
        </div>
    );
};
const MyForm = props => {
    const {
        values,
        touched,
        errors,
        dirty,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting,
    } = props;
    return (
        <div className='connect row mainRow'>
        <form className='contactForm' onSubmit={handleSubmit}>
            <TextInput
                id="firstName"
                type="text"
                label="First Name"
                placeholder="John"
                error={touched.firstName && errors.firstName}
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <TextInput
                id="lastName"
                type="text"
                label="Last Name"
                placeholder="Doe"
                error={touched.lastName && errors.lastName}
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <TextInput
                id="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                error={touched.email && errors.email}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <TextInput
                id="message"
                type="textarea"
                label="Message"
                placeholder="Type your message here..."
                error={touched.message && errors.message}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
            >
                Reset
      </button>
            <button type="submit" disabled={isSubmitting}>
                Submit
      </button>
        </form>
        </div>
    );
};

const ContactForm = formikEnhancer(MyForm);

export default ContactForm;