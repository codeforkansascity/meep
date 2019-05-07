import React from 'react';

const ProjectTypeMarker = ({ FillClass }) => (
    <span className="project-type-marker">
        <svg preserveAspectRatio="none" viewBox="0 0 24 24" width="20" height="20">
            <path className={FillClass} fillRule="evenodd" clipRule="evenodd" d="M12,0C7,0,3,4,3,9c0,1.728,0.518,3.065,1.411,4.42l6.641,10.076v0.001 C11.252,23.8,11.602,24,12,24s0.749-0.201,0.949-0.504L19.59,13.42C20.482,12.065,21,10.728,21,9C21,4,17,0,12,0z M12,13.997 c-2.762,0-5-2.241-5-5.005c0-2.765,2.238-5.005,5-5.005s5,2.24,5,5.005C17,11.756,14.762,13.997,12,13.997z M12,6 c-1.657,0-3,1.343-3,3s1.343,3,3,3s3-1.343,3-3S13.657,6,12,6z" vectorEffect="non-scaling-stroke"/>
        </svg>
    </span>
);

export default ProjectTypeMarker;