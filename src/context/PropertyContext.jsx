import React, { createContext, useEffect, useState } from 'react';
import { fetchProperties } from '@/Api/propertyApi';

export const propertyContext = createContext();

const PropertyContext = ({children}) => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Loading users on first render
    useEffect(() => {
        const loadProperties = async () => {
            const data = await fetchProperties();

        if(data === null || data.length === 0) {
            setError("failed loading properties");
            //Put toast here
        }

        setProperties(data);
        setLoading(false);
        }
        
        loadProperties();
    }, [])
  return (
    <propertyContext.Provider value={{ properties, loading, error}}>
        {children}
    </propertyContext.Provider>
  )
}

export default PropertyContext