import axios from 'axios';

const getApiData = (number, nation, options) => {
    return axios.get('https://randomuser.me/api', {
        params: {
            result: number,
            nat: nation,
            inc: options
        }
    }).then(res => res.data.results)
};

export default getApiData;