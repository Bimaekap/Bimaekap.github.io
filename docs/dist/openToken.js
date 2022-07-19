
import { getAuthentication } from "./authentication.js";

export function getTokenAfterAuthentication() {
    return getToken();
}

const api_url_token = 'https://myanimelist.net/v1/oauth2/token';
const client_code = {
    theID: '9e04967f457b1e0951e3faadc808a242',
    theSecretID: '8638c94eec94106dfb01e0cafd0a300556e72b4826431d2c9f809c7fd21254d7'
}

let CLIENT_ID = client_code.theID;
let CLIENT_SECRET = client_code.theSecretID;


const getToken = async () => {
    const response_url = await fetch(api_url_token, {
        method: 'POST',
        mode:'no-cors',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: 'def50200ff5b4d801910e18452354dbd1b67dcd96e7e102cd724e160338f50b9cfbb2f03efcc492a89b2e414b1000aa2b896ce47043ef8b6706037cd7b39c1a387b2b7acec2e89d6206df264b70b35cc9fe057afe97841a10826856284ef36a1ad1e0b5c459b768da6f888382c3018ee55290d7962f65044fc44f715fe7d93399df38349dd659d15164228ef4bbfe40371fe3d9c5d81fca617ac50d3fc818239b2ddcda32079d3031d6a1473450e9e8015370831aaf3eefd60b06d1ced58084aa6c28420317e6cf40f24e05e2a83bdb30abdc0e2e120de9d4fe21e2972b90b853d654d0fbb7b08e02c2ae49389a22341f441694c5ad1780f6eb0b1859808e61666255b29a265ad2733077a4980acc7ef58fcc01ef493ace5034c5fbbe17ee0bd83eedbd5573b62e8bd5e93a68400f34e7b3652174c8a3ef3781778ee7833a4bbb33517247170e8b8bc2d3688833649ae4290666f99c403914df6c0d8e9dfb18daf65cbfeac0bec52724500ca13ecd2a2a8aa7c5776a288a72e66d012b450e9f57633deb67bb05ad765f4384cdcad2bacdb07d2061a84409e472fa556e24aecae308629395bca362ea29c',
        code_verifier: getAuthentication(),
    })
}
