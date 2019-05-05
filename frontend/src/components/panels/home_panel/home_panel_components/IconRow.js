import React from 'react';
import LocationMarker from '../../../helpers/locationMarker';

const IconRow = ({ Text, IconType }) => (
    <div className="icon-container row">
        <div className="col-2">
            <LocationMarker IconType={IconType}/>
        </div>
        <div className="col-10 flush-left">{Text}</div>
    </div>
);

export default IconRow;