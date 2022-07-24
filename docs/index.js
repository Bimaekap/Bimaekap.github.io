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

const data = {
    client_id: client_id,
    client_secret: client_secret,
    code_verifier: code_challenge,
    grant_type: "authorization_code",
}

let url_token = 'code=def50200af3833aa24a8ad22e2bf48d8b117923177d6cc278f06d30af9c809fb72b1f82acf52996f985062ffc7e77c15a938b1d1a82d8a8fd41a9687c98e55f4f8af74d3cd9150e87841261f6fc8f1e2507aa5e1f4daece0b6fae06ec10363ca6e0960bb767d699b837ab0542e8f052ec06e9c92809946fd12d9723f0d3c25081c7e29ea58e1d34b0cbdc77528276bc49c75e0d044b1c01cfe116cc03fab1354d088c3053bf8604489f22addcf6304ff44d79a589c1ada3cffbdaf849018134bff708ade58271a8a647a9c7b4f89f5a14797002dc39b0a20deba9773d16590b762cd7b12c07563a1f92c950743f1c94c66e239366dd92a2fb16ba735b5aa08b6608eee5b79a33cc0b94c75f1f8b4a339e22464bb81346abd3fd16129467cd6c68196007dcd7050287a75ee0fabbaaef0c2aa4c1ba6ffabdfd70137f6100c60c664cf5b079815660a08a0fc6663eebdf21843dec07252901ccdc945a959b74f76227c0eb160158d635dc44760272ba6b3290a71502e291a852ff6900f5ececef0b5150cfd10fb637e6f162eee6047ea37b59061489031d4a440f57d34115663901923';

// all data
const dataAuthen = {
    state: 'https://bimaekap.github.io/',
}

const authorization_request = async () => {
    const response = await fetch(url_authentication, {
            method: 'get',
            mode: 'no-cors'
        }, dataAuthen)
        .then(Response => {
            if (response.status === 303) {
                fetch(url_token, {
                        method: "POST",
                        mode: 'no-cors'
                    }, dataAuthen)
                    .then(Response => {
                        if (response.status === 200) {
                            console.log(Response.text())
                            console.log('ready to go')
                        } else {
                            console.log('nah')
                        }
                    })
            }
        })
}

authorization_request()