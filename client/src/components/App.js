import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './header'
const Dashboard = () => <h2>I</h2>
const SurveyNew = () => <h2>M</h2>
const Landing = () => <h2>A</h2>

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component = {Landing}/>
                    <Route exact path="/surveys" component = {Dashboard}/>
                    <Route exact path="/surveys/new" component = {SurveyNew}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;