import React from 'react';
import Form from 'react-bootstrap/Form';
import ProjectTypeMarker from '../../../helpers/projectTypeMarker';

let form_check_id = 0;
const CheckBoxRow = ({ Label, ProjectType}) => {
    function toggleView (Label) {
        let new_check_state = !document.getElementById(Label).getElementsByClassName("form-check-input")[0].checked;
        // console.log(new_check_state);
        document.getElementById(Label).getElementsByClassName("form-check-input")[0].checked = new_check_state;
    };
    return (
        <div class="form-check" id={Label}>
            <input type="checkbox" class="form-check-input"/>
            <label title={Label} type="checkbox" class="form-check-label" onClick={() => {toggleView(Label)}}>{Label}</label>
            <ProjectTypeMarker FillClass={ProjectType}/>
        </div>  
    );     
};

export default CheckBoxRow;