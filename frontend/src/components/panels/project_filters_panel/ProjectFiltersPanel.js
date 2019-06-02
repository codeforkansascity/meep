import React from 'react';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import ActionButton from '../../helpers/ActionButton';
import StatsContainer from './area_stats_components/AreaStatsContainer';
import BackToLink from '../../helpers/BackToLink';
import {ProximitySlider, ZipLookUpField, DateRangeSlider, CheckBoxRow} from './filter_map_components/index';
import { Link } from 'react-router-dom';

function toggleView (Label) {
    let new_check_state = !document.getElementById(Label).getElementsByClassName("form-check-input")[0].checked;
    // console.log(new_check_state);
    document.getElementById(Label).getElementsByClassName("form-check-input")[0].checked = new_check_state;
};

const ProjectFiltersPanel = () => (
    <div id="project_filters_panel">
        <BackToLink Route="/" Text="Back to home"/>
        <div className="project-filters">
            <Header Text="Filter The Map View"/>
            <div className="row">
                <div className="col-5">
                    <SubHeader Text="Zip Code"/>
                    <ZipLookUpField/>
                </div>
                <div className="col-7">
                    <SubHeader Text="Proximity"/>
                    <ProximitySlider/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <SubHeader Text="Date Range"/>
                    <DateRangeSlider/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <SubHeader Text="Project Type"/>
                    <div className="project-types-container">
                        <CheckBoxRow Label="Building" ProjectType="building" toggleView={toggleView}/>
                        <CheckBoxRow Label="Vehicle Transportation" ProjectType="vehicle" toggleView={toggleView}/>
                        <CheckBoxRow Label="Infrastructure Transportation" ProjectType="infrastructure" toggleView={toggleView}/>
                    </div>
                </div>
            </div>
            <Header Text="Stats For The Area"/>
            <StatsContainer/>
            <div className="row">
                <div className="col">
                    <Link to="/projects">
                        <ActionButton Text="Search"/>
                    </Link>
                    <ActionButton Text="Clear Filters" Class="secondary"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span className="pr-3">Would you like to report a new project?</span>
                    <ActionButton Text="Click Here" Class="secondary"/>
                </div>
            </div>
        </div>
    </div>
);

export default ProjectFiltersPanel;