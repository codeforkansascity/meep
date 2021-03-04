import React from 'react';
import { connect } from 'react-redux';
import { setTypeFilter } from '../../../../actions/filters';
import CheckBoxRow from '../filter_map_components/CheckBoxRow';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.toggleView = this.toggleView.bind(this);
        this.state = { checked: true };
    }

    toggleView = event => {
        this.setState({ checked: event.target.checked },
            () => this.props.dispatch(setTypeFilter(
                {
                    type: this.state.checked,
                    project_type: this.props.ProjectType
                }
            )));
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

export default connect()(CheckBox);