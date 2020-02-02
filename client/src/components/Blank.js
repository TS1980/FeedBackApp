import React, {Component} from 'react';

class Blank extends Component {
    render() {
        return(
            <div className="row card  blue">
                <div className="card-content white-text" style={{textAlign: "left"}}>
                    <h2>Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut orci metus. Phasellus non nulla efficitur, hendrerit turpis sed, vestibulum diam. Duis ac erat euismod, auctor dolor luctus, vestibulum est. Aliquam sodales eros in ipsum ultricies vehicula sit amet bibendum purus. Donec sit amet pretium justo. Donec tincidunt massa quis libero laoreet fringilla. Aliquam pharetra odio consectetur nisi egestas, ut posuere tellus euismod. Quisque rutrum vehicula blandit. Nulla pulvinar massa a pulvinar malesuada. </p>
                    <nav className="nav-wrapper blue darken-3">
                        <button style={{margin: 15}} className="waves-effect green darken-2 btn">Like</button>
                        <button className="waves-effect deep-orange btn">Dislike</button>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Blank;