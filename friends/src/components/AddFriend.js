import React from 'react';
import {axiosWithAuth} from './utils/axiosWithAuth';

class AddFriend extends React.Component {
    state = {
        id: 0,
        name: '',
        age: null,
        email: ''
    }

    handleChange = e => {
        console.log(this.state)
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
            id: Date.now()
        })
    }

    handleSubmit = e => {
        console.log(this.state)
        axiosWithAuth()
        .post('/api/friends', this.state)
        .then(res=>{
            console.log('data is saved')
        })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                <input type='number' name='age' value={this.state.age} onChange={this.handleChange}/>
                <input type='email' name='email' value={this.state.email} onChange={this.handleChange}/>
                <button type='submit'>Sumbitch</button>
            </form>
        )
    }
}

export default AddFriend;