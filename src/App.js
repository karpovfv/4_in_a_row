import React from 'react';
import Game from './Game/Game';
import './Game/Game.css';
import Hello from "./Hello/Hello";
import GameOver from "./GameOver/GameOver";
import NotFound from "./404";

import {HashRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Hello}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/game_over" component={GameOver}/>
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
