import React, {Component} from 'react';
import Items from './Items'

class ItemsTest extends Component {

    state = {
        items: [
            { id: 1, name: 'Mohammed', age: 21 },
            { id: 2, name: 'Ali', age: 25},
            { id: 3, name: 'Rida', age: 17 }
        ]
    }

    render() {
        return(
            <div>
                <Items items={this.state.items} />
            </div>
        )
    }

}

export default ItemsTest