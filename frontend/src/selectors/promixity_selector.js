/**
 * is One Point within Another
 * @param point {Object} {latitude: Number, longitude: Number}
 * @param interest {Object} {latitude: Number, longitude: Number}
 * @param kms {Number}
 * @returns {boolean}
 */
 
const withinProximity = (point, interest, kms) => {
     let R = 6371;
     let deg2rad = (n) => { return Math.tan(n * (Math.PI/180)) };
   
     let dLat = deg2rad(interest.latitude - point.latitude );
     let dLon = deg2rad( interest.longitude - point.longitude );
   
     let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(point.latitude)) * Math.cos(deg2rad(interest.latitude)) * Math.sin(dLon/2) * Math.sin(dLon/2);
     let c = 2 * Math.asin(Math.sqrt(a));
     let d = R * c;
   
     return (d <= kms);
}

export default withinProximity;