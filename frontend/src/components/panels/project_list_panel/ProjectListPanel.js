import React from 'react';
import Header from '../../helpers/Header';
import BackToLink from '../../helpers/BackToLink';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';
import firebase from '../../../firebase.js';
import { MeepService } from '../../../services/meep_service';
import { addProjects } from '../../../actions/projects';
import { Link } from 'react-router-dom';
import { selectProject } from '../../../actions/project_details';

const meep_service = new MeepService();

class ProjectListPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        const projectsRef = firebase.database().ref('projects');                
        projectsRef.on('value', (snapshot) => {                                 
            let projects = snapshot.val();
            this.setState({
               items: projects 
            }); 
        });
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
        return (
            <div id="project_list_container">
                <BackToLink Route="/filters" Text="Back to filters"/>
                <Header Text="Projects That Match Your Search"/>
                <div className="project-list">
                    {this.state.items.map((item) => {
                        return (
                            <Link to="/details" key={item.id}>
                                <ProjectCard
                                    onClick={() => this.dispatchProjectSummary(item.id)}
                                    key={item.id}
                                    Name={item.name}
                                    StartYear={item.year}
                                    Type="Infrastructure"
                                    Rank={item.id}
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { 
        projects: state.projects[0] || [],
        selected_project: state.selected_project || {}
    }
};

export default connect(mapStateToProps)(ProjectListPanel);
