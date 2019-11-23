import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class PaymentForm extends Component {
    render() {
        return(
            <StripeCheckout
                amount = {500}
                //callback func after auth stripe API
                token = {token => console.log(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            />
        );
    }
}

export default PaymentForm;