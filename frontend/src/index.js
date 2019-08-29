import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import View from './pages/view';
import Submit from './pages/submit';
import Header from './components/header';

const routing = (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact={true} path='/' component={Submit}/>
                    <Route exact={true} path='/view/' component={View}/>
                </div>
            </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'))