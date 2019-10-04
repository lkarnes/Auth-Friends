import React from 'react';
import {Link} from 'react-router-dom'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome To the Friends counter</h1>
                <p>This app is only here to let you show off at parties how many friends you have...</p>
                <p>that is all it does.</p>
                <Link to='/login'>Login</Link>
            </div>
        )
    }
}

export default HomePage;