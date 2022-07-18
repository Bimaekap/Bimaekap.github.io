const api_url = 'https://api.myanimelist.net/v2/anime';
const api_url_token = 'https://myanimelist.net/v1/oauth2/token';
const getAPI = async () => {

    const response = await fetch(api_url, {
        method: 'GET',
        mode: 'no-cors',
        client_id:'X-MAL-CLIENT-ID:9e04967f457b1e0951e3faadc808a242',
        credentials: 'include',
        // response_type: 'code',
        // client_id: '9e04967f457b1e0951e3faadc808a242',
        // location: 'http://127.0.0.1:5500/index.html?code=',
        // host: 'http://127.0.0.1:5500/index.html',
        headers: new Headers({
            
        })
    })

}
getAPI()

const getTokenAPI = async () => {
    const responseToken = await fetch(api_url_token, {
        method:'GET',
        host: 'http://127.0.0.1:5500/index.html',
        'Content Type':  'aplication/json',
        client_id:'9e04967f457b1e0951e3faadc808a242',
        cliend_secret: '8638c94eec94106dfb01e0cafd0a300556e72b4826431d2c9f809c7fd21254d7',
        grant_type:''
    })
}
// getTokenAPI()