import React from 'react';
import {axiosWithAuth} from './utils/axiosWithAuth';

const RemoveFriend = ({friend}) => {

    const handleRemove = e => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/api/friends/${friend.id}`)
        .then(res=> {
            console.log(res)
        })
        document.location.reload();
    }

    return (
        <button onClick={handleRemove}>Remove</button>
    )
}

export default RemoveFriend;