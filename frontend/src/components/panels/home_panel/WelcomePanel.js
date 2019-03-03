import React from 'react';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import IconRow from './home_panel_components/IconRow';
import ActionButton from '../../helpers/ActionButton';

const WelcomePanel = () => (
    <div className="side-panel-content">
        <Header text="Explore Metropolian Energy Center Projects That Impact Your Area"/>
        <div className="block-text-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.</p>
        </div>
        <div className="sub-header-container">
            <SubHeader text="Here's How It Works"/>
        </div>
        <IconRow icon_url="images/filter.svg" text="Filter the map based on an area and year range that you're interested in"/>
        <IconRow icon_url="images/location-marker.svg" text="Select projects on the map to see more details about each project and the impact they have on the area"/>
        <div className="btn-container">
            <ActionButton text="Get Started"/>
        </div>
  </div>
);

export default WelcomePanel;