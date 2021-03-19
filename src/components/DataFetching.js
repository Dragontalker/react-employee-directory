import React, { useState, useEffect } from 'react';
import { COLUMNS } from '../ultis/columns';
import { Table } from './Table';
import axios from 'axios';


import MOCK_DATA from '../ultis/MOCK_DATA.json';

export const DataFetching = () => {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     axios.get('https://randomuser.me/api?results=200&nat=us&inc=name,location,email,dob,phone')
    //         .then(res => {
    //             const objs = res.data.results;
    //             const data = objs.map(obj => {
    //                 return {
    //                     first_name: obj.name.first,
    //                     last_name: obj.name.last,
    //                     city: obj.location.city,
    //                     state: obj.location.state,
    //                     age: obj.dob.age,
    //                     email: obj.email,
    //                     phone: obj.phone
    //                 }
    //             })
    //             setPosts(data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }, []);

    return (
        <div>
            <Table columns={COLUMNS} data={MOCK_DATA}/>
        </div>
    )
};