import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { PageJuan, PageToo } from './components';
import {Button} from 'react-bootstrap';
import {AppProvider} from './context/';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // AppProvider will provide anything within the AppProvider tags access to the state located in AppContext
            <AppProvider>
                {/* Setting up the router */}
                <BrowserRouter basename="">
                    <div>
                        React Context Example!!!
                    </div>
                    {/* Link is used by react-router-dom to know which compontent to load which is specified in the to prop */}
                    <Link to="/">
                        <Button>Juan!!!</Button>
                    </Link>
                    <Link to="/too">
                        <Button>Too!!!</Button>
                    </Link>
                    {/* Switch works exactly like a switch would in any programming langaue. */}
                    <Switch>
                        {/* Specifying the routes and specifying which components to load with the respective routes */}
                        <Route exact path="/" component={PageJuan} />
                        <Route exact path="/too" component={PageToo}  />
                    </Switch>
                </BrowserRouter>
            </AppProvider>
        );
    }
}

export default App;