import React, {Component} from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom'; 
import {reduxForm, Field} from 'redux-form';
import validateEmails from '../../units/validateEmails';
import SurveyField from './SurveyField';

const FIELDS = [
    {label: "Title", name: "title"},
    {label: "Line", name: "line"},
    {label: "Email Body", name: "body"},
    {label: "Receiver List", name: "emails"}
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return <Field key={name} 
            component = {SurveyField}
            type = "text" label={label}
            name={name}
            />
        });
    }
     
    render() {
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="btn-flat blue lighten-4">
                        Cancel
                    </Link>
                    <button type="submit" className="blue darken-4 btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    _.each(FIELDS, ({ name }) => {
        if(!values[name]) {
            errors[name] = 'You must provide a value!'
        }
    });

    errors.emails = validateEmails(values.emails || '');
    return errors;
}

export default reduxForm({
    validate, 
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);