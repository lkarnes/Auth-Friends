import React from 'react';
import {axiosWithAuth} from './utils/axiosWithAuth';
import AddFriend from './AddFriend';

class FriendsList extends React.Component{
    state = {
        friends: []
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            this.setState({friends: res.data})
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
                <p>add a friend here</p>
                <AddFriend/>
                <p>here's all your friends</p>
                {this.state.friends.map(friend => {
                    return (
                        <>
                            <h1>{friend.name}</h1>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </>
                        
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;