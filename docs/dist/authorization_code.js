export function authorization_code() {
    return get_authorization_code();
}

const get_authorization_code = async () => {
    let baseUrl = 'https://bimaekap.github.io/?code=';
    let url = window.location.href
    let authorization_code = url.replace(baseUrl, "");
    return authorization_code;
}

