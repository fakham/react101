import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => {
            this.setState({
                users: res.data
            })
        } )
    }

    render() {

        return (
            <div>
                {this.state.users.map( user => {
                    return (
                        <div key={user.id}>name : {user.name} | email : {user.email}</div>
                    )
                } )}
            </div>
        )

    }

}

export default Blog;