import React from 'react';
import { Link } from 'react-router-dom';

const BackToLink = ({ Route="/", Text }) => (
    <Link to={Route}>
        <p className="back-to-link">&#8249; {Text}</p>
    </Link>
);

export default BackToLink;
