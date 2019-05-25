import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import ResourceList from './ResourceList';
import UserList from './UserList';


const App = () => {

        const [resource, setRescource] = useState('posts');
        
        return (
            <div className="ui container">
                <UserList />
                <div>
                    <button onClick={() => setRescource('posts')}>Posts</button>
                    <button onClick={() => setRescource('todos')}>Todos</button>
                </div>   
                <ResourceList resource={resource} />
            </div>
        );    
}

export default App;