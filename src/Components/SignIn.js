import React, { Component } from "react";
import { useFormik } from 'formik'

    const validate = values => {
        const errors= { }

        if (!values.firstName) {
            errors.firstName = 'Bos qoyula bilmez'
        }
        if (!values.lastName) {
            errors.lastName = 'Bos qoyula bilmez'
        }

        if (!values.email) {
            errors.email = 'Bos qoyula bilmez'
        }

        if (!values.password) {
            errors.password = 'Bos qoyula bilmez'
        }
        else if (values.password.length < 8) {
            errors.password = 'Parol 8 simvoldan az ola bilmez'
        }

        if (values.repassword !== values.password) {
            errors.repassword = 'Parol tesdiqlemesi yanlisdir'
        }

        return errors
    }
    export default ()=>{
        const formik = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                repassword: ''
            },
            validate,
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2))
            }
        })

        return (
        <form onSubmit={formik.handleSubmit}>
            <h3>Sign Up</h3>

            <div>
                <label>
                    <span>First Name</span>
                    <input value={formik.values.firstName} onChange={formik.handleChange} type="text" placeholder="First Name" />
                </label>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div>
                <label>
                    <span>Last Name</span>
                    <input value={formik.values.lastName} onChange={formik.handleChange} type="text" placeholder="Last Name" />
                </label>
            </div>
            <div>
                <label>
                    <span>Email</span>
                    <input value={formik.values.email} onChange={formik.handleChange} type="email" placeholder="Email" />
                </label>
            </div>
            <div>
                <label>
                    <span>Password</span>
                    <input value={formik.values.password} onChange={formik.handleChange} type="password" placeholder="Password" />
                </label>
                <label>
                    <span>Password Again</span>
                    <input value={formik.values.repassword} onChange={formik.handleChange} type="password" placeholder="Password Again" />
                </label>
            </div>

            <button>Sign Up</button>
        </form>
    )
}