//import from code_generator.js
import {
    code_generator
} from "./code_generator.js"

let codeChallange = code_generator();

//export 
export function get_authentication() {
    return authentication();
}

export function myToken() {
    return myToken;
}

// user ID
const client_code = {
    theID: '9e04967f457b1e0951e3faadc808a242',
    theSecretID: '8638c94eec94106dfb01e0cafd0a300556e72b4826431d2c9f809c7fd21254d7'
}

let CLIENT_ID = client_code.theID;
let CLIENT_SECRET = client_code.theSecretID;

const url_authentication = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&code_challenge=${codeChallange}`;
const url_token = 'https://myanimelist.net/v1/oauth2/authorize?token'

// data for authentication
const data_authentication = {
    response_type: 'code',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    state: 'http://127.0.0.1:5500/docs/index.html',
    redirect_uri: 'https://bimaekap.github.io/',
    code_challange: codeChallange,
    code_challange_method: 'plain'
}

// data for get Token
let data_get_token = {
    client_id: CLIENT_ID,
    client_secret:CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: 'https://bimaekap.github.io/',
    code_verifier: codeChallange,
}

function authentication() {
    //get authentication
    const element = document.querySelector('#error-catch')
    fetch(url_authentication, {
            method: 'GET',
            mode: 'no-cors'
        }, data_authentication).then(response => {
            if (!response.ok) {
                // get Token from codeback URI
                let url = window.location.href
                // delete ?code= text
                url.replace('code=','');
                console.log(`Click This URL For Authentication ${url}`)
             
                console.log(`this the code for get token ${authorization_code}`);
                fetch(url_token, {
                    mode: 'no-cors',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                    }, {
                        code: authorization_code
                    })
                }, data_get_token).then(response => {
                    if (!response.ok) {
                        console.log(`This authorization code from get TOKEN ${authorization_code}`)
                        const myToken = response
                        const data = JSON.stringify(myToken)
                        console.log(data)
                    }
                });
                const error = response.status;
                return Promise.reject(error)
            }
            element.innerHTML = JSON.stringify(data)

        })
        .catch(error => {
            element.innerHTML = `Error: ${error}`
            console.error('Masi belum bisa bos', error)


        })



}