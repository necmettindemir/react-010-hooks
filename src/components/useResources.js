import React, { useState, useEffect} from 'react';
import axios from 'axios';


const useResources = (resource) => {
 
    const [resources, setRescources] = useState([]);

    useEffect( 
        () => {
        (async (resource) => 
        {    
            const url = `https://jsonplaceholder.typicode.com/${resource}`;            
            const response = await axios.get(url);                  
            setRescources(response.data);    
        })
        (resource);
    }, [resource]);

    return resources;
}


export default useResources;