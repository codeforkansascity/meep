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
        meep_service.getProjects()
            .then(addProjects)
            .then(this.props.dispatch)
    }

    dispatchProjectSummary(project) {
        meep_service.getProjectDetailsById(project.project_id).then(data => {
            props.dispatch(selectProject(data));
            props.history.push("/details");
        })
    }

    render() {
        if (Array.isArray(this.props.projects)) {
            return (
                <div id="project_list_container">
                    <BackToLink Route="/filters" Text="Back to filters" />
                    <Header Text="Projects That Match Your Search" />
                    <div className="project-list">
                        {this.props.projects.map(project => {
                            return <ProjectCard
                                onClick={() => dispatchProjectSummary(project)}
                                key={project.key}
                                Name={project.name}
                                StartYear={project.year}
                                Type={project.type}
                                Rank={project.project_id} />
                        })}
                    </div>
                </div>);
        } else {
            return <p>Loading</p>
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        projects: state.projects[0] || [],
        selected_project: () => state(selectProject(ownProps.project_id))
    }
};

export default connect(mapStateToProps)(ProjectListPanel);
