import React, {Component} from 'react';

class Form2 extends Component {

    state = {
        name: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.name)
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                        <option value="value1">value 1</option>
                        <option value="value2">value 2</option>
                        <option value="value3">value 3</option>
                    </select>
                    <input type="submit" value="send" />
                </form>
                {this.state.name}
            </div>
        )
    }

}

export default Form2