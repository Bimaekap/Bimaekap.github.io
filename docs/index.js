// let url_token = 'https://myanimelis\t.net/v1/oauth2/token$' // POST

let client_id = '9e04967f457b1e0951e3faadc808a242';
let client_secret = '8638c94eec94106dfb01e0cafd0a300556e72b4826431d2c9f809c7fd21254d7'


//import generator

import {
    code_generator
} from "./dist/code_generator.js";

let code_challenge = code_generator();

let url_authentication = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${client_id}&code_challenge=${code_challenge}` // GET

// authorization Request 

// all data
const dataAuthen = {
    state: 'https://bimaekap.github.io/',
}

const authorization_request = async () => {
    const response = await fetch(url_authentication, {
        method:'get',
        mode: 'no-cors',
        body: dataAuthen,
    })

   

    const data = {
        client_id: client_id,
        client_secret: client_secret,
        code_verifier: code_challenge,
        grant_type: "authorization_code",
    }

    let authorization_code = new URLSearchParams(window.location.search)
    let theAnswer = authorization_code.values()
    console.log(theAnswer)

    let url_token = `https://myanimelist.net/v1/oauth2/token&code=${theAnswer}` // POST
    const get_token = async () => {
        await fetch(url_token, {
            method: 'POST',
            body: data,
            mode: 'no-cors',
        })
    }
    get_token()


}


authorization_request()