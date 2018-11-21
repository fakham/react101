import React, {Component} from 'react';
import Items from './Items'

class LifeCycle extends Component {

    state = {
        items: [
            { id: 1, name: 'Mohammed', age: 21 },
            { id: 2, name: 'Ali', age: 25},
            { id: 3, name: 'Rida', age: 17 }
        ]
    }

    /*
        constructor() : run one time when the component instantiated
        render() : run everytime the component needs to be displayed or updated
        componentDidMount() : run one time when the component fully loaded
        componentDidUpdate(prevProps, prevState) : run everytime the component needs an update, prevProps contains previous props 
                                                   and prevState contains previous state 
    */

    constructor() {
        super(); // must call super() in React component!!
        console.log("constructor")
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", prevProps, prevState);
    }

    handleAdd = e => {

        let items = this.state.items;
        const rand = Math.round(Math.random() * 100);
        items.push({id: rand, name: 'Badr', age: 20});

        this.setState({
            items: items
        })
    }

    handleDelete = e => {

        this.setState({
            items: [{ id: 1, name: 'Mohammed', age: 21 }]
        })

    }

    render() {
        console.log("render");
        return(
            <div>
                <Items items={this.state.items} />
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }

}

export default LifeCycle