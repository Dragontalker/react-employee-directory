import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataFetching = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api?results=200&nat=us&inc=name,location,email,dob,phone')
            .then(res => {
                console.log(res);
                setPosts(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {JSON.stringify(pos)}
        </div>
    )
};