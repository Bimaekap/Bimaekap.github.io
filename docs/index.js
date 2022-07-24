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
        method: 'post',
        mode: 'no-cors',
        body: dataAuthen,
    })

   

    const data = {
        client_id: client_id,
        client_secret: client_secret,
        code_verifier: code_challenge,
        grant_type: "authorization_code",
    }
    
    let authorization_code = new URLSearchParams('https://bimaekap.github.io/?code=def50200e4afb6e16c917e941a14da183df41eeb28cd9013d891f08f69c326efce3bd7380988893760b4cf4017d3b68b1e8674956a2dfffadfb6bef8103318a21be56149ca43bd10d160d8a09a30964deeb01088f1bb39d4c4c50f2bd570544359a34a90746e314826f4d1fa39b1fed9a53844673c614dc7dfd2c6b28701e69abc0aa7daed53d847a2c7de771ab899e65a02c00aa84d83f086d007f5f79cfa1b213a916c2df848c601989a933cf0c6345e1af2d98e96fe957a3aeb8f9eb8cc0aeaa1c2b06f7418ffda7a5a81e2b314d4f21a3d6fdf82a5535fb70ab3ac9f7825e8f22aa316554a0d56e62f87716c0a77dfe371d2cdf0de112ef1085e67b37b89c9f37e8f23759b01c79f23a00ddb2c2529a7deb02edc2bef6bf811eaab5c1addd71bbca330aecd7ad43430966d640a0d41ca795f0116fdbe317bfc45b7a06aa521df9d353955ff8e7d9c19999d4681ab802482bf324a0fed558c7a2dc2b97b7799c05b28975286c62cef579c1d4bc5d7f27c5adfc0d2b311e766e2e213ce93c242ee824c806645d3a227edf96e34d52d3f7eb4d52e4eef07b75b1c8625155f7c1a0f&state=https%3A%2F%2Fbimaekap.github.io%2F')
    let theAnswer = authorization_code.values()
    console.log(theAnswer)

    let url_token = `https://myanimelist.net/v1/oauth2/token&code=${theAnswer}` // POST
    const get_token = async () => {
        await fetch(url_token, {
            method: 'POST',
            body: data,
            mode: 'no-cors',
        }).then(response => {
            console.log(response.json())
        })
    }
    get_token()


}


authorization_request()