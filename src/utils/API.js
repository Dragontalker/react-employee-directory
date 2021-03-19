import axios from 'axios';

const getApiData = (number, nation) => {
    axios.get('https://randomuser.me/api', {
        params: {
            result: number,
            nat: nation
        }
    })
};

export default getApiData;