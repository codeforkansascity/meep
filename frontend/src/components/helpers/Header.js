import React from 'react';

const Header = (props) => (
    <div className="header-text-container">
        <div className="header">{props.text}</div>
    </div>
);

export default Header;