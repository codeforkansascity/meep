import React from 'react';
import CheckBoxRow from '../filter_map_components/CheckBoxRow';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.toggleView = this.toggleView.bind(this);
        this.state = { checked: false };
    }

    toggleView = event => {
        this.setState({ checked: event.target.checked });
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
                </label>
            </div>
        );
    }
}

export default CheckBox;