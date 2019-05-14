import React from 'react';

const ImpactStatRow = ({ Type, Number, Text}) => (
    <div className="impact-stat-row">
        <img src={`images/icons/${Type}_icon.svg`} className="impact-stat-icon" alt="impact type icon"/>
        <span className="impact-stat-number">{Number}</span>
        <span className="impact-stat-text"><em>{Text}</em></span>
    </div>
);

export default ImpactStatRow;