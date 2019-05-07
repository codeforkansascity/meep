import React from 'react';

const LocationMarker = ({ FillClass, Num }) => (
    <div className="location-marker">
        <svg preserveAspectRatio="none" viewBox="4 2 18 20" width="40" height="40">
            <g>
                <rect fill="white" width="8" height="6" y="6" x="8"></rect>
                {Num ? <text x="11.25" y="10.5" fill="black" fontSize="3.5px" fontWeight="bold">{Num}</text> : ''}
            </g>
            <g>
                <path className={FillClass} d="M13.88,11.22c-1.04,1.04-2.72,1.04-3.76,0.01c0,0-0.01-0.01-0.01-0.01C9.06,10.18,9.06,8.5,10.1,7.46  c0,0,0.01-0.01,0.01-0.01c1.04-1.04,2.72-1.04,3.76-0.01c0,0,0.01,0.01,0.01,0.01C14.86,8.48,14.8,10.14,13.88,11.22z M17.33,9.34  c0.02-1.42-0.54-2.78-1.56-3.77C14.78,4.55,13.42,3.98,12,4c-1.42-0.02-2.78,0.55-3.77,1.57C7.21,6.56,6.65,7.92,6.67,9.33  C6.64,9.97,6.75,10.61,7,11.2l3.8,8.06c0.1,0.23,0.27,0.41,0.48,0.54c0.43,0.26,0.98,0.26,1.41,0c0.21-0.13,0.38-0.32,0.49-0.54  L17,11.2c0.25-0.59,0.36-1.22,0.34-1.86l0,0H17.33z" vectorEffect="non-scaling-stroke"/>
            </g>
        </svg>
    </div>
);

export default LocationMarker;