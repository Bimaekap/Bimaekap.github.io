//import from authentication.js

import { getAuthentication } from "./dist/authentication.js";
import { generateNewToken } from "./dist/generate_new_token.js";
import { token } from "./dist/get_new_code_verifier.js";
const api_url = 'https://api.myanimelist.net/v2/anime?q=one&limit=4';

const getAPI = async () => {
    const response = await fetch(api_url,{
        method:'GET',
        mode:'no-cors',
        credentials:'include',
        headers:new Headers({
            'X-MAL-CLIENT-ID':'9e04967f457b1e0951e3faadc808a242',    
        })
    })
}



// CALL API

getAPI();

getAuthentication();
