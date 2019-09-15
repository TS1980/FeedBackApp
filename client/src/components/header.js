import React, {Component} from 'react';

class header extends Component{
    render() {
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

export default header;