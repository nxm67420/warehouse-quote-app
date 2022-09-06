//Component Class, Displays Single Page

import './App.css';
import React, {Component} from "react";
import ListStudentComponent from './components/ListStudentComponent';

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
                <ListStudentComponent />
                    <h3 className="App-title">{this.state.message}</h3>
            </div>
        );
    }
}

export default App;
