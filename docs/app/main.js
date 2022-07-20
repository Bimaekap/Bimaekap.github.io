const api_url = 'https://api.myanimelist.net/v2';

async function getAPI() {
  await fetch(api_url,{
    method:'GET',
    credentials:'include',
    mode:'no-cors',
    headers: new Headers({
        'Access-Control-Allow-Origin':''
    })
  })


}

getAPI()