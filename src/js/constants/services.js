export const ENDPOINT_ARTICLE = 'http://apiv2.test/api/article';
export const ENDPOINT_USER = 'http://apiv2.test/api/user';


export const CLIENT_ID = "3";
export const REDIRECT_URI = "http://localhost:3000/callback";
export const SECRET = "NJZ9joF39TL6FE0yt0N64LlG4hlponto6AtNoQC1";

// Primeiro endpoint para obter o código de autorização
export const AUTH_ENDPOINT = 'http://apiv2.test/oauth/authorize?' +
    'client_id='+CLIENT_ID +
    '&redirect_uri='+REDIRECT_URI +
    '&response_type=code';

// Segundo endpoint para obter o Access Token
export const TOKEN_ENDPOINT = 'http://apiv2.test/oauth/token';

// OBTER O UTILIZADOR
export const AUTH_USER_ENDPOINT = 'http://apiv2.test/api/authuser';

export const REGISTER_ENDPOINT = 'http://apiv2.test/register';