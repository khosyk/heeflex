import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'acde712c737d5541cfa2fcbc410596ff',
    language: 'en-US',
  },
});
//인스턴스 생성방법 create 는 인스턴스를 생성할때 사용, baseURL 뒤에 params가 ? 뒤로 적용된다.
// ex) api_key = exexe?language=en-US

const imdb = axios.create({
  baseURL: 'https://imdb-api.com/en/API/Ratings/k_n4i4ll2j',
});

export const imdbTest = {
  rating: (id) => imdb.get(`${id}`),
};

export const tvApi = {
  airingToday: () => api.get('tv/airing_today'),
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const movieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: "videos",
            },
        }),
    search: (term) =>
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term), // params 에 들어가는 term이 url에서 변경되기 떄문에 encoding 해줘야한다.
            },
        }),
};

export default api;
