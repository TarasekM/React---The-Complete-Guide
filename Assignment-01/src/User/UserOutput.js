import React from 'react';

import "./User.css"

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>
                User Name: 
            </p>
            <p>
                {props.name}
            </p>
        </div>
    )
};

export default UserOutput;