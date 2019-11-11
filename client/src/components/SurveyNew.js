import React, {Component} from 'react';
import {connect} from 'react-redux';

class SurveyNew extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
            <h1>Welcome!</h1>
            Here you can create survey
        </div>
        );
    }
}

function mapStateToProps({auth}){
    return { auth };
}

export default connect(mapStateToProps)(SurveyNew);