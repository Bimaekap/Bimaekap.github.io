// export to main.js
export function authentication_code() {
    return getAuthentication();
}

// call authorization code
import { authorization_code } from "./authorization_code.js";
//url

import { code_generator } from "./code_generator.js";

const code_challenge = code_generator();
console.log(code_challenge + ' code Challenge')
const api_authentication = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=9e04967f457b1e0951e3faadc808a242&code_challenge=${code_challenge}`;

const client_code = {
    theID: '9e04967f457b1e0951e3faadc808a242',
    theSecretID: '8638c94eec94106dfb01e0cafd0a300556e72b4826431d2c9f809c7fd21254d7'
}


let CLIENT_ID = client_code.theID;
let CLIENT_SECRET = client_code.theSecretID;

// data for injection token 


const getAuthentication = async () => {
    const response = await fetch(api_authentication, {
        mode: 'no-cors',
        client_id: CLIENT_ID,
    })
}

authorization_code();