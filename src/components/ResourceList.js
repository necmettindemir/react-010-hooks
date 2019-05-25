import React from 'react';
import useResources from './useResources';


const ResourceList = (props) => {

   const resources = useResources(props.resource); 

    
    return (
            <div>               
                <ul>
                    {
                        resources.map( record => <li key={record.id}>{record.title}</li> )
                    }
                </ul>
                
                
            </div>
        );
    
}

export default ResourceList;
