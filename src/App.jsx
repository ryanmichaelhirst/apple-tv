import React from "react";
import "./style/index.css";
import AppPageContainer from "./components/pages/AppPageContainer";
import HomePageContainer from "./components/pages/HomePageContainer";
import history from "./history";
import { Router, Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/app" exact component={AppPageContainer} />
                <Route path="/" exact component={HomePageContainer} />
            </Switch>
        </Router>
    );
};

export default App;