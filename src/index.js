import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Containers/Navbar/index.jsx';
import Main from './Containers/Main/index.jsx';
import Footer from './Containers/Footer/index.jsx';
import './index.css';


ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('footer'));