import React from 'react';
import {axiosWithAuth} from './utils/axiosWithAuth';
import AddFriend from './AddFriend';
import RemoveFriend from './RemoveFriend';
import Loading from '../images/loading-gif.gif'

class FriendsList extends React.Component{
    state = {
        friends: [],
        changed: false,
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            this.setState({friends: res.data, changed: true})
            console.log(this.state)
        })
    }
    
    render() {
        if(!this.componentDidMount || this.state.changed === false){
            return(
               <div>
                <h1>Loading...</h1>
                <img src={Loading} alt='loading'/>  
            </div> 
            ) 
        }
        return (
            <>
            <div className='add-friend'>
                <p>add a friend here</p>
                <AddFriend/>    
            </div>
            <div className='friend-list'>
                <h2>here's all your friends</h2>
                {this.state.friends.map(friend => {
                    return(
                    <div className='friend-box'>
                        <h1>{friend.name}</h1>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                        <RemoveFriend friend={friend}/>
                    </div>
                    ) 
                })}
            </div>   
                
            </>
        )
    }
}

export default FriendsList;