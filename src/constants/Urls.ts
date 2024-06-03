const baseUrl = 'http://owu.linkpc.net/carsAPI/v2';

const registrationUrl = '/users';
const carsUrl = '/cars';
const authUrl = '/auth';
const refreshUrl =  authUrl+'/refresh';

const urls ={
    registrationUrl,
    carsUrl,
    authUrl,
    refreshUrl
}
export {
    baseUrl,
    urls
}