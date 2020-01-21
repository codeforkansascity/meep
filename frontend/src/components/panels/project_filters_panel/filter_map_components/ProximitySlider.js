import React from "react";
import { connect } from "react-redux";
import { setRangeFilter } from '../../../../actions/filters';

const ProximitySlider = (props) => (
    <div className="my-1">
        <input
            value={props.filters.range}
            onChange={(e) => { props.dispatch(setRangeFilter(e.target.value))}}
            type="range"
            min="0" 
            max="500" 
            step="25"
            className="custom-range" 
            id="customRange1"/>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ProximitySlider);