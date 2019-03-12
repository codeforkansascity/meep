import React from 'react';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import ActionButton from '../../helpers/ActionButton';
import ProximitySlider from './filter_map_components/ProximitySlider';
import ZipLookUpField from './filter_map_components/ZipLookUpField';
import DateRangeSlider from './filter_map_components/DateRangeSilder';
import StatsContainer from './area_stats_components/AreaStatsContainer';
import SelectProjectTypes from './filter_map_components/SelectProjectTypes';
import { Link } from 'react-router-dom';

const ProjectFiltersPanel = () => (
    <div id="project_filters_panel">
        <Header text="Filter The Map View"/>
        <div className="row">
            <div className="col-5">
                <SubHeader text="Zip Code"/>
                <ZipLookUpField/>
            </div>
            <div className="col-7">
                <SubHeader text="Proximity"/>
                <ProximitySlider/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <SubHeader text="Date Range"/>
                <DateRangeSlider/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <SubHeader text="Project Type"/>
                <SelectProjectTypes/>
            </div>
        </div>
        <Header text="Stats For The Area"/>
        <StatsContainer/>
        <div className="row">
            <div className="col">
                <Link to="/projects">
                    <ActionButton text="Search"/>
                </Link>
                <ActionButton text="Clear Filters"/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <span className="pr-3">Would you like to report a new project?</span>
                <ActionButton text="Click Here"/>
            </div>
        </div>
    </div>
);

export default ProjectFiltersPanel;