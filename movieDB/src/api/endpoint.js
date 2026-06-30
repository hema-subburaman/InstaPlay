const BASE_URL = "https://api.themoviedb.org";

const VERSION = "3";

const RENDER_URL = "https://jwt-authentication-kfpk.onrender.com";

export const TOKEN_API = `${BASE_URL}/${VERSION}/authentication/token/new?api_key=019085ae8fd360fcd800ae1d44592de2`;

export const LOGIN_API = `${BASE_URL}/${VERSION}/authentication/token/validate_with_login?api_key=019085ae8fd360fcd800ae1d44592de2`;

export const MOVIE_API = `${RENDER_URL}/movies`;

export const MOVIEDETAILS_API = `${RENDER_URL}/movies`;

export const SEARCH_API = `${BASE_URL}/${VERSION}/search/movie?api_key=d0605f7c77a7e9ffd22f6f77c12e0f8f`;

export const VIDEO_API = `${RENDER_URL}/movies`;
