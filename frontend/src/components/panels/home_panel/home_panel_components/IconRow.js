import React from 'react';

const IconRow = (props) => (
    <div className="icon-container row">
        <div className="col-2">
            <img src={props.icon_url}/>
        </div>
        <div className="col-10 flush-left">{props.text}</div>
    </div>
);

export default IconRow;