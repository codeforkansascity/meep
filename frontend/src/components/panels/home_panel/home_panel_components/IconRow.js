import React from 'react';
import LocationMarker from '../../../helpers/locationMarker';

const IconRow = (props) => (
    <div className="icon-container row">
        <div className="col-2">
            <LocationMarker/>
        </div>
        <div className="col-10 flush-left">{props.text}</div>
    </div>
);

export default IconRow;