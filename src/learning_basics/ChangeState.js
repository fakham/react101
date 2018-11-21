import React, {Component} from 'react';

class ChangeState extends Component {

    state = {
        name: 'Ahmed',
        age: 26
    }

    change = () => {
        this.setState({
            name: 'Mohammed',
            age: 21
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.change}>Change</button>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
            </div>
        )
    }

}

export default ChangeState