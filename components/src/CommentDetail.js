import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
    const authorName = props.name || faker.name.firstName();
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="avatar">
                    {authorName}
                </a>
                <div className="metadata" style={{ marginLeft: 2 + "em" }}>
                    <span className="date">Today</span>
                </div>
                <div className="text">Nice!</div>
            </div>
        </div>
    );
};

export default CommentDetail;