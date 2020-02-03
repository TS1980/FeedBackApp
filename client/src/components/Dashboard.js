import React, {Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>

            </div>
        );
    }
}

function mapStateToProps({auth}){
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);