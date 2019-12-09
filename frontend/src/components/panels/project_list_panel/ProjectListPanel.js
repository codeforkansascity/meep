import React from 'react';
import Header from '../../helpers/Header';
import BackToLink from '../../helpers/BackToLink';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';
import { MeepService } from '../../../services/meep_service';
import { addProjects } from '../../../actions/projects';
import { Link } from 'react-router-dom';
import { selectProject } from '../../../actions/project_details';

const meep_service = new MeepService();

class ProjectListPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        meep_service.getProjects().then(data => {
            this.props.dispatch(addProjects(data));
        });
    }
    dispatchProjectSummary (project_id) {
        meep_service.getProjectDetailsById(project_id).then(data => {
            this.props.dispatch(selectProject(data));
        });
    }
    render() {
        if(this.props.projects.length) {
            return (
                <div id="project_list_container">
                    <BackToLink Route="/filters" Text="Back to filters"/>
                    <Header Text="Project That Match Your Search"/>
                    <div className="project-list">
                        {this.props.projects.map(project => {
                            return <Link to="/details" key={project.key}>
                                        <ProjectCard
                                            onClick={() => this.dispatchProjectSummary(project.project_id)}
                                            key={project.key}
                                            Name={project.name} 
                                            StartYear={project.year}
                                            Type="infrastructure" 
                                            Rank={project.project_id}/>
                                   </Link>
                        })}
                    </div>
                </div>
            );
        } else {
            return <p>Loading</p>
        }
    }
};

const mapStateToProps = (state) => {
    return { 
        projects: state.projects[0] || [],
        selected_project: state.selected_project || {}
    }
};

export default connect(mapStateToProps)(ProjectListPanel);