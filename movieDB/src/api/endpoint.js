const BASE_URL = "https://api.themoviedb.org"

const VERSION = "3"

export const TOKEN_API = `${BASE_URL}/${VERSION}/authentication/token/new?api_key=019085ae8fd360fcd800ae1d44592de2`

export const LOGIN_API = `${BASE_URL}/${VERSION}/authentication/token/validate_with_login?api_key=019085ae8fd360fcd800ae1d44592de2`

export const MOVIE_API = `${BASE_URL}/${VERSION}/trending/movie/day?api_key=d0605f7c77a7e9ffd22f6f77c12e0f8f`

export const MOVIEDETAILS_API = `${BASE_URL}/${VERSION}/movie`

export const SEARCH_API = `${BASE_URL}/${VERSION}/search/movie?api_key=d0605f7c77a7e9ffd22f6f77c12e0f8f`

export const VIDEO_API = `${MOVIEDETAILS_API}/`