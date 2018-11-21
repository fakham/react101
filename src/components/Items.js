import React, {Component} from 'react';
import './Items.css';

class Items extends Component {

    render() {

        // const {id, name, age} = this.props; // get props and assign them to variables, names must match!
        // added key attribute to div to give each item a unique key and prevent the displayed error in console
        const {items} = this.props;
        const theItems = items.map( item => {
            return (
                <div key={item.id} className="Item">
                    {item.id} | {item.name} | {item.age}
                </div>
            )
        } )

        return (
            <div>
                {theItems}
            </div>
        )
    }

}

export default Items