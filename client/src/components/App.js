import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './SurveyNew';
import Thanks from './Thanks';

class App extends Component{
    componentDidMount() {
        this.props.fetchUser();
    }   
    render() {
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component = {Landing}/>
                        <Route exact path="/surveys" component = {Dashboard}/>
                        <Route exact path="/surveys/new" component = {SurveyNew}/>
                        <Route exact path="/api/surveys/thanks" component = {Thanks}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);