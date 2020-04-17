import React, {Component} from 'react';
import {Button, FormControl, InputGroup} from 'react-bootstrap';
import {AppContext} from "../../context";

class PageTree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        e.preventDefault();

        this.setState({name: e.target.value});
    }
    
    render() {
        return (
            <div>
                {this.context.user.name} this is Page Tree!!!
                <div>
                    Change Your Name?
                </div>
                    <InputGroup className="col-lg-3">
                        <FormControl 
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                        <Button onClick={() => this.context.updateUserName(this.state.name)}>Change It</Button>
                    </InputGroup>
                <div>
                    
                </div>
            </div>
        );
    }
}

PageTree.contextType = AppContext;

export default PageTree;