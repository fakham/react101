import React, {Component} from 'react';
import Test2, {Test as num1, x as num2} from './export_vs_default';

class Child extends Component {

    // Arrow Function
    Add = (a, b) => {
        return a + b
    }

    render() {
        return(
            <div>
                Child Component {Test2() + this.Add(num1(), num2)}
            </div>
        )
    }

}

export default Child