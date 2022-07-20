// //import 

import { authorization_code } from "./authorization_code.js";

import { code_generator } from "./code_generator.js";
// console.log('dari generate new token' + code_verifier)
// export 
export function getToken () {
    return authorization();
}
//url


const client_code = {
    theID: '9e04967f457b1e0951e3faadc808a242',
    theSecretID: '8638c94eec94106dfb01e0cafd0a300556e72b4826431d2c9f809c7fd21254d7'
}

let CLIENT_ID = client_code.theID;
let CLIENT_SECRET = client_code.theSecretID;

const data = {
    'client_id': CLIENT_ID,
    'client_secret': CLIENT_SECRET,
    'grant_type': 'authorization_code',
    'code': authorization_code(),
    "redirect_url": "https://bimaekap.github.io/",
    'code_verifier': code_generator(),
    
}

let api_url_token = new URL ("https://myanimelist.net/v1/oauth2/token");


const authorization = async () => {
    Object.keys(data).forEach(key => api_url_token.searchParams.append(key, data[key]))
    fetch(api_url_token, {
        mode:'no-cors',
        headers: new Headers({
            'Content-Type':'aplication/json'
        })
    });
}