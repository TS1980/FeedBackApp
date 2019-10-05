import React, {Component} from 'react';
import { connect } from 'net';

class header extends Component{
    render() {
        console.log(this.props);
        return(
            <nav>
                <div className="nav-wrapper blue darken-4">
                    <a className="left brand-logo">
                        FeedBackApp
                    </a>
                    <ul className="right">    
                        <li>
                            <a>Login With Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return { 
        auth
    };
}

export default connect(null, mapStateToProps)(header);