import React from 'react';
import Header from '../../helpers/Header';
import ProjectCard from './ProjectCard';

const ProjectListPanel = () => (
    <div id="project_list_container">
        <Header text="Project That Match Your Search"/>
        <br/>
        <ProjectCard/>
    </div>
);

export default ProjectListPanel;