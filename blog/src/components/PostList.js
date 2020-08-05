import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostList extends React.Component {



    render() {
        return <div>Post List</div>
    };
};

export default connect(null, { fetchPosts })(PostList);