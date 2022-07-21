//import from code_generator.js
import {
    code_generator
} from "./dist/code_generator.js"

let codeChallange = code_generator();

//export 
// export function get_authentication() {
//     return authentication();
// }

// export function myToken() {
//     return myToken;
// }

// user ID

const client_code = {
    theID: '9e04967f457b1e0951e3faadc808a242',
    theSecretID: '8638c94eec94106dfb01e0cafd0a300556e72b4826431d2c9f809c7fd21254d7'
}

let CLIENT_ID = client_code.theID;
let CLIENT_SECRET = client_code.theSecretID;

const url_authentication = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&code_challenge=${codeChallange}`;

// data for authentication
const data_authentication = {
    response_type: 'code',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    state: 'https://bimaekap.github.io/',
    redirect_uri: 'https://bimaekap.github.io/',
    code_challange: codeChallange,
    code_challange_method: 'plain'
}



//get authentication

fetch(url_authentication, {
    method: 'GET',
    mode: 'no-cors'
}, data_authentication).then(response => {
    if (!response.ok) {
        console.log('start')
       
    }

})

let url = window.location.search
console.log(url)
//store authorazitation

// data for get Token
let data_get_token = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: url,
    redirect_uri: 'https://bimaekap.github.io/',
    code_verifier: codeChallange,
}

const url_token = `https://myanimelist.net/v1/oauth2/token&${url}&client_id${CLIENT_ID}&${CLIENT_SECRET}`

// fetch here

async function getToken() {
    const response = await fetch(url_token,{
        mode:"no-cors"
    }
    ,data_get_token);
    const data = await response
    console.log(data)
}

getToken()
// Get API

const api_url = 'https://api.myanimelist.net/v2/anime';

const response = await fetch(api_url, {
    method: 'GET',
    mode: 'no-cors',
    headers: new Headers({
        'X-MAL-CLIENT-ID': '9e04967f457b1e0951e3faadc808a242',
        'Authorization': `Bearer `, // put token here
    })
})
