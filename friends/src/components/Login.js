import React from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.credentials)
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res=>{
            localStorage.setItem('token', res.data.payload)
            this.props.history.push('/friendslist')
        })
        .catch(err=>{console.log(err)})
        this.setState({
            credentials: {
                username: '',
                password: ''
            }
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='username' value={this.state.credentials.username} onChange={this.handleChange}/>
                    <input type='text' name='password' value={this.state.credentials.password} onChange={this.handleChange}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;