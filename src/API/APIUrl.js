const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = '?api_key=2a98c5963043844724a4e4dfd74300b7'
// const API_POSTER = 'https://image.tmdb.org/t/p/w500/'

const APIConfig = {
  img_url: 'https://image.tmdb.org/t/p/original/',
  genres_url: '/genre/movie/list',
  search_url: '/search/multi',
  details: {
    item_url: (cat, id) => `${API_URL}/${cat}/${id}${API_KEY}&language=es-ES}`,
    videos_url: (cat, id) => `${API_URL}/${cat}/${id}/videos${API_KEY}&language=es-ES}`,
    similar_url: (cat, id) => `${API_URL}/${cat}/${id}/similar${API_KEY}&language=es-ES}`,
    cast_url: (cat, id) => `${API_URL}/${cat}/${id}/credits${API_KEY}&language=es-ES}`
  },
  all: {
    trending: `${API_URL}/trending/all/week${API_KEY}&language=es-ES`,
    discover_movie: `${API_URL}/discover/movie${API_KEY}&language=es-ES&page=1&page=1&sort_by=vote_count.desc`,
    discover_tv: `${API_URL}/discover/tv${API_KEY}&language=es-ES&page=1&sort_by=vote_count.desc`
  },
  other: {
    trending: (category) => `${API_URL}/trending/${category}/week${API_KEY}&language=es-ES`,
    list: (category, lists) => `${API_URL}/${category}/${lists}${API_KEY}&language=es-ES&sort_by=vote_count.desc`
  }

}
export { API_URL, API_KEY, APIConfig }
