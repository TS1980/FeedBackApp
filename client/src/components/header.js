import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PaymentForm from './PaymentForm';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return null;
            case false:
                return (
                    <li><a href="/auth/google">Login with Google</a></li>
                );
            default:
                return [
                    <li key="1"><PaymentForm /></li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }
    
    render() {
        console.log(this.props);
        return(
            <nav>
                <div className="nav-wrapper blue darken-4">
                    <Link to={this.props.auth ? '/surveys' : '/'} style={{marginLeft: 10}} className="left brand-logo">
                        FeedBackApp
                    </Link>
                    <ul className="right">    
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}){
    return { auth };
}

export default connect(mapStateToProps)(Header);
