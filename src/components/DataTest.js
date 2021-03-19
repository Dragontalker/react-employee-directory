import React, { Component } from 'react';
import API from '../utils/API';

class DataTest extends Component {
    state = {
        search: "",
        results: [],
        name: ""
    };

    componentDidMount() {
        this.searchUser('?nat=us')
    }

    searchUser = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.results[0].name}))
            .catch(err => console.log(err));
    }



    render() {
        return (
            <div>
                The results are: {this.state.name}
            </div>
        )
    }

};

export default DataTest;