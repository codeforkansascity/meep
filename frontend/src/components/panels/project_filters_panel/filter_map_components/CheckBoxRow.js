import React from 'react';
import ProjectTypeMarker from '../../../helpers/projectTypeMarker';

const CheckBoxRow = ({ Label, ProjectType, checked, toggleView }) => (
    <div id="checkbox-container">
        <input className="hidden-checkbox" type="checkbox" checked={checked} onChange={toggleView} />
        <div className="styled-checkbox">
            <svg className={`icon ${checked ? "show-checked" : "hide-checked"}`} viewBox="0 0 24 24" >
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </div>
        <span className="style-span">{Label}</span>
        <ProjectTypeMarker FillClass={ProjectType}/> 
    </div>
);

export default CheckBoxRow;