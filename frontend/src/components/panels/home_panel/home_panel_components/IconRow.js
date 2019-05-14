import React from 'react';
import LocationMarker from '../../../helpers/locationMarker';

const IconRow = ({ Text, IconType}) => (
    <div className="icon-container row">
        <div className="col-2">
            {IconType === "filter" ?
                <img src="images/filter.svg" alt="filter icon"/>
                : <LocationMarker FillClass={IconType}/>
            }
        </div>
        <div className="col-10 flush-left">{Text}</div>
    </div>
);

export default IconRow;