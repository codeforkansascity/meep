import React from 'react';
import Form from 'react-bootstrap/Form';
import ProjectTypeMarker from '../../../helpers/projectTypeMarker';

const CheckBoxRow = ({ Label, ProjectType }) => (
    <div className="form-check">
        <input type="checkbox" className="form-check-input"/>
        <label title={Label} type="checkbox" className="form-check-label">{Label}</label>
        <ProjectTypeMarker FillClass={ProjectType}/>
    </div>
);

export default CheckBoxRow;