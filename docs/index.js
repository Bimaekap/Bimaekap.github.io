// let url_token = 'https://myanimelis\t.net/v1/oauth2/token$' // POST

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
    console.log(response.json);

    let authorization_code = window.location.search
    console.log(authorization_code)

    let url_token = `https://myanimelist.net/v1/oauth2/token&${authorization_code}`
    console.log(url_token)
    const get_token = async () => {
        await fetch(url_token, {
            method: 'POST',
            client_id: client_id,
            client_secret: client_secret,
            code_verifier: code_challenge,
            grant_type: "authorization_code",
            mode: 'no-cors',
        }).then(response => {
            if (response.status === 200)
                console.log('ready')
        })
    }
    get_token()

}


authorization_request()