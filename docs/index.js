let url_token = 'https://myanimelist.net/v1/oauth2/token' // POST

let client_id = '9e04967f457b1e0951e3faadc808a242';
let client_secret = '8638c94eec94106dfb01e0cafd0a300556e72b4826431d2c9f809c7fd21254d7'


//import generator

import {
    code_generator
} from "./dist/code_generator.js";

let code_challenge = code_generator();

let url_authentication = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${client_id}&code_challenge=${code_challenge}&state=${'https://bimaekap.github.io/'}` // GET

// authorization Request 

// all data
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
const data = {

}
const authorization_request = async () => {
    const response = await fetch(url_authentication, {
        method: 'GET',
        mode: 'no-cors',
        response_type: 'code',
        client_id: client_id,
        code_chalenge: code_challenge,
        state: 'https://bimaekap.github.io/',
    })
    console.log(response);

    let authorization_code = window.location.search
    let redirect_uri_url = window.location.href

    const get_token = await fetch(url_token, {
            method: 'POST',
            mode: 'no-cors',
            client_id: client_id,
            grant_type: 'authorization_code',
            code: authorization_code,
            redirect_uri: redirect_uri_url,
            code_verifier: code_challenge,
            headers:new Headers({
                'host':'https://bimaekap.github.io/',
                'Content-Type':'application/json'
            })
        })
        .then((response) => {
            console.log(response.headers)
        })
}

authorization_request()