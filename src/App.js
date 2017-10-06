import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { StyleRoot } from 'radium';
import Charts from './components/Charts'

class App extends Component {
    render() {
        return (
            <StyleRoot>
                <div style={{height: '100vh', width: 'auto'}}>
                    <Charts/>
                </div>
            </StyleRoot>
        );
    }
}

export default App;
