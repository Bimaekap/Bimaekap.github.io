//import from authentication.js
// import { getAuthentication } from "./dist/authentication.js";

import { getTokenAfterAuthentication } from "./dist/openToken.js";

const api_url = 'https://api.myanimelist.net/v2/anime?q=one&limit=4';

let myToken = getTokenAfterAuthentication();

console.log(myToken)
const getAPI = async () => {
    const response = await fetch(api_url,{
        method:'GET',
        mode:'no-cors',
        credentials:'include',
        headers:new Headers({
            'X-MAL-CLIENT-ID':'9e04967f457b1e0951e3faadc808a242',
            'Authorization' : myToken,      
        })
    })
}


// CALL API

getAPI();
