import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {label: 'On'}
    }
    labeltext = () => {
        if(this.state.label == 'On') {
            this.setState({label: 'Off'})
        } else {
            this.setState({label: 'On'})
        }
    }
    

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Welcome name="Galloa" />
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="onoff-button" onClick={this.labeltext}><font className="button-label">{this.state.label}</font></button>
      </div>
    );
  }
}

export default App;
