import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class PaymentForm extends Component {
    render() {
        return(
            <StripeCheckout
                name="Payment"
                description="Buy credits to create a survey"
                amount = {500}
                //callback func after auth stripe API
                token = {token => console.log(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn blue darken-4" color="white">
                    Add credits
                </button>
            </StripeCheckout>
        );
    }
}

export default PaymentForm;