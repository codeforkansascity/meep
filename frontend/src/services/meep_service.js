import { GoogleMapsAPIKey } from "../../private/google_maps";
import config from '../config.json'
import axios from 'axios';


console.log(config.MEEP_API)

async function getAPI(url) {
    try {
        const res = await axios.get(url)
        console.log(`API [${url}]: ${JSON.stringify(res.data)}`)
        return res.data
    } catch (err) {
        return console.error(err)
    }
}


export class MeepService {
    async getLocations() {
        const data = await getAPI(`${config.MEEP_API}/location-markers`);
        return data.locationMarkers;
    }

    async getLocationsById(id) {
        const data = await getAPI(`${config.MEEP_API}/locations/${id}`)
        return data
    }

    async getProjects() {
        const data = await getAPI(`${config.MEEP_API}/projects`);
        console.log(data.projects);
        return data.projects
    }

    async getProjectSummaryById(id) {
        const data = await getAPI(`${config.MEEP_API}/projects/${id}/summary`)
        return data
    }

    async getProjectDetailsById(id) {
        const data = await getAPI(`${config.MEEP_API}/projects/${id}/detail`)
        return data
    }

    async getGeoDataByZipCode(zipcode) {
        const data = await getAPI(`${config.GEODATA_API}?address=${zipcode}&key=${GoogleMapsAPIKey}`)

        return (data.results.length && data.results[0].hasOwnProperty('geometry')) 
            ? data.results[0].geometry.location 
            : {}
    }
}
