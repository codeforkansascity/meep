import React from 'react';
import Button from 'react-bootstrap/Button';

const ActionButton = ({ Text, Class="primary" }) => (
    <Button className={`custom-btn custom-btn-${Class}`} >{Text}</Button>
);

export default ActionButton;