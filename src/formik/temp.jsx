import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CheckoutForm = () => (
    <div className="col-lg-6">
        <div className="billing checkout_section">
            <div className="section_title">Billing Address</div>
            <div className="section_subtitle">Enter your address info</div>
            <div className="checkout_form_container">
                <Formik
                    initialValues={
                        { 
                            checkout_name: '', 
                            checkout_last_name: '',
                            checkout_company: '',
                            checkout_country: '',
                            checkout_address: '',
                            checkout_address_2: '',
                            checkout_zipcode: '',
                            checkout_city: '',
                            checkout_state: '',
                            checkout_phone: '',
                            checkout_email: '',
                            checkbox_terms: false,
                            checkbox_account: false,
                            checkbox_newsletter: false
                        }
                    }
                    // Validating
                    validate={values => {
                        let errors = {};                        

                        // First name
                        if (!values.checkout_name) {
                            errors.checkout_name = 'Required';
                        } 

                        // Last Name
                        if (!values.checkout_last_name) {
                            errors.checkout_last_name = 'Required';
                        } 

                        // Country
                        if (!values.checkout_country) {
                            errors.checkout_country = 'Required';
                        } 

                        // Address 1
                        if (!values.checkout_address) {
                            errors.checkout_address = 'Required';
                        } 

                        // Zipcode
                        if (!values.checkout_zipcode) {
                            errors.checkout_zipcode = 'Required';
                        } 

                        // City
                        if (!values.checkout_city) {
                            errors.checkout_city = 'Required';
                        } 

                        // State
                        if (!values.checkout_state) {
                            errors.checkout_state = 'Required';
                        } 

                        // Phone
                        if (!values.checkout_phone) {
                            errors.checkout_phone = 'Required';
                        } else if (
                            !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.checkout_phone)
                        ) {
                            errors.checkout_phone = 'Invalid phone number';
                        }

                        // email
                        if (!values.checkout_email) {
                            errors.checkout_email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.checkout_email)
                        ) {
                            errors.checkout_email = 'Invalid email address';
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form id="checkout_form" className="checkout_form">
                            <div className="row">
                                <div className="col-xl-6">
                                    {/* <!-- Name --> */}
                                    <label htmlFor="checkout_name">First Name*</label>
                                    <Field  type="text" name="checkout_name" className="checkout_input"  />
                                    <ErrorMessage name="checkout_name" component="div" />
                                </div>
                                <div className="col-xl-6 last_name_col">
                                    {/* <!-- Last Name --> */}
                                    <label htmlFor="checkout_last_name">Last Name*</label>
                                    <Field type="text" name="checkout_last_name" className="checkout_input" />
                                    <ErrorMessage name="checkout_last_name" component="div" />
                                </div>
                            </div>
                            <div>
                                {/* <!-- Company --> */}
                                <label htmlFor="checkout_company">Company</label>
                                <Field type="text" name="checkout_company" className="checkout_input"/>
                                <ErrorMessage name="checkout_company" component="div" />
                            </div>
                            <div>
                                {/* <!-- Country --> */}
                                <label htmlFor="checkout_country">Country*</label>
                                <select name="checkout_country" id="checkout_country" className="dropdown_item_select checkout_input" require="required">
                                    <option></option>
                                    <option>USA</option>
                                    <option>Sweden</option>
                                    <option>UK</option>
                                    <option>Italy</option>
                                </select>
                            </div>
                            <div>
                                {/* <!-- Address --> */}
                                <label htmlFor="checkout_address">Address*</label>
                                <Field type="text" name="checkout_address" className="checkout_input"  />
                                <ErrorMessage name="checkout_address" component="div" />
                                <Field type="text" name="checkout_address_2" className="checkout_input checkout_address_2" />
                                <ErrorMessage name="checkout_address_2" component="div" />
                            </div>
                            <div>
                                {/* <!-- Zipcode --> */}
                                <label htmlFor="checkout_zipcode">Zipcode*</label>
                                <Field type="text" name="checkout_zipcode" className="checkout_input" />
                                <ErrorMessage name="checkout_zipcode" component="div" />
                            </div>
                            <div>
                                {/* <!-- City / Town --> */}
                                <label htmlFor="checkout_city">City/Town*</label>
                                <select name="checkout_city" id="checkout_city" className="dropdown_item_select checkout_input" require="required">
                                    <option></option>
                                    <option>City</option>
                                    <option>City</option>
                                    <option>City</option>
                                    <option>City</option>
                                </select>
                            </div>
                            <div>
                                {/* <!-- Province --> */}
                                <label htmlFor="checkout_state">State*</label>
                                <select name="checkout_state" id="checkout_state" className="dropdown_item_select checkout_input" require="required">
                                    <option></option>
                                    <option>Province</option>
                                    <option>Province</option>
                                    <option>Province</option>
                                    <option>Province</option>
                                </select>
                            </div>
                            <div>
                                {/* <!-- Phone no --> */}
                                <label htmlFor="checkout_phone">Phone no*</label>
                                <Field type="phone" name="checkout_phone" className="checkout_input" />
                                <ErrorMessage name="checkout_phone" component="div" />
                            </div>
                            <div>
                                {/* <!-- Email --> */}
                                <label htmlFor="checkout_email">Email Address*</label>
                                <Field type="phone" name="checkout_email" className="checkout_input" />
                                <ErrorMessage name="checkout_email" component="div" />
                            </div>
                            {/* <div className="checkout_extra">
                                <div>
                                    <Field type="checkbox" name="checkbox_terms" className="regular_checkbox" />
                                    <ErrorMessage name="checkout_email" component="div" />
                                    <label htmlFor="checkbox_terms"><img src="images/check.png" alt=""/></label>
                                    <span className="checkbox_title">Terms and conditions</span>
                                </div>
                                <div>
                                    <Field type="checkbox" name="checkbox_account" className="regular_checkbox"/>
                                    <label htmlFor="checkbox_account"><img src="images/check.png" alt=""/></label>
                                    <span className="checkbox_title">Create an account</span>
                                </div>
                                <div>
                                    <Field type="checkbox" name="checkbox_newsletter" className="regular_checkbox"/>
                                    <label htmlFor="checkbox_newsletter"><img src="images/check.png" alt=""/></label>
                                    <span className="checkbox_title">Subscribe to our newsletter</span>
                                </div>
                            </div> */}

                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
)

export default CheckoutForm;