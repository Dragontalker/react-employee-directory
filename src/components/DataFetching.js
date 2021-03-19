import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataFetching = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api?results=200&nat=us&inc=name,location,email,dob,phone')
    });

    return (
        <div>

        </div>
    )
};