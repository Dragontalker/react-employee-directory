import axios from 'axios';
import { useReducer, useState } from 'react';

const BASEURL = 'https://randomuser.me/api';

export default {
    search: function(query) {
        return axios.get(BASEURL + query)
        .then(res => {
            const users = res.data;
            return users.map(user => {
                login: user.login,
                image: user.avatar_url,
                profile_url: user.html_url
            });
        })
    }
};