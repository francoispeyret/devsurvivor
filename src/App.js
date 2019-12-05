import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.css";
import Container from "./components/Container.js";
import Menu from './components/Menu.js';

function App() {
    return (
        <Router>
            <div className="App">
                <Menu />
                <Container />
            </div>
        </Router>
    );
}

export default App;
