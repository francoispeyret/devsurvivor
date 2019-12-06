import React from 'react';

function Card(props) {
    return (
        <div className="Card">
            {props.title &&
                <div className="Card-icon">
                    <i className={props.icon} />
                </div>
            }
            {props.title &&
                <div className="Card-title">
                    {props.title}
                </div>
            }
            {props.children &&
                <div className="Card-content">
                    {props.children}
                </div>
            }
        </div>
    );
}

export default Card;
