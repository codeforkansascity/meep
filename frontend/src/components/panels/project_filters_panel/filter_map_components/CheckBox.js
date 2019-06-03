import React from 'react';
import CheckBoxRow from '../filter_map_components/CheckBoxRow';
import ProjectTypeMarker from '../../../helpers/projectTypeMarker';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.toggleView = this.toggleView.bind(this);
        this.state = {checked: false};
    }

    toggleView = event => {
        this.setState({checked: event.target.checked});
    }

    render() {
        return (
            <div>
                <label>
                    <CheckBoxRow 
                        Label={this.props.Label} 
                        ProjectType={this.props.ProjectType} 
                        checked={this.state.checked} 
                        toggleView={this.toggleView}
                    />
                    <span style={{ marginLeft: 8 }}>{this.props.Label}</span>
                    <ProjectTypeMarker FillClass={this.props.ProjectType}/> 
                </label>
            </div>
        );
    }
}

export default CheckBox;