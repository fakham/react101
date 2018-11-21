import React, {Component} from 'react';
import Stateless from './Stateless'

class Stateful extends Component {

    // this is a stateful component because it has a state object and it's defined using a class based

    state = {
        name: 'Mohammed'
    }

    render() {
        return (
            <div>
                <Stateless test={this.state.name} />
            </div>
        )
    }

}

export default Stateful