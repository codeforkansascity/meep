import React from 'react';

const ImpactStatRow = ({ Type, Number }) => (
    <div className="impact-stat-row">
        <img src={`images/icons/${Type}_icon.svg`} className="impact-stat-icon" alt="impact type icon"/>
        <span className="impact-stat-number">{+(parseFloat(Number).toFixed(2)) + ' ' + (Type == "gas" ? 'Tons' : 'Gal')}</span>
        <span className="impact-stat-text"><em>{"Decrease in " + (Type == "gas" ? "greenhouse gases (ghg)" : "gasoline gallon equivalents (gge)")}</em></span>
    </div>
);

export default ImpactStatRow;
