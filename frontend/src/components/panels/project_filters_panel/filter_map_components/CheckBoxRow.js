import React from 'react';
import Form from 'react-bootstrap/Form';
import ProjectTypeMarker from '../../../helpers/projectTypeMarker';

const CheckBoxRow = ({ Label, ProjectType }) => (
    <div class="form-check">
        <input type="checkbox" class="form-check-input"/>
        <label title={Label} type="checkbox" class="form-check-label">{Label}</label>
        <ProjectTypeMarker FillClass={ProjectType}/>
    </div>
);

export default CheckBoxRow;