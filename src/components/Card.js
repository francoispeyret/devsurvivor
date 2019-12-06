import React from 'react';

function Card(props) {
    return (
        <div className="Card">
            <i className={`${props.icon} fa-2x`} />
        </div>
    );
}

export default Card;
