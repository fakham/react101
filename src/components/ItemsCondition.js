import React, {Component} from 'react';

class ItemsCondition extends Component {

    render() {

        // const {id, name, age} = this.props; // get props and assign them to variables, names must match!
        // added key attribute to div to give each item a unique key and prevent the displayed error in console
        const {items} = this.props;
        const theItems = items.map( item => {
            return item.age > 20 ? (
                <div key={item.id}>
                    {item.id} | {item.name} | {item.age}
                </div>
            ) : null
        } )

        return (
            <div>
                {theItems}
            </div>
        )
    }

}

export default ItemsCondition