import React from 'react';
import Form from 'react-bootstrap/Form'

const SelectProjectTypes = () => (
    <div className="project-types-container">
        <Form.Group>
            <Form.Check label="Building"/>
            <Form.Check label="Vechile Transportation"/>
            <Form.Check label="Infrastructure Transportation"/>
        </Form.Group>
    </div>
);

export default SelectProjectTypes;