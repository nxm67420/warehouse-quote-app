//Component Class, Displays Single Page

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Component} from "react";
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

class App extends Component {

    state = {};

    componentDidMount() {
        this.home()
    }

    home = () => {
        fetch("/api/home")
            .then(response => response.text())
            .then(message => {
                this.setState({message});
            });
    };

    render() {
        return (
            <div className="App">
                <h3 className="App-title">{this.state.message}</h3>
                <Router>
                    <HeaderComponent/>
                        <div className="container">
                            <switch>
                                <Route exact path="/" component={ListStudentComponent}></Route>
                                <Route path="/students" component={ListStudentComponent}></Route>
                            </switch>
                        </div>
                    <FooterComponent/>
                </Router>
            </div>
        );
    }
}

export default App;
