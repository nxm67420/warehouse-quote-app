import logo from './logo.svg';
import './App.css';
import {Component} from "react";

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
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h3 className="App-title">{this.state.message}</h3>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
