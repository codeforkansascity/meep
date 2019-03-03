import React from 'react';
import Button from 'react-bootstrap/Button';

const ActionButton = (props) => (
    <Button className="btn-action">{props.text}</Button>
);

export default ActionButton;