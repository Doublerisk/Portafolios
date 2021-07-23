/**
*	React Native App By Doublerisk
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";

//Pages for this kit
import Index from "./views/index.js";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Switch>
                        <Route path="/index" render={props => <Index {...props} />} />
                        <Redirect to="/index" />
                        <Redirect from="/" to="/index" />
                    </Switch>
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
