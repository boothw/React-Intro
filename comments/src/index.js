import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail name="Rick" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))