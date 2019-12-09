import React, { Component } from 'react';
import BackToLink from '../.../../../helpers/BackToLink';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import ActionButton from '../../helpers/ActionButton';
import ImpactStatRow from './ImpactStatRow';
import { connect } from 'react-redux';

class ProjectDetailsPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="project_details_container">
                <BackToLink Route="/projects" Text="Back to projects"/>
                <div className="row">
                    <div className="col-6">
                        <img className="project-details-img" src="images/project_placeholder.png"/>
                    </div>
                    <div className="col-6">
                        <p>{this.props.project.name}</p>
                        <p>{this.props.project.details}</p>
                    </div>
                    <Header Text="Impact Of This Project"/>
                    <div className="row">
                        <div className="col">
                            <SubHeader Text="Between 2015 And 2018"/>
                            <div className="stat-row">
                                <ImpactStatRow 
                                    Type="gas"
                                    Number="8%" 
                                    Text="decrease in greenhouse gases (ghg)"/>
                                <ImpactStatRow 
                                    Type="gallon"
                                    Number="68" 
                                    Text="decrease in greenhouse gases (ghg)"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="stat-row">
                                <SubHeader Text="SINCE THIS PROJECT BEGAN IN 2013"/>
                                <ImpactStatRow 
                                    Type="gas"
                                    Number="16%" 
                                    Text="decrease in greenhouse gases (ghg)"/>
                                <ImpactStatRow 
                                    Type="gallon"
                                    Number="102" 
                                    Text="decrease in greenhouse gases (ghg)"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Header Text="Header"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ActionButton Text="Clear Filters"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span className="pr-3">Would you like to donate to this project?</span>
                            <ActionButton Text="Donate"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { project: state.selected_project || {} }
};

export default connect(mapStateToProps)(ProjectDetailsPanel);