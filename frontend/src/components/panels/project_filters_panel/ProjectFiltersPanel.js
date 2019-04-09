import React from 'react';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import ActionButton from '../../helpers/ActionButton';
import StatsContainer from './area_stats_components/AreaStatsContainer';
import {ProximitySlider, ZipLookUpField, DateRangeSlider, SelectProjectTypes} from './filter_map_components/index';
import { Link } from 'react-router-dom';

const ProjectFiltersPanel = () => (
    <div id="project_filters_panel">
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
                <SelectProjectTypes/>
            </div>
        </div>
        <Header Text="Stats For The Area"/>
        <StatsContainer/>
        <div className="row">
            <div className="col">
                <Link to="/projects">
                    <ActionButton Text="Search"/>
                </Link>
                <ActionButton Text="Clear Filters"/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <span className="pr-3">Would you like to report a new project?</span>
                <ActionButton Text="Click Here"/>
            </div>
        </div>
    </div>
);

export default ProjectFiltersPanel;