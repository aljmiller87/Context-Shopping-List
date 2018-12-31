import React, { Component } from 'react'

export default class CheckoutForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            form: {}
        }
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
        const form = this.state.form;
        form[e.target.getAttribute('id')] = e.target.value;

        this.setState({
            form
        });
    }

    render() {

        return (

            <div className="col-lg-6">
                <div className="billing checkout_section">
                    <div className="section_title">Billing Address</div>
                    <div className="section_subtitle">Enter your address info</div>
                    <div className="checkout_form_container">
                        <form action="#" id="checkout_form" className="checkout_form">
                            <div className="row">
                                <div className="col-xl-6">
                                    {/* <!-- Name --> */}
                                    <label for="checkout_name">First Name*</label>
                                    <input onChange={(e) => this.inputChange(e)} type="text" id="checkout_name" className="checkout_input" required="required" />
                                </div>
                                <div className="col-xl-6 last_name_col">
                                    {/* <!-- Last Name --> */}
                                    <label for="checkout_last_name">Last Name*</label>
                                    <input onChange={(e) => this.inputChange(e)} type="text" id="checkout_last_name" className="checkout_input" required="required"/>
                                </div>
                            </div>
                            <div>
                                {/* <!-- Company --> */}
                                <label for="checkout_company">Company</label>
                                <input onChange={(e) => this.inputChange(e)} type="text" id="checkout_company" className="checkout_input"/>
                            </div>
                            <div>
                                {/* <!-- Country --> */}
                                <label for="checkout_country">Country*</label>
                                <select onChange={(e) => this.inputChange(e)} name="checkout_country" id="checkout_country" className="dropdown_item_select checkout_input" require="required">
                                    <option></option>
                                    <option>Lithuania</option>
                                    <option>Sweden</option>
                                    <option>UK</option>
                                    <option>Italy</option>
                                </select>
                            </div>
                            <div>
                                {/* <!-- Address --> */}
                                <label for="checkout_address">Address*</label>
                                <input onChange={(e) => this.inputChange(e)} type="text" id="checkout_address" className="checkout_input" required="required" />
                                <input onChange={(e) => this.inputChange(e)} type="text" id="checkout_address_2" className="checkout_input checkout_address_2" required="required" />
                            </div>
                            <div>
                                {/* <!-- Zipcode --> */}
                                <label for="checkout_zipcode">Zipcode*</label>
                                <input onChange={(e) => this.inputChange(e)} type="text" id="checkout_zipcode" className="checkout_input" required="required"/>
                            </div>
                            <div>
                                {/* <!-- City / Town --> */}
                                <label for="checkout_city">City/Town*</label>
                                <select onChange={(e) => this.inputChange(e)} name="checkout_city" id="checkout_city" className="dropdown_item_select checkout_input" require="required">
                                    <option></option>
                                    <option>City</option>
                                    <option>City</option>
                                    <option>City</option>
                                    <option>City</option>
                                </select>
                            </div>
                            <div>
                                {/* <!-- Province --> */}
                                <label for="checkout_province">Province*</label>
                                <select onChange={(e) => this.inputChange(e)} name="checkout_province" id="checkout_province" className="dropdown_item_select checkout_input" require="required">
                                    <option></option>
                                    <option>Province</option>
                                    <option>Province</option>
                                    <option>Province</option>
                                    <option>Province</option>
                                </select>
                            </div>
                            <div>
                                {/* <!-- Phone no --> */}
                                <label for="checkout_phone">Phone no*</label>
                                <input onChange={(e) => this.inputChange(e)} type="phone" id="checkout_phone" className="checkout_input" required="required"/>
                            </div>
                            <div>
                                {/* <!-- Email --> */}
                                <label for="checkout_email">Email Address*</label>
                                <input onChange={(e) => this.inputChange(e)} type="phone" id="checkout_email" className="checkout_input" required="required"/>
                            </div>
                            <div className="checkout_extra">
                                <div>
                                    <input onChange={(e) => this.inputChange(e)} type="checkbox" id="checkbox_terms" name="regular_checkbox" className="regular_checkbox" defaultChecked/>
                                    <label for="checkbox_terms"><img src="images/check.png" alt=""/></label>
                                    <span className="checkbox_title">Terms and conditions</span>
                                </div>
                                <div>
                                    <input onChange={(e) => this.inputChange(e)} type="checkbox" id="checkbox_account" name="regular_checkbox" className="regular_checkbox"/>
                                    <label for="checkbox_account"><img src="images/check.png" alt=""/></label>
                                    <span className="checkbox_title">Create an account</span>
                                </div>
                                <div>
                                    <input onChange={(e) => this.inputChange(e)} type="checkbox" id="checkbox_newsletter" name="regular_checkbox" className="regular_checkbox"/>
                                    <label for="checkbox_newsletter"><img src="images/check.png" alt=""/></label>
                                    <span className="checkbox_title">Subscribe to our newsletter</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

