// export to main.js

export function getAuthentication() {
    return getInside();
}

export function allToken() {{
    return codeChallange;
}}
// import verifile code from get_new_code_verifier.js
import {token} from "./get_new_code_verifier.js";


// let name = 'this is code challange';
// console.log(name + getTokenInvoke())

let codeChallange = token();

//url
const api_authentication = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=9e04967f457b1e0951e3faadc808a242&code_challenge=${codeChallange}`;

const client_code = {
    theID: '9e04967f457b1e0951e3faadc808a242',
    theSecretID: '8638c94eec94106dfb01e0cafd0a300556e72b4826431d2c9f809c7fd21254d7'
}

let CLIENT_ID = client_code.theID;
let CLIENT_SECRET = client_code.theSecretID;

const getInside = async () => {
    const response = await fetch(api_authentication, {
        mode: 'no-cors',
        client_id: CLIENT_ID,
    })
    console.log(window)

}

