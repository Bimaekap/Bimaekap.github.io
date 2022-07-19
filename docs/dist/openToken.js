import {getTokenInvoke} from "./authentication";

export function getTokenAfterAuthentication() {
    return getToken();
}

const api_url_token = 'https://myanimelist.net/v1/oauth2/token';
const client_code = {
    theID: '9e04967f457b1e0951e3faadc808a242',
    theSecretID: '8638c94eec94106dfb01e0cafd0a300556e72b4826431d2c9f809c7fd21254d7'
}

let CLIENT_ID = client_code.theID;
let CLIENT_SECRET = client_code.theSecretID;


const getToken = async () => {
    const response_url = await fetch(api_url_token, {
        method: 'POST',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: 'authorization_code',
        code_verifier: getTokenInvoke(),
    })
}
