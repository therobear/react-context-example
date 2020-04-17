import React, {Component} from 'react';
import {AppContext} from './';

class AppProvider extends Component {
    constructor(props) {
        super(props);

        // Specifying the functions that will be used to make changes to the state
        this.updateUserName = (name) => {
            let tmp = this.state.user;
            
            tmp.name = name;

            this.setState({user: tmp});
        }

        // Defining the default values for the state.
        this.state = {
            user: {
                name: "Dude"
            },
            updateUserName: this.updateUserName
        }
    }
    render() {
        return (
            // Setting the value of the provider to use the state created in the constructor
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;