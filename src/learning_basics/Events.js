import React, {Component} from 'react';

class Events extends Component {

    // declaring state
    state = {
        name: 'Events'
    }

    // old function : must add bind on onClick to know "this" (the current element)
    handleClick() {
        console.log('Clicked ' + this.state.name)
    }

    // arrow function : no need to add bind, it can auto bind the current element
    handleMove = () => {
        console.log('Moved ' + this.state.name)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Click</button>
                <button onMouseMove={this.handleMove}>Mouse Move</button>
            </div>
        )
    }

}

export default Events