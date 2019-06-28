import React, { useEffect } from "react";
import "./style/index.css"
import history from "./history"
import { Router, Route, Switch } from "react-router-dom"
import MainContainer from "./components/pages/MainContainer";
import AppContainer from "./components/pages/AppContainer";

const App = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--primary-background', "#d9e3eb");
    });

    return (
        <Router history={history}>
            <Switch>
                <Route path="/app" exact component={AppContainer} />
                <Route path="/" exact component={MainContainer} />
            </Switch>
        </Router>
    );
};

export default App;