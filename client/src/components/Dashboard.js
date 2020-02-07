import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h1>Dashboard!</h1>
                <div class="fixed-action-btn">
                    <Link to="/surveys/new" class="btn-floating btn-large blue darken-4">
                        <i class="material-icons">create</i>
                    </Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps({auth}){
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);