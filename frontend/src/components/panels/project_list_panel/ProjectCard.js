import React from 'react';

const ProjectCard = () => (
    <div className="icon-container row">
        <div className="col-2">
            <img src={props.icon_url}/>
        </div>
        <div className="col-5 flush-left">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.</p>
        </div>
        <div className="col-5 flush-left">
            <img src="images/project_placeholder.png"/>
        </div>
    </div>
);

export default ProjectCard;