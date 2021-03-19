import axios from 'axios';

const getApiData = (number, nation, options) => {
    axios.get('https://randomuser.me/api', {
        params: {
            result: number,
            nat: nation,
            inc: options
        }
    })
};

export default getApiData;