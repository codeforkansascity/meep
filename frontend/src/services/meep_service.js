const REMOTE_API = "http://www.meepmetroenergy.xyz:18773";
import axios from 'axios';

export class MeepService {
    getLocations() {
        return new Promise((resolve, reject) => {
            axios.get(REMOTE_API + '/location-markers')
                .then((res) => { resolve(res.data.locationMarkers) })
                .catch((err) => { reject(err) });
        });
    }

    getLocationsById(id) {
        return new Promise((resolve, reject) => {
            axios.get(REMOTE_API + '/locations/' + id)
                .then((res) => { resolve(res.data) })
                .catch((err) => { reject(err) });
        });
    }

    getProjects() {
        return new Promise((resolve, reject) => {
            axios.get(REMOTE_API + '/projects')
            .then((res) => { resolve(res.data.projects) })
            .catch((err) => { reject(err) });
        });
    }

    getProjectSummaryById(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${REMOTE_API}/projects/${id}/summary`)
            .then((res) => { resolve(res.data) })
            .catch((err) => { reject(err) });
        });
    }


    getProjectDetailsById(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${REMOTE_API}/projects/${id}/detail`)
            .then((res) => { resolve(res.data) })
            .catch((err) => { reject(err) });
        });
    }
}
