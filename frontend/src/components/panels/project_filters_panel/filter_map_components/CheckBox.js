import React from 'react';
import CheckBoxRow from '../filter_map_components/CheckBoxRow';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.toggleView = this.toggleView.bind(this);
        this.state = {checked: false};
    }

    toggleView(label) {
        let new_check_state = !this.state.checked;
        this.setState({checked: new_check_state});
        document.getElementById(label).getElementsByClassName("form-check-input")[0].checked = new_check_state;
    }

    render() {
        return (
            <CheckBoxRow Label={this.props.Label} ProjectType={this.props.ProjectType} toggleView={this.toggleView} />
        );
    }
}

export default CheckBox;