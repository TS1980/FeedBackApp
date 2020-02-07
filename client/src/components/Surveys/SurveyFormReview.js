import React from 'react';
import {connect} from 'react-redux';

const SurveyReview = ({onCancel}) => {
    return (
        <div>
            <h5>Please confirm your entries</h5>
            <button className="btn-flat blue lighten-4"
                onClick={onCancel}
            >Back</button>
        </div>
    );
};

function mapStateToProps(state) {
    return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps)(SurveyReview);