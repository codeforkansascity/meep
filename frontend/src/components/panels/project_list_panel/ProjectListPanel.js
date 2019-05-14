import React from 'react';
import Header from '../../helpers/Header';
import BackToLink from '../../helpers/BackToLink';
import ProjectCard from './ProjectCard';

class ProjectListPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    handleProjectCardClick = () => {
        this.props.history.push('/details');
    }
    render() {
        return (
            <div id="project_list_container">
                <BackToLink Route="/filters" Text="Back to filters"/>
                <Header Text="Project That Match Your Search"/>
                <div className="project-list">
                    <ProjectCard Name="KCI Airport Busses" Type="infrastructure" Rank="1"/>
                    <ProjectCard Name="Project Name" Type="vehicle" Rank="2"/>
                    <ProjectCard Name="Project Name" Type="building" Rank="3"/>
                    <ProjectCard Name="Project Name" Type="building" Rank="4"/>
                    <ProjectCard Name="Project Name" Type="infrastructure" Rank="5"/>
                </div>
            </div>
        );
    }
};

export default ProjectListPanel;