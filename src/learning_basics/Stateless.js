import React from 'react';

// this is a stateless component because it's defined using a function instead of class has a state object
// it's used just to display data using props passed as a parameter from parent component

const Stateless = (props) => {
    return (
        <div>{props.test}</div>
    )
}

export default Stateless