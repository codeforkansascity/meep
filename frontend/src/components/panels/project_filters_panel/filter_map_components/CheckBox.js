import React from 'react';
import CheckBoxRow from '../filter_map_components/CheckBoxRow';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.toggleView = this.toggleView.bind(this);
        this.hoverEnter = this.hoverEnter.bind(this);
        this.hoverLeave = this.hoverLeave.bind(this);
        this.state = { checked: false };
    }

    toggleView = event => {
        this.setState({ checked: event.target.checked });
    }

    hoverEnter = event => {
        document.getElementById(this.props.Label).style.cursor = "pointer";
    }

    hoverLeave = event => {
        document.getElementById(this.props.Label).style.cursor = "default";
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
                        hoverEnter={this.hoverEnter}
                        hoverLeave={this.hoverLeave}
                    />
                </label>
            </div>
        );
    }
}

export default CheckBox;