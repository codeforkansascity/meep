import React from 'react';
import Form from 'react-bootstrap/Form';
import ProjectTypeMarker from '../../../helpers/projectTypeMarker';

const CheckBoxRow = ({ Label, ProjectType, toggleView}) => (
    <div class="form-check" id={Label}>
        <input type="checkbox" class="form-check-input"/>
        <label title={Label} type="checkbox" class="form-check-label" onClick={() => {toggleView(Label)}}>{Label}</label>
        <ProjectTypeMarker FillClass={ProjectType}/>
    </div> 
);

export default CheckBoxRow;