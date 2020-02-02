import React, {Component} from 'react';
import {connect} from 'react-redux';
import Blank from './Blank';

class Dashboard extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <Blank/>              
            </div>
        );
    }
}

function mapStateToProps({auth}){
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);