import React, {Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
            <h1>Welcome!</h1>
            Here you can see surveys
        </div>
        );
    }
}

function mapStateToProps({auth}){
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);