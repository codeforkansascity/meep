import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { MeepService } from '../../../../services/meep_service';

const meep_service = new MeepService();

class ZipLookUpField extends React.Component {
    constructor(props) {
        super(props);
    }

    setMapCenterWithZipCode = (zipcode) => {
        meep_service.getGeoDataByZipCode(zipcode).then(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <InputGroup size="sm" className="my-1">
                <FormControl 
                    aria-label="Small" 
                    aria-describedby="inputGroup-sizing-sm"
                    onBlur={(e) => this.setMapCenterWithZipCode(e.target.value)}/>
            </InputGroup>
        );
    }
}

export default ZipLookUpField;