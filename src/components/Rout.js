import React from 'react';

const Rout = (props) => {

    const test = props.match.params.test_params;

    return (
        <div>
            <h1>Rout</h1>
            <p>{test}</p>
        </div>
    )

}

export default Rout;