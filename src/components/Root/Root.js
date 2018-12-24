import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import App from "../App/App"
import studyProgramsApp from "../studyProgramsApp/studyProgramsApp";


class Root extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
            <Router>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li><Link to={"/students"}>Students</Link></li>
                                <li><Link to={"/studyprograms"} className={"active"}>Study Program</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Route path="/students" component={App}/>
                <Route path="/studyprograms" component={studyProgramsApp}/>
            </Router>
        );
    }
}

export default Root;
