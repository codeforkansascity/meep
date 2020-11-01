import React from 'react';
import Header from '../../helpers/Header';
import BackToLink from '../../helpers/BackToLink';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';
import { MeepService } from '../../../services/meep_service';
import { addProjects } from '../../../actions/projects';
import { Link } from 'react-router-dom';
import { selectProject } from '../../../actions/project_details';
import { selectProjectsByFilter } from '../../../selectors/projects';

const meep_service = new MeepService();

class ProjectListPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        meep_service.getProjects()
            .then(addProjects)
            .then(this.props.dispatch)
    }
    dispatchProjectSummary (project_id) {
        meep_service.getProjectDetailsById(project_id)
            .then(selectProject)
            .then(this.props.dispatch)
    };

    render() {
        if(Array.isArray(this.props.projects) && this.props.projects.length) {
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
            </div>);
        } else {
            return <p>Loading</p>
        }
    }
};

const mapStateToProps = (state) => {
    return { 
        projects: state.projects[0] ? selectProjectsByFilter(state.projects[0], state.filters) : [],
        selected_project: state.selected_project || {},
        filters: state.filters || {}
    }
};

export default connect(mapStateToProps)(ProjectListPanel);
