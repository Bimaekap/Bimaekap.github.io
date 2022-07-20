//import from authentication.js
import { authentication_code } from "./dist/authentication.js";

import { getToken } from "./dist/getToken.js";

// import { generateNewToken } from "./dist/generate_new_token.js";
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
authentication_code();
getToken();