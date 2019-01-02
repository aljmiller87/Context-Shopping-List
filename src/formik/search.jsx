import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            url: ''
        }
    }
  
    render() {
        if (this.state.redirect === true) {
            return <Redirect to={this.state.url}/>
        }
        return (
            <div className="search_panel trans_300">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="search_panel_content d-flex flex-row align-items-center justify-content-end">
                                <Formik
                                    initialValues={{ searchTerm: ''}}
                                    validate={values => {
                                        let errors = {};
                                        if (!values.searchTerm) {
                                        errors.searchTerm = 'Please enter name';
                                        } 
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        let filteredProductResults = this.props.search(values.searchTerm);
                                        if (filteredProductResults.length > 0) {
                                            let name  = filteredProductResults[0].name;
                                            this.setState({
                                                redirect: true,
                                                url: `/products/${filteredProductResults[0].name}`
                                            });
                                        }                                                                         
                                        
                                    }}
                                    >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <Field type="text" name="searchTerm" className="search_input" placeholder="Search"/>
                                            <ErrorMessage name="searchTerm" component="div" />
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
