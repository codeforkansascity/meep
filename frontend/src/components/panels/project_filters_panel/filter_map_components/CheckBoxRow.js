import React from 'react';
import Form from 'react-bootstrap/Form';
import ProjectTypeMarker from '../../../helpers/projectTypeMarker';
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: #5B5A5E;
  stroke-width: 6.5px;
  width: 12px;
  padding-bottom: 8px;
  padding-right: 2px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #EEF0EA;
  border-radius: 2.5px;
  border: 1px solid darkgray;

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`

const CheckBoxRow = ({ Label, ProjectType, checked, toggleView }) => (
    <CheckboxContainer>
        <HiddenCheckbox checked={checked} onChange={toggleView} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer> 
);

export default CheckBoxRow;