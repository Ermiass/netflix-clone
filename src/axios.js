import axios from "axios"
  const instance = axios.create({
    baseURL: " https://api.themoviedb.org/3"
  })
  export default instance;

  
  
  // https://api.themoviedb.org/3/trending/all/week?api_key=466d452d65dbc61f0f2be0e1f0b42951&language=en-US