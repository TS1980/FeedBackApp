import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class PaymentForm extends Component {
    render() {
        return(
            <StripeCheckout
                name="Payment"
                description="Buy credits to create a survey"
                amount = {500}
                //callback func after auth stripe API
                token = {token => this.props.tokenHandler(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn blue darken-4" color="white">
                    Add credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(PaymentForm);