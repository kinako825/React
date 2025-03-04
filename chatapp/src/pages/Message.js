import React from 'react';

const Message = ({ user, content }) => {
    return (
        <li>
            {user} : {content}
        </li>
    );
};

export default Message;