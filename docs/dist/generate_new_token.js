//import 
import {
    getAuthentication
} from "./authentication.js";

import {
    token
} from "./get_new_code_verifier.js";

export function generateNewToken() {
    return authorization();
}


import { allToken } from "./authentication.js";

let code_verifier = allToken();
console.log('dari generate new token' + code_verifier)
// export 
//url
const api_url_token = 'https://myanimelist.net/v1/oauth2/token';

const client_code = {
    theID: '9e04967f457b1e0951e3faadc808a242',
    theSecretID: '8638c94eec94106dfb01e0cafd0a300556e72b4826431d2c9f809c7fd21254d7'
}

let CLIENT_ID = client_code.theID;
let CLIENT_SECRET = client_code.theSecretID;

const authorization = async (authorization_code) => {
    let response = await fetch(api_url_token, {
        method:'POST',
        mode: 'no-cors',
        clien_id:CLIENT_ID,
        client_secret:CLIENT_SECRET,
        code: authorization_code ,
        code_verifier: code_verifier,
        grant_type:'authorization_code'
    })
}