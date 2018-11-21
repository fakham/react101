import React, {Component} from 'react';

class From1 extends Component {

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
                Form Part 1
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                {this.state.name}
            </div>
        )
    }

}

export default From1